<?php

if(!file_exists("../../resources/xml/restaurantes/all.xml"))
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
	
	{
		//load a restaurant in db
		$h_restaurant_loading_status=h_function_load_restaurant(array(
			"connection"=>$h_connection,
			"overwrite_current"=>true,
			"create_if_not_exists"=>true,
			"id"=>"restaurant_1", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory 
			"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory 
			"tlf"=>"920223344", 
			"calle"=>"Teso del Hospital Viejo, 10",
			"cp"=>"05002",
			"ciudad"=>"Ávila",
			"provincia"=>"Ávila",
			"pais"=>"España",
			"nombre"=>"Restaurante de prueba", //mandatory
			"descripcion"=>"Descripción del restaurante de prueba",
			"latlong"=>"40.654688,-4.700982"										
		));
		
		$h_restaurant_loading_status=h_function_load_restaurant(array(
			"connection"=>$h_connection,
			"overwrite_current"=>true,
			"create_if_not_exists"=>true,
			"id"=>"restaurant_2", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory 
			"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory 
			"tlf"=>"920556677", 
			"calle"=>"Avenida de Portugal, 2",
			"cp"=>"05004",
			"ciudad"=>"Ávila",
			"provincia"=>"Ávila",
			"pais"=>"España",
			"nombre"=>"Restaurante segundo", //mandatory
			"descripcion"=>"Descripción del segundo restaurante",
			"latlong"=>"40.654570,-4.703428"					
		));
		
		$h_restaurant_loading_status=h_function_load_restaurant(array(
			"connection"=>$h_connection,
			"overwrite_current"=>true,
			"create_if_not_exists"=>true,
			"id"=>"restaurant_3", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory 
			"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory 
			"tlf"=>"920996633", 
			"calle"=>"Travesía nueva, 35",
			"cp"=>"05003",
			"ciudad"=>"Ávila",
			"provincia"=>"Ávila",
			"pais"=>"España",
			"nombre"=>"es".$h_separador_01."Tercer restaurante".$h_separador_02."en".$h_separador_01."Third restaurant", //mandatory
			"descripcion"=>"es".$h_separador_01."Descripción del tercer restaurante".$h_separador_02."en".$h_separador_01."Description third restaurant",
			"latlong"=>"40.658457,-4.698364"									
		));
		
		$h_restaurant_loading_status=h_function_load_restaurant(array(
			"connection"=>$h_connection,
			"overwrite_current"=>true,
			"create_if_not_exists"=>true,
			"id"=>"restaurant_4", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory 
			"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory 
			"tlf"=>"920557733", 
			"calle"=>"Travesía vieja, 12",
			"cp"=>"05001",
			"ciudad"=>"Ávila",
			"provincia"=>"Ávila",
			"pais"=>"España",
			"nombre"=>"es".$h_separador_01."Cuarto restaurante".$h_separador_02."en".$h_separador_01."Fourth restaurant", //mandatory
			"descripcion"=>"es".$h_separador_01."Descripción del cuarto restaurante".$h_separador_02."en".$h_separador_01."Description fourth restaurant",
			"latlong"=>"40.666785,-4.685272"							
		));
		
		$h_restaurant_loading_status=h_function_load_restaurant(array(
			"connection"=>$h_connection,
			"overwrite_current"=>true,
			"create_if_not_exists"=>true,
			"id"=>"restaurant_5", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory 
			"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory 
			"tlf"=>"920987654", 
			"calle"=>"Cuarta avenida, 1",
			"cp"=>"05002",
			"ciudad"=>"Ávila",
			"provincia"=>"Ávila",
			"pais"=>"España",
			"nombre"=>"es".$h_separador_01."Quinto restaurante".$h_separador_02."en".$h_separador_01."Fifth restaurant", //mandatory
			"descripcion"=>"es".$h_separador_01."Descripción del quinto restaurante".$h_separador_02."en".$h_separador_01."Description fifth restaurant",
			"latlong"=>"40.651742,-4.702709"						
		));
		
		
		/*********************** GET PARAMS *************************/
		
		$start=$_GET["start"];
		if(!isset($_GET["start"]) || $_GET["start"]=="")
			$start=0;
		
		$limit=$_GET["limit"];
		if(!isset($_GET["limit"]) || $_GET["limit"]=="")
		$limit=2;
		
		$search_fields=array(array("c12",$_GET["c12"]));
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
	
	<body class="ov_body_01">
		<h1>*RESTAURANTES</h1>

		<?php
			
			//show the last restaurants
			$rows=h_function_get_search_items(array(
				"connection"=>$h_connection,
				"start"=>$start,
				"limit"=>$limit,
				"order_by"=>"id",
				"order_dir"=>"ASC",
				"paginate_type"=>"none",
				"h_table"=>"h_restaurants_items",
				"search"=>$search_fields,
				"classes"=>array()
			));
			
			$total_rows=h_function_get_all_items(array("connection"=>$h_connection, "h_table"=>"h_restaurants_items", "search"=>$search_fields));
			$total_items=count($total_rows);
			$total_pages=round($total_items/$limit);
			
			if(!$rows)
			{
				echo "<div style='padding:10px;text-align:center'>No hay ningún restaurante.</div>";	
			}
			else 
			{
				?>
				<form id="form_search_restaurants_01" action="">
					<input type="text" name="c12" id="restaurants_c12" placeholder="Buscar por nombre" class="ov_input_search" />
					<span id="restaurants_send" class="ov_image_search" onclick="search_items('<?php echo $start;?>', '<?php echo $limit;?>', '0', '<?php echo $total_pages;?>', 'form_search_restaurants_01');">
						<img src="../../resources/images/general/lupa_01.png" alt="Buscar" title="Buscar" style="vertical-align: middle" />
					</span>
				</form>
				<?php		
				foreach($rows as $row)
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

					?>
					
					<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href='../../restaurante.html?id=<?php echo urldecode($row["c1"]); ?>'" >
						<p style="font-size:1.5em;text-transform:uppercase"><?php echo $nombre; ?></p>
						<span style="font-size:1.2em;font-weight:bold"><?php echo urldecode($row["c6"]); ?></span>
						
						<p style="font-size:0.9em"><?php echo urldecode($row["c7"]); ?><br><?php echo urldecode($row["c8"]); ?> <?php echo urldecode($row["c9"]); ?></p>						
					</div>
					<?php
				}
			}
			?>
		
			<p>
				<?php 
					for($pag=0;$pag<$total_pages;$pag++)
					{
						//echo '<a href="#" onclick="go_to_page('.$pag*$limit.')">'.($pag+$limit-1).'</a> ';
						echo '<a href="#" onclick="search_items(\''.$start.'\', \''.$limit.'\', \''.($pag*$limit).'\', \''.$total_pages.'\', \'form_search_restaurants_01\')" class="ov_page_link">'.($pag+$limit-1).'</a> ';
					}
				?>
			</p>
				
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
		  //readXML_restaurants("../../resources/xml/restaurantes/all.xml", "id", "ov_id_restaurants");
		  search_items_xml('0', '2', '0', '', 'form_search_restaurants_01', 'ov_id_restaurants');
		</script>
	</head>
	
	<body class="ov_body_01">
		<h1>RESTAURANTES</h1>
		
		<form id="form_search_restaurants_01" action="">
			<input type="text" name="c12" id="restaurants_c12" placeholder="Buscar por nombre" class="ov_input_search" />
			<span id="restaurants_send" class="ov_image_search" onclick="search_items_xml('0', '2', '0', '', 'form_search_restaurants_01', 'ov_id_restaurants');">
				<img src="../../resources/images/general/lupa_01.png" alt="Buscar" title="Buscar" style="vertical-align: middle" />
			</span>
		</form>
				
		<div id="ov_id_restaurants"></div>
	</body>
</html>
	<?php
}
?>