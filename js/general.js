//Global Variables

var extern_siteurl="http://192.168.1.7/avilagastronomica";

var destination="";
	
var route_map_url="";
//Get current_date
var current_date=new Date();
var current_day_of_month=current_date.getDate();
var current_month=current_date.getMonth();
var current_year=current_date.getFullYear();
//Get the screen and viewport size
var viewport_width=$(window).outerWidth();
var viewport_height=$(window).outerHeight();
var screen_width=screen.width;
var screen_height=screen.height;


function onBodyLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);

    var xml_to_load="./resources/xml/general/general_"+getLanguage()+".xml";
    readXML(xml_to_load, "text", "0", "ov_texto_volver");	
	readXML(xml_to_load, "text", "1", "ov_texto_menu");			
	readXML(xml_to_load, "text", "2", "ov_texto_idioma");	
	readXML(xml_to_load, "text", "3", "ov_texto_buscador");	
	readXML(xml_to_load, "text", "4", "ov_texto_cercanos");	
	readXML(xml_to_load, "text", "5", "ov_texto_cuenta");
	readXML(xml_to_load, "text", "6", "ov_texto_acerca");	
	readXML(xml_to_load, "text", "7", "ov_texto_app1");
	readXML(xml_to_load, "text", "8", "ov_texto_app2");
	readXML(xml_to_load, "text", "9", "ov_texto_app3");
	readXML(xml_to_load, "text", "10", "ov_texto_entrar");
	readXML(xml_to_load, "text", "11", "ov_texto_descarga_android");
	readXML(xml_to_load, "text", "12", "ov_texto_descarga_iphone");
	readXML(xml_to_load, "text", "13", "ov_texto_actualizaciones");
	readXML(xml_to_load, "text", "17", "ov_texto_configuracion");
	readXML(xml_to_load, "text", "18", "ov_texto_entrar_cuenta");
	readXML(xml_to_load, "text", "19", "ov_texto_registrar_cuenta");
	readXML(xml_to_load, "text", "20", "ov_texto_entrar_invitado");
	readXML(xml_to_load, "text", "21", "ov_texto_carta");

    
	$('#ov_select_language').val(getLanguage());
    
    $('#ov_curtain').hide();
       
    $('#ov_view_container_01').css("min-height",(viewport_height)+"px");		
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


