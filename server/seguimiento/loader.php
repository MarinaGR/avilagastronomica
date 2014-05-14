<?php
{
	// Always interesting to define error_reporting level for current script
	error_reporting(E_ERROR | E_PARSE | E_WARNIG | E_NOTICE);
	// Always interesting to define the relative path to root of the current file (saves time in copy-paste chunks of code)
	$h_root_path="./../";
	// Always interesting to define a unique page id (saves problems on ajax behaviour)
	$h_page_id="geoloc_loader";
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
	//Here we recover POST parameters (day and month)
	
	$current_user_day=$_GET["day"];
	$current_user_month=$_GET["month"];
	
	if($current_user_month!="3")
	{
		$out_of_key_dates=true;
	}
	elseif($current_user_day<="18" || $current_user_day>"20")
	{
		$out_of_key_dates=true;
	}
	else
	{
		$out_of_key_dates=false;
		$current_key_day=$current_user_day;
	}
}

{
	//If we need a db_connection, we can invoke h_function_get_db_connection
	//If we provide connection values parameters, the connection file will be created, so again write permissions...
	$h_connection=h_function_get_db_connection(array(
		"relative_to_root_url_to_redirect_on_fail"=>$h_root_path."publicidad/default.php",
		"connection_values"=>array("host"=>"127.0.0.1","user"=>"cofrade","password"=>"12345_ser","dbname"=>"cofrade","port"=>"","socket"=>""),
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
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"via_matris_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Via Matris", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.655224,-4.702798",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.655224,-4.702798", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"estudiantes_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de los Estudiantes", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.654239,-4.695476",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.654239,-4.695476", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"palmas_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de las palmas", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656143,-4.697215",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656143,-4.697215", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"ilusion_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de la Ilusión", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.652770,-4.693834",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.652770,-4.693834", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"esperanza_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de la Esperanza", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656188,-4.701443",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656188,-4.701443", 
		"previous_timestamp"=>time()				
	));	
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"estrella_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de la Estrella", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.654829,-4.689956",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.654829,-4.689956", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"medinaceli_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de Medinaceli", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656143,-4.697215",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656143,-4.697215", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"miserere_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión del Miserere", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.654093,-4.696927",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.654093,-4.696927", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"silencio_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión del Silencio", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.651781,-4.702348",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.651781,-4.702348", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"batallas_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de las Batallas", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.654239,-4.695476",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.654239,-4.695476", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"madrugada_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de la madrugada", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.657454,-4.700054",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.657454,-4.700054", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"pasos_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de los pasos", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656143,-4.697215",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656143,-4.697215", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"via_crucis_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Via Crucis", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656143,-4.697215",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656143,-4.697215", 
		"previous_timestamp"=>time()				
	));

	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"pasion_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Pasión y Santo Entierro", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.656143,-4.697215",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.656143,-4.697215", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"soledad_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión de la Soledad", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.654239,-4.695476",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.654239,-4.695476", 
		"previous_timestamp"=>time()				
	));
	
	$h_event_loading_status=h_function_load_event_to_track(array(
		"connection"=>$h_connection,
		"overwrite_current"=>true,
		"create_if_not_exists"=>true,
		"id"=>"resucitado_event", //unique id (no spaces, no special chars, just numbers and regular letters please...) mandatory of course
		"status"=>"1", // 1 will mean active, 0 will mean suspended,	mandatory of course		
		
		"name"=>"Procesión del Resucitado", // 0 will mean no featured day for this ad
		"current_latlong"=>"40.659773,-4.690653",
		"current_timestamp"=>time(),
		"previous_latlong"=>"40.659773,-4.690653", 
		"previous_timestamp"=>time()				
	));

}


?>
<!DOCTYPE HTML>
<html>
<head>
<title>SER COFRADE 2014 - Guía Semana Santa - Cadena SER Ávila</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, maximum-scale=3.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
<meta name="robots" content="NOINDEX,NOFOLLOW,NOARCHIVE,NOODP,NOSNIPPET">
<meta name="description" content="SER COFRADE 2014, La guía de información para la Semana Santa Ávila 2014. Procesiones, Cofradías, Horarios, Recorridos, Información...">
<META name="CACHE-CONTROL" content="NO-CACHE">
<META name="EXPIRES" content="-1">
<link id="ov_style_link_01" href="./../../styles/styles_01_complete.css" rel="stylesheet" type="text/css">	

<script src="./../../js/jquery.js"></script>
<script src="./../../js/jqueryui.js"></script>
<script src="./../../js/general.js"></script>

