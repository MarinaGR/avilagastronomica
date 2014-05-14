<?php
{
	// Always interesting to define error_reporting level for current script
	error_reporting(E_ERROR | E_PARSE | E_WARNIG | E_NOTICE);
	// Always interesting to define the relative path to root of the current file (saves time in copy-paste chunks of code)
	$h_root_path="./../";
	// Always interesting to define a unique page id (saves problems on ajax behaviour)
	$h_page_id="map_loader";
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
	//Here we recover GET parameters (url)
	$url_map=$_GET["url"];

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

		<iframe style="width:100%;height:300px;border:none;" seamless="seamless" src="<?php echo urldecode($url_map);?>"></iframe>

	</body>
</html>