function load_text_xml()
{
	var xml_to_load="./resources/xml/general/general_"+getLanguage()+".xml";
	 
	readXML(xml_to_load, "text", "14", "ov_texto_como_llegar");
	readXML(xml_to_load, "text", "15", "ov_texto_reservas");
	readXML(xml_to_load, "text", "16", "ov_texto_informacion");
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

function ov_login_user(form)
{
	var values=$("#"+form).serialize()+"&table=h_accounts_items";
	var result=ajax_operation(values,"login_user");
	if(result)
	{
		alert("Login correcto");
		setUserId(result);
		window.location.href="./loader.php?id="+result;
	}
	else
		alert("Error al iniciar sesión");
}

function ov_register_user(form, prefix_id)
{
	var passw1=$("#"+prefix_id+"_c10").val();
	var passw2=$("#"+prefix_id+"_c11").val();
	
	var email=$("#"+prefix_id+"_c1").val();
	
	if(passw1!=passw2)
	{
		alert("Las contraseñas no coinciden");
		return false;
	}
	
	var values="c1="+email+"&table=h_accounts_items";
	var result=ajax_operation(values,"check_unique");
	if(!result)
	{
		alert("Ya existe ese usuario");
		return false;
	}
	else
	{
		var values2=$("#"+form).serialize()+"&table=h_accounts_items";
		var result2=ajax_operation(values2,"insert_item");
		if(result2)
		{
			alert("Registro correcto");
			setUserId(result2);
			window.location.href="./loader.php?u="+result2;
		}
		else
		{
			alert("Error al registrar la cuenta");
			return false;
		}
	}

}

function ajax_operation(values,operation)
{
	var retorno=false;			
	$.ajax({
	  type: 'POST',
	  url: extern_siteurl+"/server/functions/ajax_operations.php",
	  data: { v: values, op: operation },
	  success: h_proccess,
	  error:h_error,
	  dataType: "json",
	  async:false
	});			
	function h_proccess(data){
		
		if(data.error=="0")
		{			
			if(data.warning!="0")
			{
				alert(data.warning);
			}
			retorno=data.result;
		}
		else
		{
			alert(data.error+" - "+data.error_message); // uncomment to trace errors
			retorno=false;
		}				
	}
	function h_error(jqXHR, textStatus, errorThrown)
	{
		retorno=false;
		
	}					
	return retorno;
}

function show_geoloc(dest, container)
{	
	readXML_coordenadas("./resources/xml/restaurantes/"+dest+".xml", myCallback);
}

function draw_geoloc(position)
{
	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latlong = latitude+","+longitude;
  	var url="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin="+latlong+"&destination="+destination+"&avoid=tolls|highways&mode=walking&language=es&zoom=15&center="+latlong;
  	$("#restaurants_map_frame").attr("src",url);
  	$("#geoloc_map_text").html("Ruta desde tu posición actual hasta "+destination);	
  	
  	setTimeout(function() {
  		$("#restaurant_map").hide()
  	}, 500);
  	$('body,html').scrollTop($("#restaurant_map").offset().top);
	
}

function show_geoloc_web(dest, container)
{	
	/*$("#restaurants_map_frame").show();
	  $('body,html').scrollTop($("#restaurants_map_frame").offset().top);*/	 
		
	var values="c1="+dest+"&table=h_restaurants_items";
	var result=ajax_operation(values, "get_latlong");	
	if(result)
	{
		//nombre_restaurante=result[0];
		destination=result[1];
		if (navigator.geolocation)
		{		
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc,{enableHighAccuracy:true, maximumAge:60000, timeout:30000});
		}
		else
		{
			$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
		}
	}
	else
	{
		destination=dest;
		if (navigator.geolocation)
		{		
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc,{enableHighAccuracy:true, maximumAge:60000, timeout:30000});
		}
		else
		{
			$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
		}
	}
}

function draw_geoloc_web(position)
{
	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latlong = latitude+","+longitude;
  	var url="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin="+latlong+"&destination="+destination+"&avoid=tolls|highways&mode=walking&language=es&zoom=15&center="+latlong;
  	$("#restaurants_map_frame").attr("src",url);
  	$("#restaurant_map").hide();
  	$("#geoloc_map_text").html("Ruta desde tu posición actual hasta "+destination);	
}

function error_geoloc(error)
{
	$("#geoloc_map_text").html("La geolocalización ha fallado."+error);	
}

function show_near_geoloc()
{
	if (navigator.geolocation)
	{		
		navigator.geolocation.getCurrentPosition(draw_near_geoloc,error_geoloc);
	}
	else
	{
		$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
	}
}
/* Converts numeric degrees to radians */
Number.prototype.toRad = function() {
   return this*Math.PI/180;
}
function draw_near_geoloc(position)
{
	//User position
	var lat1 = position.coords.latitude;
  	var lon1 = position.coords.longitude;
  	var latlong = lat1+","+lon1;
  	
  	var radio=0.3;
  	var radioTierra=6371; //km
  	
	// Para calcular los restaurantes cercanos habría que buscar en el archivo xml y realizar los cálculos
	var data_all_restaurant=[["restaurant_1","Restaurante de prueba","40.654688,-4.700982"],["restaurant_3","tercer_restaurante","40.658457,-4.698364"]];
	
	var data_near_restaurant=new Array();
	
	for(var i=0; i<data_all_restaurant.length; i++)
	{
		var coord=data_all_restaurant[i][2].split(",");
		var lat2=parseFloat(coord[0]);
		var lon2=parseFloat(coord[1]);
		
		var dLat = (lat2-lat1).toRad();
		var dLon = (lon2-lon1).toRad();
		
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
				Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = radioTierra * c;
		
		if(d<=radio)
			data_near_restaurant.push(data_all_restaurant[i]);
	}
	
	$("#geoloc_map_text").html("Restaurantes cercanos, a menos de "+radio+" km de tu ubicación");
	
	var myLocation=new google.maps.LatLng(lat1, lon1);
	var request={location: myLocation, radius: radio, types: ['restaurants'] };

    map=new google.maps.Map(document.getElementById('ov_nearest_restaurants_map'), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: myLocation,
		zoom: 16
    }); 	

  	createMarker(myLocation, "Estás aquí", "0");
  	
  	var restaurantes="", enlace_rest="";
	for(var k=0;k<data_near_restaurant.length;k++)
	{		
		enlace_rest="<p><a href='restaurante.html?id="+data_near_restaurant[k][0]+"' >"+data_near_restaurant[k][1]+"</a></p>";
		restaurantes+=enlace_rest;
		
		var coord=data_near_restaurant[k][2].split(",");
		var lat=coord[0];
		var lon=coord[1]; 			
		createMarker(new google.maps.LatLng(lat,lon), enlace_rest, "1");	
	}
  	
  	$("#geoloc_map_text").append(restaurantes);  		
 
}
function createMarker(place, title, type) 
{
    //var placeLoc = place.geometry.location;
    var marker=new google.maps.Marker({
		map: map,
		position: place //placeLoc
    }); 
    marker.setTitle(title);
    
    var infowindow=new google.maps.InfoWindow(
    	{ 
    		content: title 
    	});

	google.maps.event.addListener(marker, 'click', function () {
		infowindow.open(map, marker);
	});
	
	switch(type)
    {
    	case "0": infowindow.open(map, marker);
    			  marker.setIcon("./resources/images/general/marker.png");   
    			  break; 
    	case "1": marker.setIcon("./resources/images/general/marker_map.png");   
    			  break;
    	default: 
    			  break; 
    }
}