</head>
<body style="margin:0px;background-color:#FFF">
<div>
<?php
{
	if($out_of_key_dates)
	{
	?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			No hay ninguna procesión en estos momentos<br>
			<span style="font-size:0.5em">Disculpe las molestias</span>
		</div>
	<?php
		exit();
	}
	
	if ($current_user_day=='11' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"via_matris_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			VIA MATRIS<br>
			<span style="font-size:0.5em">Salida a las 20:45h desde Convento Santa Teresa</span>
		</div>
		<div style="position:relative;width:90%;margin:auto">
			<div id="ov_mapa_ruta_via_matris_1" style="width:100%;">
				<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza La Santa, Ávila&destination=Plaza La Santa, Ávila&avoid=tolls|highways&mode=walking&waypoints=Paseo Rastro, Ávila|Calle San Segundo, Ávila|Plaza Catedral, Ávila|Calle Tomás Luis de Victoria, Ávila|Plaza Zurraquín, Ávila|Plaza Mercado Chico, Ávila|Calle Vallespín, 9, Ávila|Calle Jimena Blázquez, Ávila|Calle Las Dama, Ávila|Calle Intendente Aizpuru, Ávila&language=es&zoom=15&center=40.656485,-4.700371"></iframe>	
			</div>
			<br>
			<div id="ov_mapa_ruta_via_matris_1_b" style="width:100%;">
				<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			</div>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
				<!--<p>- La última actualización desde la procesión se realizó hace 
				<?php /*switch(date("H",time()-$h_tracking_event["c8"]))
					  {
						case "01": echo " ".intval(date("i",time()-$h_tracking_event["c8"]))." minutos"; break;
						case "02": echo " una horas y ".intval(date("i",time()-$h_tracking_event["c8"]))." minutos"; break;
						case "03": echo " dos horas y ".intval(date("i",time()-$h_tracking_event["c8"]))." minutos"; break;
						default:   echo " más de dos horas "; break;
					  }*/
				?>
				(a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b> h.)</p>-->
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		<!-- 
		<div style="width:90%;margin:auto;padding-top:10px;font-family:'3';font-size:0.9em;display:none">		
			<div id="ov_geo_route_2" style="display:none">
				<iframe id="ov_mapa_ruta_via_matris_2" style="width:100%;height:300px;border:none;"  src="">Espera, por favor...</iframe>
			
				<div id="ov_geo_route_2_text" style="text-align:center;padding-top:10px;padding-bottom:10px">
					
				</div>				
				<br>
				<div class="ov_button_01" id="ov_button_01_via_matris_hide_map" onclick="$('#ov_geo_route_2').hide()">
				Ocultar
				</div>					
			</div>
			<br><br>
			<span class="ov_span_04" id="ov_place_via_matris_1">Pulsa aquí para obtener una ruta desde tu ubicación actual</span>
			<script>
				$("#ov_place_via_matris_1").click(function(e){ //Recoger la localización del usuario
					show_route_2("Localización del usuario","","","ov_mapa_ruta_via_matris_2","ov_geo_route_2");
				});
			</script>
		</div>
		-->
		<?php
	}
	
	if ($current_user_day=='12' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"estudiantes_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			PROCESIÓN DE LOS ESTUDIANTES<br>
			<span style="font-size:0.5em">Salida a las 21:15h desde la Iglesia de San Pedro Apóstol (Plaza de Santa Teresa)</span>
		</div>
			
		<div style="position:relative;width:90%;margin:auto">
		
			<iframe id="estudiantes" style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Santa Teresa, Ávila&destination=Plaza Santa Teresa, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Segundo, Ávila|Plaza Catedral, Ávila|Calle Alemania, Ávila|Plaza Teniente Arévalo, Ávila|Calle Cardenal Pla y Deniel, Ávila|Plaza Pedro Dávila, Ávila|Calle Caballeros, Ávila|Plaza Mercado Chico, Ávila|Plaza Zurraquín, Ávila|Calle Tomás Luis de Victoria, Ávila|Plaza Catedral, Ávila|Calle San Segundo, Ávila&language=es&zoom=15&center=40.656567,-4.698075"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
	
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='13' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"palmas_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			PROCESIÓN DE "LAS PALMAS"<br>
			<span style="font-size:0.5em">Salida al finalizar la Misa Mayor de las 11:00h desde la Plaza de la Catedral</span>
		</div>
		<div style="position:relative;width:90%;margin:auto">

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Catedral, Ávila&destination=Plaza San Antonio, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Segundo, Ávila|Plaza Santa Teresa, Ávila|Calle Comandante Albarrán, Ávila|Calle Duque de Alba, Ávila|Calle Isaac Peral, Ávila|Plaza Santa Ana, Ávila|Paseo de la Estacion, Ávila|Calle Ferrocarril, Ávila|Calle La Sierpe, Ávila&language=es&zoom=14&center=40.660164,-4.692457"></iframe>	

			<br>

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='14' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"ilusion_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_ilusion').toggle();">
			PROCESIÓN DE LA ILUSIÓN<br>
			<span style="font-size:0.5em">Salida a las 21:00h desde la Ermita de Nuestra Señora de Las Vacas (Plaza de Las Vacas)</span>
		</div>
		<div style="position:relative;width:90%;margin:auto;display:none" id="ov_zona_ilusion">

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Las Vacas, Ávila&destination=Plaza Las Vacas, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Cristóbal, Ávila|Calle Jesús del Gran Poder, 2, Ávila|Calle Francisco Gallego, Ávila|Plaza Rastro, Ávila|Plaza Pedro Dávila, Ávila|Calle Cardenal Pla y Deniel, Ávila|Plaza Teniente Arévalo, Ávila|Plaza José Tome, Ávila|Calle Don Gerónimo Ávila|Calle Cruz Vieja, Ávila|Plaza Catedral, Ávila|Calle San Segundo, Ávila|Calle Dean Castor Robledo, Ávila&language=es&zoom=15&center=40.656143,-4.697067"></iframe>	

			<br>

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"esperanza_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_esperanza').toggle();">
			PROCESIÓN DE LA ESPERANZA<br>
			<span style="font-size:0.5em">Salida a las 19:30h desde la Iglesia de San Juan Bautista, Calle Blasco Jimeno</span>
		</div>
		<div style="position:relative;width:90%;margin:auto;display:none" id="ov_zona_esperanza">
		
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Calle Blasco Jimeno, Ávila&destination=Calle Blasco Jimeno, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Ramón y Cajal, Ávila|Calle Conde Don Ramón, 4, Ávila|Calle Marqués de Benavites, Ávila|Plaza Mosén Rubí, Ávila|Calle Bracamonte, Ávila|Plaza Mercado Chico, Ávila|Calle Comuneros de Castilla Ávila|Calle Reyes Católicos, Ávila|Calle Alemania, Ávila|Plaza Catedral, Ávila|Calle Cruz Vieja, Ávila|Calle Don Gerónimo, Ávila|Plaza Teniente Arévalo, Ávila|Calle Pedro de Lagasca, Ávila|Plaza Pedro Dávila, Ávila|Calle Caballeros, Ávila|Calle Martín Carramolino, Ávila&language=es&zoom=15&center=40.657055,-4.69977"></iframe>	

			<br>

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		<br>

		<?php
	}
	
	if ($current_user_day=='15' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"estrella_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_estrella').toggle();">
			PROCESIÓN DE LA ESTRELLA<br>
			<span style="font-size:0.5em">Salida a las 16:15h desde la Iglesia de Santa María de Jesús, Calle Cristo de la Luz</span>
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_estrella">

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Calle Cristo de la Luz, Ávila&destination=Calle Cristo de la Luz, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Joaquín, Ávila|Calle San Juan de la Cruz, Ávila|Calle Las Madres, Ávila|Calle Padre Silverio, Ávila|Calle Duque de Alba, Ávila|Calle Don Ferreol Hernández, Ávila|Plaza de Italia, Ávila|Calle Los Leales, Ávila|Calle San Segundo, Ávila|Plaza Santa Teresa, Ávila|Plaza Ejército, Ávila|Calle San Juan de La Cruz, Ávila|Calle San Joaquín, Ávila&language=es&zoom=15&center=40.656664,-4.693685"></iframe>	

			<br>

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"medinaceli_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_medinaceli').toggle();">
			PROCESIÓN DE MEDINACELI<br>
			<span style="font-size:0.5em">Salida a las 21:00h desde la Plaza de la Catedral</span>				
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_medinaceli">

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Catedral, Ávila&destination=Plaza Catedral, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Tomás Luis de Victoria, Ávila|Plaza Mercado Chico, Ávila|Calle Vallespín, 9, Ávila|Calle Ramón y Cajal, Ávila|Plaza Concepción Arenal, Ávila|Carretera Ronda Vieja, Ávila|Plaza San Vicente, Ávila|Calle San Segundo, 40, Ávila&language=es&zoom=15&center=40.658496,-4.698535"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"miserere_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_miserere').toggle();">
			PROCESIÓN DEL MISERERE<br>
			<span style="font-size:0.5em">Salida a las 00:00h (Medianoche del Martes) desde la Iglesia de la Magdalena, Calle Ntra. Sra. de Sonsoles</span>
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_miserere">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Calle Nuestra Señora de Sonsoles, 3, Ávila&destination=Calle Nuestra Señora de Sonsoles, 3, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Don Gerónimo, Ávila|Calle Cruz Vieja, Ávila|Plaza Catedral, Ávila|Calle Tostado, Ávila|Plaza San Vicente, Ávila|Calle Humilladero, 3, Ávila|Avenida Portugal, 2, Ávila|Calle San Segundo, 40, Ávila&language=es&zoom=15&center=40.657291,-4.696528"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='16' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"silencio_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_silencio').toggle();">
			PROCESIÓN DEL SILENCIO<br>
			<span style="font-size:0.5em">Salida a las 20:30h desde la Iglesia de San Nicolás (Plaza de San Nicolás)</span>
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_silencio">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza San Nicolás, Ávila&destination=Plaza Catedral, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Burgohondo, Ávila|Plaza Rollo, 15, Ávila|Calle Las Damas, Ávila|Calle Nuestra Señora de Sonsoles, 50, Ávila|Calle Francisco Gallego, Ávila|Paseo Rastro, Ávila|Calle San Segundo, Ávila&language=es&zoom=15&center=40.654336,-4.70097"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"batallas_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_batallas').toggle();">
			PROCESIÓN DEL CRISTO DE LAS BATALLAS<br>
			<span style="font-size:0.5em">Salida a las 23:00h desde la Iglesia de San Pedro Apóstol (Plaza Santa Teresa)</span>			
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_batallas">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Santa Teresa, 11, Ávila&destination=Plaza Santa Teresa, 11, Ávila&avoid=tolls|highways&mode=walking&waypoints=40.654271,-4.700455|Calle Caballeros, Ávila|Plaza Mercado Chico, Ávila|Plaza Zurraquín, Ávila|Calle Esteban Domingo, Ávila|Calle López Núñez, Ávila|Plaza San Vicente, Ávila|Calle San Segundo, Ávila&language=es&zoom=15&center=40.65734,-4.699178"></iframe>	
			
			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='17' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"madrugada_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_madrugada').toggle();">
			PROCESIÓN DE LA MADRUGADA<br>
			<span style="font-size:0.5em">Salida a las 02:00h desde la Iglesia de Mosén Rubí (Plaza de Mosén Rubí)</span>
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_madrugada">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Mosén Rubí, Ávila&destination=Plaza Mosén Rubí, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Bracamonte, Ávila|Plaza Fuente el Sol, Ávila|Carretera Ronda Vieja, 1, Ávila|Plaza San Vicente, Ávila|Calle San Segundo, 40, Ávila|Plaza Catedral, Ávila|Calle Tomás Luis De Victoria, Ávila|Plaza Zurraquín, 1, Ávila|Calle Marqués de Benavites, 2, Ávila&language=es&zoom=15&center=40.659196,-4.698299"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"pasos_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_pasos').toggle();">
			PROCESIÓN DE LOS PASOS<br>
			<span style="font-size:0.5em">Salida a las 21:00h desde la Plaza de la Catedral</span>
		</div>
		<div style="position:relative;width:90%;margin:auto" id="ov_zona_pasos">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Catedral, 9, Ávila&destination=Plaza Catedral, 9, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Tostado, Ávila|Calle López Núñez, Ávila|Calle Esteban Domingo, Ávila|Plaza Zurraquín, Ávila|Plaza Mercado Chico, Ávila|Calle Caballeros, Ávila|Plaza Pedro Dávila, Ávila|Calle Cardenal Pla y Deniel, Ávila|Plaza Teniente Arévalo, Ávila|Plaza José Tome, Ávila|Calle Alemania, Ávila&language=es&zoom=15&center=40.657877,-4.697912"></iframe>	

			<br>

			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='18' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"via_crucis_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_via_crucis').toggle();">
			VIA CRUCIS<br>
			<span style="font-size:0.5em">Salida a las 5:30h desde la Plaza de la Catedral</span>
		</div>
		<div style="position:relative;width:90%;margin:auto;display:none" id="ov_zona_via_crucis">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Catedral, 3, Ávila&destination=Plaza Catedral, 3, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Segundo, 36, Ávila|40.657584,-4.696786|40.658422,-4.699243|40.658658,-4.702987|40.65957,-4.705573|40.657494,-4.707386|40.655655,-4.707345|40.654988,-4.704405|40.654914,-4.703019|40.654459,-4.701024|40.654239,-4.699693|40.653929,-4.697505|40.654475,-4.697011|40.654963,-4.697022&language=es&zoom=14&center=40.661792,-4.700053"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		
		<br>

		<?php
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"pasion_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656; cursor:pointer" onclick="$('#ov_zona_pasion').toggle();">
			PASIÓN Y SANTO ENTIERRO<br>
			<span style="font-size:0.5em">Salida a las 20:30h desde la Plaza de la Catedral</span>
		</div>
		<div style="position:relative;width:90%;margin:auto;display:none" id="ov_zona_pasion">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Catedral, 9, Ávila&destination=Plaza Catedral, 9, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Alemania, Ávila|Plaza José Tome, Ávila|Plaza Teniente Arévalo, Ávila|Calle Cardenal Pla y Deniel, Ávila|Plaza Pedro Dávila, Ávila|Calle Caballeros, Ávila|Plaza Mercado Chico, Ávila|Plaza Zurraquín, Ávila|Calle Esteban Domingo, Ávila|Calle López Núñez, Ávila|Calle Tostado, Ávila&language=es&zoom=15&center=40.657877,-4.697912"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>
		<br>

		<?php
	}
	
	if ($current_user_day=='19' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"soledad_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			PROCESIÓN DE LA SOLEDAD<br>
			<span style="font-size:0.5em">Salida a las 19:45h desde la Iglesia de San Pedro Apóstol (Plaza Santa Teresa)</span>
		</div>
		<div style="position:relative;width:90%;margin:auto">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Plaza Santa Teresa, Ávila&destination=Plaza Santa Teresa, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle San Segundo, Ávila|Avenida de Portugal, Ávila|Calle Dos de Mayo, Ávila|Calle Isaac Peral, Ávila|Calle Duque de Alba, Ávila|Calle Comandante Albarrán, Ávila&language=es&zoom=15&center=40.657983,-4.694427"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
	if ($current_user_day=='20' && $current_user_month=='3')
	{
		$h_tracking_event=h_function_recover_tracking_event(array(
			"connection"=>$h_connection,
			"id"=>"resucitado_event"						
		));
		?>
		<div style="font-family:'4';font-size:1.5em;color:#FFF;padding:10px;text-align:center;background-color:#5E3656">
			PROCESIÓN DEL RESUCITADO<br>
			<span style="font-size:0.5em">Salida al Fin de la Misa Solemne de las 11:00h en la Iglesia de la Sagrada Familia, Calle David Herrero</span>
		</div>
		<div style="position:relative;width:90%;margin:auto">
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin=Calle David Herrero, Ávila&destination=Calle Valladolid, 47, Ávila&avoid=tolls|highways&mode=walking&waypoints=Calle Virgen de la Soterraña, Ávila|Avenida Santa Cruz de Tenerife, Ávila|Calle La Sierpe, Ávila|Calle Ferrocarril, Ávila|Paseo de la Estacion, Ávila|Plaza Santa Ana, Ávila|Calle Arévalo, Ávila|Calle Duque de Alba, Ávila|Plaza Santa Teresa, Ávila|Calle Don Gerónimo, Ávila|Calle Alemania, Ávila|Plaza Catedral, Ávila|Calle San Segundo, Ávila|Calle Humilladero, Ávila|Calle Valladolid, Ávila&language=es&zoom=14&center=40.663131,-4.692499"></iframe>	

			<br>
			
			<iframe style="width:100%;height:300px;border:none"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&q=<?php echo urldecode($h_tracking_event["c7"]);?>&language=es&zoom=15"></iframe>
			
			<div style="font-family:'3';font-size:0.9em">		
				<p>El marcador rojo señala la posición de la cabecera de la procesión desde la última actualización.</p>
				<p>- La última actualización desde la procesión se realizó a las <b><?php echo date("H:i:s",$h_tracking_event["c8"]);?></b></p>
			</div>
			<br>
			<div class="ov_button_01" onclick="window.location.reload()" >
				Actualizar
			</div>
			<br>
		</div>

		<?php
	}
	
}
?>	
</div>
</body>
</html>
