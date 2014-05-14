<?php
include("h_functions_php.php");
include("ov_constants.php");
session_start();

$h_connection=h_function_get_db_connection(array(
		"relative_to_root_url_to_redirect_on_fail"=>"",
		"connection_values"=>array("host"=>$h_host,"user"=>$h_user_db,"password"=>$h_passw_db,"dbname"=>$h_dbname,"port"=>"","socket"=>""),
		//"alternative_connection_values"=>array("host"=>$_host_a,"user"=>$h_user_db_a,"password"=>$h_passw_db_a,"dbname"=>$h_dbname_a,"port"=>"","socket"=>""),
		"overwrite_current_connection_file"=>true,
		"connection_file_url"=>"./../configuration/h_db_connection.conf",
		"encrypt_seed"=>array(array("A","!*!"),array("1","-*-"),array("O","***"),array("3","*?*"),array("z","*+*"))
));
if(!$h_connection)
{
	exit("[h_error_connecting_to_db]");
}

switch ($_POST["op"]) {
	
	case "acceso": 
		
		$array_of_values=array();
		$values=$_POST["v"];
		$exploded_values=explode("&",$values);
		foreach($exploded_values as $value)
		{
			$val=explode("=",$value);
			$array_of_values[$val[0]]=array($val[0],$val[1]);
		}
		
		if ($array_of_values["passw"][1]!=$SUPERADMINPASS)
		{
			$jsondata['error']="1";
			$jsondata['error_message']="Valores incorrectos";
			$json=json_encode($jsondata);
			echo $json;
			exit();
		}   	
		
		$_SESSION["access"]=1;
		$_SESSION["SUPERADMINLOGGED"]=1;
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']="OK";
		$json=json_encode($jsondata);
		echo $json;
		break;
	
    case "cs":
		if (!session_destroy())
		{
			$jsondata['error']="1";
			$jsondata['error_message']="No se pudo cerrar la sesión";
			$json=json_encode($jsondata);
			echo $json;
			exit();
		}
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']="OK";
		$json=json_encode($jsondata);
		echo $json;
		exit();
		break;
	
	case "change_language":
		$array_of_values=array();
		$values=$_POST["v"];
		$exploded_values=explode("&",$values);
		foreach($exploded_values as $value)
		{
			$val=explode("=",$value);
			$array_of_values[$val[0]]=array($val[0],$val[1]);

			$_SESSION["OV_LANG"]=$array_of_values["lang"][1];
		}		
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']="OK";
		$json=json_encode($jsondata);
		echo $json;
		exit();		
		break;
		
	case "get_latlong":
		$array_of_values=array();
		$values=$_POST["v"];
		$updatestring="";
		$exploded_values=explode("&",$values);
		foreach($exploded_values as $value)
		{
			$val=explode("=",$value);	
			if($val[0]=="c1")
			{
				$ref=$val[1];
			}
			elseif($val[0]=="table")
			{
				$table=$val[1];
			}
		}
		
		$query="SELECT * from $table WHERE c1='$ref'"; 
		$result=$h_connection->query($query);
		
		if(!$result)
		{		
			$jsondata['error']=$query;
			$jsondata['error_message']="SELECT BBDD ERROR.";
			$json=json_encode($jsondata);
			echo $json;
			exit();
		}
		
		$row=$result->fetch_assoc(); 
		
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']=array(urldecode($row["c12"]),urldecode($row["c14"]));
		$json=json_encode($jsondata);
		echo $json;
		exit();	
		break;
		
	case "near_locations":
		$array_of_values=array();
		$values=$_POST["v"];
		$updatestring="";
		$exploded_values=explode("&",$values);
		foreach($exploded_values as $value)
		{
			$val=explode("=",$value);	
			if($val[0]=="radio")
			{
				$radio=$val[1];
			}
			elseif($val[0]=="table")
			{
				$table=$val[1];
			}
			elseif($val[0]=="lat")
			{
				$lat1=$val[1];
			}
			elseif($val[0]=="long")
			{
				$long1=$val[1];
			}
		}
		
		$RADIO_TIERRA=6378;
		
		$query="SELECT * from $table"; 
		$result=$h_connection->query($query);
		if(!$result)
		{		
			$jsondata['error']=$query;
			$jsondata['error_message']="SELECT BBDD ERROR.";
			$json=json_encode($jsondata);
			echo $json;
			exit();
		}
		while($row=$result->fetch_assoc())
		{
			//Para cada coordenada de un restaurante comparar con la posición del usuario y si está en un radio de X kilometros almacenar en el array que se devolverá
			$coordenadas=explode(",", urldecode($row["c14"]));
			
			$lat2=$coordenadas[0];
			$long2=$coordenadas[1];

			$query1="SELECT (acos(sin(radians($lat1)) * sin(radians($lat2)) + 
					cos(radians($lat1)) * cos(radians($lat2)) * 
					cos(radians($long1) - radians($long2))) * $RADIO_TIERRA) as 
					distanciaPunto1a2;"; 
					
			$result1=$h_connection->query($query1);
			if(!$result1)
			{		
				$jsondata['error']=$query1;
				$jsondata['error_message']="SELECT BBDD ERROR 02.";
				$json=json_encode($jsondata);
				echo $json;
				exit();
			}
			$dist=$result1->fetch_assoc();
			
			if($dist["distanciaPunto1a2"]<$radio)
			{
				$restaurante="";
				$nombres_splitted=explode($h_separador_02, urldecode($row["c12"]));
				foreach($nombres_splitted as $split1)
				{
					$restaurante=$split1;
					$nombre=explode($h_separador_01, $split1);
					
					if($nombre[0]==$_SESSION["OV_LANG"])
					{
						$restaurante=$nombre[1];
						break;
					}
					
				}
				$distancias[]=array(urldecode($row["c1"]), $dist["distanciaPunto1a2"], urldecode($row["c14"]), $restaurante);
			}			
		} 
		
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']=$distancias;
		$json=json_encode($jsondata);
		echo $json;
		exit();	
		break;
	
	case "geoloc":
		$array_of_values=array();
		$values=$_POST["v"];
		$updatestring="";
		$exploded_values=explode("&",$values);
		foreach($exploded_values as $value)
		{
			$val=explode("=",$value);	
			if($val[0]=="c1")
			{
				$ref=$val[1];
			}
			elseif($val[0]=="table")
			{
				$table=$val[1];
			}
			else
			{							
				$updatestring.=$val[0]."='".urlencode($val[1])."',";
			}
		}
		
		$query0="SELECT * from $table WHERE c1='$ref'"; 
		$result0=$h_connection->query($query0);
		
		if($result0)
		{		
			if($h_connection->affected_rows>=1)
			{ 
				$row=$result0->fetch_assoc(); //previous values
				$updatestring.="c9='".$row["c7"]."',c10='".$row["c8"]."',";
			}
		}
		
		$updatestring.="c8='".time()."',c1='$ref'";			
		
		$query="UPDATE $table SET $updatestring WHERE c1='$ref'";  
		$result=$h_connection->query($query);
		if(!$result)
		{
			$jsondata['error']=$query;
			$jsondata['error_message']="Fallo al actualizar.";
			$json=json_encode($jsondata);
			echo $json;
			exit();
		}
		$jsondata['error']="0";
		$jsondata['warning']="0";
		$jsondata['result']=date("H:i:s");
		$json=json_encode($jsondata);
		echo $json;
		exit();
	break;
}
?>