function show_near_geoloc_web()
{
	if (navigator.geolocation)
	{		
		navigator.geolocation.getCurrentPosition(draw_near_geoloc_web,error_geoloc);
	}
	else
	{
		$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
	}
}
function draw_near_geoloc_web(position)
{
	//User position
	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latlong = latitude+","+longitude;
  	
  	var radio=0.3;
  	
  	$("#geoloc_map_text").html("Restaurantes cercanos, a menos de "+radio+" km de tu ubicación");
	
	var myLocation=new google.maps.LatLng(latitude, longitude);
	var request={location: myLocation, radius: radio, types: ['restaurants'] };

    map=new google.maps.Map(document.getElementById('ov_api_map'), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: myLocation,
		zoom: 16
    }); 	

  	createMarker(myLocation, "Estás aquí", "0");	
  	
  	//Near restaurants		
  	var values="radio="+radio+"&lat="+latitude+"&long="+longitude+"&table=h_restaurants_items";
  	var result=ajax_operation(values,"near_locations");
  	if(result)
  	{
  		var restaurantes="";
  		for(k=0;k<result.length;k++)
  		{
  			restaurantes+="<p><a href='restaurante.html?id="+result[k][0]+"' >"+result[k][3]+"</a></p>";
  			
  			var coord=result[k][2].split(",");
  			var lat=coord[0];
  			var lon=coord[1]; 			
  			createMarker(new google.maps.LatLng(lat,lon), result[k][3], "1");	
  		}
	  	
	  	$("#geoloc_map_text").append(restaurantes);  		
	  	
  	}  	
  	else
  	{
  		$("#geoloc_map_text").html("No hay restaurantes a menos de "+radio+" km de tu ubicación");	  		
  	}
}

function readXML(xmlDoc, tipo, id, contenedor) 
{
	$.get(xmlDoc, function(xml) {		
		var abuscar=tipo+'[number="'+id+'"]';
		var texto=$(xml).find(abuscar).text(); 
		$("#"+contenedor).html(texto);
	});
}

function readXML_coordenadas(xmlDoc, callback) 
{
	$.get(xmlDoc, function(xml) {
	}).done(function(xml) {		
		
		var busqueda=$(xml).find('latlong').text();
		callback(busqueda);
		return busqueda; 
		
	}).fail(function() {
		callback(false);
		return false;
	});	
	
}
function myCallback(latlong) 
{
	if(latlong!=false)
	{			 	
		destination=latlong;
		if (navigator.geolocation)
		{		
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc);
		}
		else
		{
			$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
		}
	}
	else
	{
		$("#geoloc_map_text").html("No existen coordenadas del restaurante.");			
	}
}

