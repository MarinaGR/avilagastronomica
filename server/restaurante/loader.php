<?php
$ref=$_GET["id"];

if(!file_exists("../../resources/xml/restaurantes/".$ref.".xml"))
{

	{
		// Always interesting to define error_reporting level for current script
		error_reporting(E_ERROR | E_PARSE | E_WARNIG | E_NOTICE);
		// Always interesting to define the relative path to root of the current file (saves time in copy-paste chunks of code)
		$h_root_path="./../";
		// Always interesting to define a unique page id (saves problems on ajax behaviour)
		$h_page_id="restaurant_loader";
		// Always interesting to catch browser accepted language
		$h_browser_language=substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
	}
	
	{
		// Load hoopale php functions file (if you do not include this file, hoopale will not work properly)
		// Always interesting to check if file exists before including it.
		if(file_exists($h_root_path."functions/h_functions_php.php"))
		{
			include($h_root_path."functions/h_functions_php.php");
		}
		else
		{
			// If the functions file cannot be found, do whatever you want here, this is only a default error exit call
			// (For public web sites this not very pretty)
			exit("[h_error_php_functions_file_not_found]");
		}
	}
	
	{
		include($h_root_path."functions/ov_constants.php");
		//If we need a db_connection, we can invoke h_function_get_db_connection
		//If we provide connection values parameters, the connection file will be created, so again write permissions...
		$h_connection=h_function_get_db_connection(array(
			"relative_to_root_url_to_redirect_on_fail"=>$h_root_path."index.html",
			"connection_values"=>array("host"=>$h_host,"user"=>$h_user_db,"password"=>$h_passw_db,"dbname"=>$h_dbname,"port"=>"","socket"=>""),
			//"alternative_connection_values"=>array("host"=>$_host_a,"user"=>$h_user_db_a,"password"=>$h_passw_db_a,"dbname"=>$h_dbname_a,"port"=>"","socket"=>""),
			"overwrite_current_connection_file"=>true,
			"connection_file_url"=>$h_root_path."/configuration/h_db_connection.conf",
			"encrypt_seed"=>array(array("A","!*!"),array("1","-*-"),array("O","***"),array("3","*?*"),array("z","*+*"))
		));
		
		if(!$h_connection)
		{
			//do whatever you want here, this is only a default error exit call
			
			exit("[h_error_connecting_to_db]");
		}
	}

	?>
	<!DOCTYPE HTML>
	<html>
	<head>
		<title>ÁVILA GASTRONÓMICA</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no">
		<meta name="robots" content="NOINDEX,NOFOLLOW,NOARCHIVE,NOODP,NOSNIPPET">
		<meta name="description" content="ÁVILA GASTRONÓMICA, información de todos los restaurantes de Ávila, Android, iOS, Web. Reservas, carta, ofertas, información...">
		<meta name="cache-control" content="no-cache">
		<meta name="expires" content="-1">
		<link id="ov_style_link_01" href="./../../css/styles.css" rel="stylesheet" type="text/css">
		<script src="./../../js/jquery.js"></script>
		<script src="./../../js/general.js"></script>	
	</head>
	
	<body class="ov_body_01" onload="load_text_xml()">		
		<?php
			
			//show the last restaurants
			$row=h_function_get_active_item_by_id(array(
				"connection"=>$h_connection,
				"h_table"=>"h_restaurants_items",
				"id"=>$ref
			));
			
			if(!$row)
			{
				echo "<div style='padding:10px;text-align:center'>No existe el restaurante.</div>";	
			}
			else 
			{
				$nombre="";
				$splitted_nom=explode($GLOBALS["h_separador_02"], urldecode($row["c12"]));
				
				foreach($splitted_nom as $split_n)
				{
					$nombres=explode($GLOBALS["h_separador_01"], $split_n);
					$language=$nombres[0];
					
					if($_SESSION["OV_LANG"]==$language)
					{
						$nombre=$nombres[1];
					}	
				}	
				if($nombre=="")
				{
					$nombre=$nombres[0];
				}
				
				$descr="";
				$splitted_descr=explode($GLOBALS["h_separador_02"], urldecode($row["c13"]));
				
				foreach($splitted_descr as $split_d)
				{
					$descripciones=explode($GLOBALS["h_separador_01"], $split_d);
					$language=$descripciones[0];
					
					if($_SESSION["OV_LANG"]==$language)
					{
						$descr=$descripciones[1];
					}	
				}	
				if($descr=="")
				{
					$descr=$descripciones[0];
				}	
				?>
				
				<div style="padding:10px;">
					<h1><?php echo $nombre; ?></h1>
					<br><?php echo urldecode($row["c7"]); ?>
					<br><?php echo urldecode($row["c8"]); ?> <?php echo urldecode($row["c9"]); ?>
					<br><?php echo urldecode($row["c10"]); ?> <?php echo urldecode($row["c11"]); ?>
					<div class="ov_clear_03"></div>
					<div class="ov_container_01">
						<img src="../../resources/images/general/tlf.png" />
						<br><?php echo urldecode($row["c6"]); ?>
					</div>
					<div class="ov_container_01"> 
						<img src="../../resources/images/general/marker.png" />
						<br><span id="ov_texto_como_llegar"></span>
					</div>
					<div class="ov_container_01">
						<img src="../../resources/images/general/reservas.png" />
						<br><span id="ov_texto_reservas"></span>
					</div>
					<div class="ov_clear_03"></div>
					<div class="ov_title_03">
						<span id="ov_texto_informacion"></span>
					</div>
					<br><?php echo $descr; ?><br>
				</div>
				
				<?php
			}
			?>				

	</body>
	</html>
<?php
}
else {
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>ÁVILA GASTRONÓMICA</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no">
		<meta name="robots" content="NOINDEX,NOFOLLOW,NOARCHIVE,NOODP,NOSNIPPET">
		<meta name="description" content="ÁVILA GASTRONÓMICA, información de todos los restaurantes de Ávila, Android, iOS, Web. Reservas, carta, ofertas, información...">
		<meta name="cache-control" content="no-cache">
		<meta name="expires" content="-1">
		<link id="ov_style_link_01" href="./../../css/styles.css" rel="stylesheet" type="text/css">
		<script src="./../../js/jquery.js"></script>
		<script src="./../../js/general.js"></script>	
		
		<script>
		  	readXML_restaurant("../../resources/xml/restaurantes/<?php echo $ref;?>.xml", "id", "<?php echo $ref;?>", "ov_id_restaurant");
		</script>
	</head>
	
	<body class="ov_body_01">
		<div id="ov_id_restaurant"></div>		
	</body>
</html>
	<?php
}
?>