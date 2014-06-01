//Global Variables

//var extern_siteurl="http://127.0.0.1/avilagastronomica";
var extern_siteurl="http://192.168.1.3/avilagastronomica";

//Get the screen and viewport size
var viewport_width=$(window).outerWidth();
var viewport_height=$(window).outerHeight();
var screen_width=screen.width;
var screen_height=screen.height; 


function onBodyLoad(page, callback)
{	
    document.addEventListener("deviceready", onDeviceReady, false);     
    
    /*Tal vez a partir de aquí en onDeviceReady, y no hace falta callback*/
    $("#ov_volver_01").click(function(e){
		onBackKeyDown();						
	});
	$("#ov_menu_01").click(function(e){
		onMenuKeyDown();		
	});	 
    
    insert_xml_general_lang_to_array();    
    
	$('#ov_select_language').val(getLanguage());
    
    $('#ov_curtain').hide();
       
    $('#ov_view_container_01').css("min-height",(viewport_height)+"px");	
    
    callback_load(page);	
}
function callback_load(page)
{
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", onOnline, false);
	
	var xml_to_load="./resources/xml/general/general_"+getLanguage()+".xml";
	
	readXML(xml_to_load, "text", "0", "ov_texto_volver");	
	readXML(xml_to_load, "text", "1", "ov_texto_menu");		
	
	readXML(xml_to_load, "text", "16", "ov_texto_informacion");
	
	readXML(xml_to_load, "text", "2", "ov_texto_idioma");
	readXML(xml_to_load, "text", "10", "ov_texto_entrar");
	readXML(xml_to_load, "text", "11", "ov_texto_descarga_android");
	readXML(xml_to_load, "text", "12", "ov_texto_descarga_iphone");
	readXML(xml_to_load, "text", "18", "ov_texto_entrar_cuenta");
	readXML(xml_to_load, "text", "19", "ov_texto_registrar_cuenta");
	readXML(xml_to_load, "text", "20", "ov_texto_entrar_invitado");
	
}


function onDeviceReady()
{
	document.addEventListener("backbutton", onBackKeyDown, false);
	document.addEventListener("menubutton", onMenuKeyDown, false);
}    
function onBackKeyDown()
{
	window.history.back();
}
function onMenuKeyDown()
{
	window.location.href='menu.html';
}

function onOnline()
{
	alert("online");
	
	var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Conexión: ' + states[networkState]);
}
function onOffline()
{
	alert("offline");
	
	var networkState = navigator.connection.type;
	
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Sin conexión: ' + states[networkState]);
}

function load_text_xml(page)
{	
	
	console.log("3");
	
	var xml_to_load="./resources/xml/general/general_"+getLanguage()+".xml";
	
	readXML(xml_to_load, "text", "0", "ov_texto_volver");	
	readXML(xml_to_load, "text", "1", "ov_texto_menu");		
	
	readXML(xml_to_load, "text", "16", "ov_texto_informacion");
	
	switch(page)
	{
		case "index":	readXML(xml_to_load, "text", "2", "ov_texto_idioma");
						readXML(xml_to_load, "text", "10", "ov_texto_entrar");
						readXML(xml_to_load, "text", "11", "ov_texto_descarga_android");
						readXML(xml_to_load, "text", "12", "ov_texto_descarga_iphone");
						readXML(xml_to_load, "text", "18", "ov_texto_entrar_cuenta");
						readXML(xml_to_load, "text", "19", "ov_texto_registrar_cuenta");
						readXML(xml_to_load, "text", "20", "ov_texto_entrar_invitado");
						break;
						
		case "menu": 	readXML(xml_to_load, "text", "2", "ov_texto_idioma");
						readXML(xml_to_load, "text", "3", "ov_texto_buscador");	
						readXML(xml_to_load, "text", "4", "ov_texto_cercanos");	
						readXML(xml_to_load, "text", "5", "ov_texto_cuenta");
						readXML(xml_to_load, "text", "17", "ov_texto_configuracion");
						readXML(xml_to_load, "text", "24", "ov_texto_qr");
						readXML(xml_to_load, "text", "18", "ov_texto_entrar_cuenta");
						readXML(xml_to_load, "text", "19", "ov_texto_registrar_cuenta");
						readXML(xml_to_load, "text", "6", "ov_texto_acerca");			
						
						search_random_featured('random_featured');				
						break;
						
		case "restaurante": readXML(xml_to_load, "text", "14", "ov_texto_como_llegar");
							readXML(xml_to_load, "text", "15", "ov_texto_reservas");
							readXML(xml_to_load, "text", "21", "ov_texto_carta");
							break;
		
		case "buscador":readXML(xml_to_load, "text", "25", "ov_texto_restaurantes");
						break;
		
		case "mapa": 	break;
						
		case "plato": 	break;
		
		case "reservas":break;
		
		case "cuenta": 	readXML(xml_to_load, "text", "13", "ov_texto_actualizaciones");
						readXML(xml_to_load, "text", "22", "ov_texto_mis_datos");
						readXML(xml_to_load, "text", "23", "ov_texto_mis_reservas");
						break;
						
		case "login":   readXML(xml_to_load, "text", "18", "ov_texto_entrar_cuenta");
						readXML(xml_to_load, "text", "27", "ov_texto_email");
						readXML(xml_to_load, "text", "28", "ov_texto_password");
						break;
						
		case "registro":readXML(xml_to_load, "text", "19", "ov_texto_registrar_cuenta");
						break;
		
		case "acerca": 	readXML(xml_to_load, "text", "7", "ov_texto_app1");
						readXML(xml_to_load, "text", "8", "ov_texto_app2");
						readXML(xml_to_load, "text", "9", "ov_texto_app3");
						break;
						
		default: break;
	}	
	
}