function readXML_restaurant(xmlDoc, tipo, id, contenedor) 
{
	$.get(xmlDoc, function(xml) {
	}).done(function(xml) {

		if($(xml).find(tipo+" value").text()==id)
		{			
			var nombre=$(xml).find("nombre[lang='"+getLanguage()+"']").text();
			var desc=$(xml).find("desc[lang='"+getLanguage()+"']").text();
			var tlf=$(xml).find("tlf").text();  
			var calle=$(xml).find("calle").text();
			var cp=$(xml).find("cp").text();
			var ciudad=$(xml).find("ciudad").text();
			var provincia=$(xml).find("provincia").text();
			var pais=$(xml).find("pais").text(); 
			
			if(nombre=="")
				nombre=$(xml).find("nombre[lang='es']").text();
			if(desc=="")				
				desc=$(xml).find("desc[lang='es']").text();
			 
			$("#"+contenedor).html("");
			
			$("#"+contenedor).append('<div style="padding:10px;"><h1>'+nombre+'</h1><br>'+calle+'<br>'+cp+' '+ciudad+'<br>'+provincia+' '+pais+'<div class="ov_clear_03"></div><a href="tel:'+tlf+'"><div class="ov_container_01"><img src="./resources/images/general/tlf.png" /><br>'+tlf+'</div></a><div class="ov_container_01" onclick="$(\'#restaurant_map\').show()" ><img src="./resources/images/general/marker.png" /><br><span id="ov_texto_como_llegar"></span></div><div class="ov_container_01" onclick="window.location.href=\'./carta.html\'"><img src="./resources/images/general/reservas.png" /><br><span id="ov_texto_carta"></span></div><div class="ov_container_01" onclick="window.location.href=\'./reservas.html\'"><img src="./resources/images/general/reservas.png" /><br><span id="ov_texto_reservas"></span></div><div class="ov_clear_03"></div><div class="ov_title_03"><span id="ov_texto_informacion"></span></div><br>'+desc+'<br></div>');
			
		}
		load_text_xml();
		
	}).fail(function(){
		$("#"+contenedor).html('<p>ERROR: No se encontró el archivo xml</p>');
	});
}

function readXML_restaurants(xmlDoc, tipo, contenedor) 
{
	var texto="";
	$.get(xmlDoc, function(xml) {	
		
		$("#"+contenedor).html("");
		
		$(xml).children().each(function() {
			$(xml).find(tipo).each(function() {
			
				var value=$(this).find("value").text();
				var nombre=$(this).find("nombre[lang='"+getLanguage()+"']").text();
				var tlf=$(this).find("tlf").text();  
				var calle=$(this).find("calle").text();
				var cp=$(this).find("cp").text();
				var ciudad=$(this).find("ciudad").text();
				var provincia=$(this).find("provincia").text();
				var pais=$(this).find("pais").text();	
				
				if(nombre=="")
					nombre=$(this).find("nombre[lang='es']").text();
			
				
				$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href=\'./restaurante.html?id='+value+'\'" ><p style="font-size:1.5em;text-transform:uppercase">'+nombre+'</p><span style="font-size:1.2em;font-weight:bold">'+tlf+'</span><p style="font-size:0.9em">'+calle+'<br>'+cp+' '+ciudad+'</p></div>');
			
			});
		});		
	});
}

function gotFS(fileSystem) 
{
	var fichero="./resources/xml/restaurantes/all.xml";
    fileSystem.root.getFile(fichero, {create: false}, success_getFile, fail_getFile);
}
function success_getFile(parent) {
    console.log("Nombre del padre: " + parent.name);
}
function fail_getFile(error) {
    alert("Ocurrió un error recuperando el fichero: " + error.code);
}

