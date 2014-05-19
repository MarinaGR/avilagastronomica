<?php

{
	// Always interesting to define error_reporting level for current script
	error_reporting(E_ERROR | E_PARSE | E_WARNIG | E_NOTICE);
	// Always interesting to define the relative path to root of the current file (saves time in copy-paste chunks of code)
	$h_root_path="./../";
	// Always interesting to define a unique page id (saves problems on ajax behaviour)
	$h_page_id="account_loader";
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
	
	/*********************** GET PARAMS *************************/
	
	$ref_user=$_GET["u"];
	
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
	
	<h1>REGISTRA UNA CUENTA</h1>
	
	<form id="form_register_user_01" action="">
		
		<input type="hidden" name="c2" id="account_c2" value="<?php echo time();?>" />
		<input type="hidden" name="c3" id="account_c3" value="<?php echo time();?>" />
		<input type="hidden" name="c4" id="account_c4" value="1" />
		<input type="hidden" name="c5" id="account_c5" value="h_accounts_items" />
		
		<input type="text" name="c8" id="account_c8" placeholder="Nombre" class="ov_input_02" value="" />
		<input type="text" name="c9" id="account_c9" placeholder="Apellidos" class="ov_input_02" value="" />
		
		<input type="text" name="c6" id="account_c6" placeholder="Teléfono" class="ov_input_02" value="" />
		<input type="text" name="c1" id="account_c1" placeholder="Email" class="ov_input_02" value="" />
		
		<input type="password" name="c10" id="account_c10" placeholder="Contraseña" class="ov_input_02" value="" />
		<input type="password" name="c11" id="account_c11" placeholder="Repetir contraseña" class="ov_input_02" value="" />
		<br/>
		<input type="button" name="save_account_button" value="Enviar" class="ov_boton_02" onclick="ov_register_user('form_register_user_01', 'account')" />
	</form>
			
</body>
</html>