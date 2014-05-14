<?php
session_start();

$SUPERADMINPASS="ag12345";

$h_host="127.0.0.1";
$h_user_db="root";
$h_passw_db="";
$h_dbname="avgastronomica";

$h_host_a="127.0.0.1";
$h_user_db_a="avgatronomica";
$h_passw_db_a="12345_avg";
$h_dbname_a="avgastronomica";

$h_separador_01="*ov*";
$h_separador_02="*s_ov*";


function check_admin_login()
{
	if($_SESSION["SUPERADMINLOGGED"]==1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

?>