function search_items_xml(currentstart, currentlimit, paginate, totalpages, form, contenedor)
{		
	var search_string=$("#"+form).serialize(); 
	var c12=$("#restaurants_c12").val();
	
	var c13=$("#restaurants_c13").val();
	var c6=$("#restaurants_c6").val();
		
	$("#"+contenedor).html("");
	
	// Retorna un fichero existe, o lo crea si no existiera
	//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail_getFile);
	
	var fichero="./resources/xml/restaurantes/all.xml";
	var texto="";
	$.get(fichero, function(xml) {
	}).done(function(xml) {

		var child_length=$(xml).find("id").length;
		var start=parseInt(currentstart)*parseInt(paginate);
		var limit=parseInt(currentlimit);
		if(start<0)
		{
			start=0;
		}
		if(start>child_length)
		{
			start=child_length-limit+1;
		}
		
		var currentend=limit+start;
		var total_pages=Math.round(child_length/limit);
		
		
		if(currentend>child_length)
		{
			currentend=child_length;
		}
			
		var busqueda=0;
		$(xml).children().each(function() {
			for(var k=start; k<currentend; k++)
			{			
				var thisval=$(xml).find("id[number='"+k+"']");
				
				var value=thisval.find("value").text();
				var nombre=thisval.find("nombre[lang='"+getLanguage()+"']").text();
				var tlf=thisval.find("tlf").text();  
				var calle=thisval.find("calle").text();
				var cp=thisval.find("cp").text();
				var ciudad=thisval.find("ciudad").text();
				var provincia=thisval.find("provincia").text();
				var pais=thisval.find("pais").text();
				
				if(nombre=="")
					nombre=thisval.find("nombre[lang='es']").text();
				
				if(nombre.search(new RegExp(c12, "i"))>-1)
				{
					$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href=\'./restaurante.html?id='+value+'\'" ><p style="font-size:1.5em;text-transform:uppercase">'+nombre+'</p><span style="font-size:1.2em;font-weight:bold">'+tlf+'</span><p style="font-size:0.9em">'+calle+'<br>'+cp+' '+ciudad+'</p></div>');
					
					busqueda++;
				}
			}
		});	
		
		if(busqueda!=0 && busqueda<(currentend-start))
			total_pages=Math.round(busqueda/limit);
		
		$("#"+contenedor).append('<p>');
		for(page=0;page<total_pages;page++)
		{
			$("#"+contenedor).append('<a href="#" onclick="search_items_xml(\''+(limit*page-1)+'\', \''+limit+'\', \''+(page+1)+'\', \''+total_pages+'\', \'form_search_restaurants_01\', \''+contenedor+'\')" class="ov_page_link" >'+(page+limit-1)+'</a> ');	
		}
		$("#"+contenedor).append('</p>');
			
	}).fail(function() {
		$("#"+contenedor).html('<p>ERROR: No se encontró el archivo xml</p>');
	});
	
}

function search_items(currentstart, currentlimit, paginate, totalpages, form)
{	
	/*if(parseInt(paginate)<=0)
		return false;
	if(parseInt(paginate)>parseInt(totalpages))
		return false;*/
		
	var search_string=$("#"+form).serialize(); 
	search_string+="&start="+parseInt(paginate)+"&limit="+parseInt(currentlimit);
	document.location.href="./loader.php?"+search_string;
}

function go_to_page(number)
{
	document.location.href="./loader.php?start="+number;
}
function get_var_url(variable){

	var tipo=typeof variable;
	var direccion=location.href;
	var posicion=direccion.indexOf("?");
	
	posicion=direccion.indexOf(variable,posicion) + variable.length; 
	
	if (direccion.charAt(posicion)== "=")
	{ 
        var fin=direccion.indexOf("&",posicion); 
        if(fin==-1)
        	fin=direccion.length;
        	
        return direccion.substring(posicion+1, fin); 
    } 
	else
		return false;
	
}

function ov_scan_code(){

	cordova.plugins.barcodeScanner.scan(function(result)
		{
			if (!result.cancelled) 
			{
				alert("Scanned Code: " + result.text 
				+ ". Format: " + result.format
				+ ". Cancelled: " + result.cancelled);
				
				window.location.href=result.format;
			}
		}, 
		function(error){
			alert("Scan failed: " + error);
		}
	);
}

function ov_encode_data(type, data){

	cordova.plugins.barcodeScanner.encode(type, data, function(result)
		{
			alert("Encode success: " + result);
		}, 
		function(error){
			alert("Encoding failed: " + error);
		}
	);
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