function ov_select_language(select)
{
	var idioma=$(select).val();
	setLanguage(idioma);
	window.location.reload();
}
function ov_select_language_web(select)
{
	var idioma=$(select).val();
	setLanguage(idioma);
	
	var values="lang="+idioma;
	var result=ajax_operation(values,"change_language");
	if(result)
		window.location.reload();
	else
		alert("Error al cambiar de idioma");
}

function insert_xml_general_lang_to_array() 
{
	
	console.log("2");
	
	data_general_lang=new Array();
	var xml_Doc=loadXMLDoc("./resources/xml/general/general_"+getLanguage()+".xml");

	if(xml_Doc==null) 
		return false;
		
	var k=0;
	$(xml_Doc).find("text").each(function() {
		
		var thisval=$(xml_Doc).find("text[number='"+k+"']");
		var value=thisval.find("value").text();
		data_general_lang.push(value);	
		k++;
	});	

}

function loadXMLDoc(filename)
{	
	if (window.XMLHttpRequest)
	{
	  xhttp=new XMLHttpRequest(); 
	}
	else // code for IE5 and IE6
	{
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
	}
	xhttp.open("GET",filename,false); 
	xhttp.send(); 
	return xhttp.responseXML;
}

function setLanguage(value) 
{
	setLocalStorage("language",value);
}
function getLanguage()
{	
	if(typeof(window.localStorage) == 'undefined')
		setLocalStorage("language","es");
	
	if(getLocalStorage("language") == null)
		setLocalStorage("language","es");
		
	return getLocalStorage("language");
}

function setUserId(value)
{
	setLocalStorage("user_id",value);
	//setSessionStorage("user_id",value);
}
function getUserId()
{
	if(typeof(window.localStorage) == 'undefined')
		return false;
	
	if(getLocalStorage("user_id") == null)
		return false;
		
	return getLocalStorage("user_id");
	
	/*if(typeof(window.sessionStorage) == 'undefined')
		return false;
	
	if(getSessionStorage("user_id") == null)
		return false;
		
	return getSessionStorage("user_id");*/
	
}

//window.localStorage - stores data with no expiration date
function setLocalStorage(keyinput,valinput) 
{
	if(typeof(window.localStorage) != 'undefined') { 
		window.localStorage.setItem(keyinput,valinput); 
	} 
	else { 
		alert("localStorage no definido"); 
	}
}
function getLocalStorage(keyoutput)
{
	if(typeof(window.localStorage) != 'undefined') { 
		return window.localStorage.getItem(keyoutput); 
	} 
	else { 
		alert("localStorage no definido"); 
	}
}
//code.sessionStorage - stores data for one session (data is lost when the tab is closed)
function setSessionStorage(keyinput,valinput)
{
	if(typeof(window.sessionStorage) != 'undefined') { 
		window.sessionStorage.setItem(keyinput,valinput); 
	} 
	else { 
		alert("sessionStorage no definido"); 
	}
}
function getSessionStorage(keyoutput)
{
	if(typeof(window.sessionStorage) != 'undefined') { 
		return window.sessionStorage.getItem(keyoutput); 
	} 
	else { 
		alert("sessionStorage no definido"); 
	}
}
