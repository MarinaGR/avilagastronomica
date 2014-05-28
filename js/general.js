//Global Variables

//var extern_siteurl="http://127.0.0.1/avilagastronomica";
var extern_siteurl="http://192.168.1.10/avilagastronomica";

var destination="";
	
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


function onBodyLoad(page, callback)
{
    document.addEventListener("deviceready", onDeviceReady, false); 
    
    $("#ov_volver_01").click(function(e){
		onBackKeyDown();						
	});
	$("#ov_menu_01").click(function(e){
		onMenuKeyDown();		
	});	 
    
    insert_all_restaurants_xml_to_array();
    insert_xml_general_lang_to_array();    
    
	$('#ov_select_language').val(getLanguage());
    
    $('#ov_curtain').hide();
       
    $('#ov_view_container_01').css("min-height",(viewport_height)+"px");	
    
    callback_load(page);	
}
function callback_load(page)
{
	console.log("cargados!"+page); 
	switch(page)
	{
		case "index":	load_text_xml(page);
						break;
						
		case "menu": 	load_text_xml(page);
						search_random_featured('random_featured');				
						break;
						
		case "restaurante": readXML_restaurant("./resources/xml/restaurantes/"+get_var_url("id")+".xml", "id", get_var_url("id"), "ov_id_restaurant");
							show_geoloc(get_var_url("id"), "restaurants_map_frame");
							break;
		
		case "buscador":load_text_xml(page);
						search_items_xml('0', '2', '0', '', 'form_search_restaurants_01', 'ov_id_restaurants');
						break;
		
		case "mapa": 	load_text_xml(page);
						show_near_geoloc();
						break;
						
		case "carta": 	load_text_xml(page);
						readXML_menu("./resources/xml/cartas/"+get_var_url("id")+".xml", "id_restaurante", get_var_url("id"), "ov_id_menu");
						break;
						
		case "plato": 	load_text_xml(page);
						readXML_plato("./resources/xml/platos/"+get_var_url("id")+".xml", "id", get_var_url("id"), get_var_url("nom"), "ov_id_plato");
						break;
		
		case "cuenta": 	load_text_xml(page);
						break;
						
		case "login": 	load_text_xml(page);
						break;
		
		case "registro":load_text_xml(page);
						break;
		
		case "acerca": 	break;
						
		default: break;
	}	
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
		
		case "mapa":break;
						
		case "plato": 	break;
		
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

function insert_all_restaurants_xml_to_array() 
{
	console.log("1");
	
	data_all_restaurants=new Array();
	var xml_Doc=loadXMLDoc("./resources/xml/restaurantes/all.xml");

	if(xml_Doc==null) 
		return false;

	var k=0;
	$(xml_Doc).find("id").each(function() {
		var thisval=$(xml_Doc).find("id[number='"+k+"']");
			
		var id=thisval.find("value").text();
		var lang=thisval.find(getLanguage());
		
		if(lang=="undefined" || lang.length==0)
				lang=thisval.find("es");
		
		var nombre=lang.find("nombre").text();
		var tlf=thisval.find("tlf").text();  
		var calle=thisval.find("calle").text();
		var latlong=thisval.find("latlong").text();
		var destacado=thisval.find("destacado").text();
			
		data_all_restaurants.push([id, nombre, latlong, calle, tlf, destacado]);
		k++;	
	});	
}

function ov_login_user(form)
{
	var values=$("#"+form).serialize()+"&table=h_accounts_items";
	var result=ajax_operation_cross(values,"login_user");
	
	if(result)
	{
		setUserId(result); 
		window.location.href="./micuenta.html?id="+result;
	}
	else
		alert("Error al iniciar sesión");
}

function ov_register_user(form, prefix_id)
{	
	var passw1=$("#"+prefix_id+"_c10").val();
	var passw2=$("#"+prefix_id+"_c11").val();
	
	var email=$("#"+prefix_id+"_c1").val();
	
	//check mandatory here
	if(email=="")
	{
		alert("Campo obligatorio");
		return false;
	}
	
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
		var result2=ajax_operation(values2,"insert_item", true);
		if(result2)
		{
			setUserId(result2);
			window.location.href="./micuenta.html?id="+result2;
		}
		else
		{
			alert("Error al registrar la cuenta");
			return false;
		}
	}
}
function ov_update_user(form, prefix_id)
{	
	var passw1=$("#"+prefix_id+"_c10").val();
	var passw2=$("#"+prefix_id+"_c11").val();
	
	var email=$("#"+prefix_id+"_c1").val();
	
	//check mandatory 
	if(email=="")
	{
		alert("Campo obligatorio");
		return false;
	}
	
	if(passw1!=passw2)
	{
		alert("Las contraseñas no coinciden");
		return false;
	}
	
	var values=$("#"+form).serialize()+"&table=h_accounts_items";
	var result=ajax_operation(values,"update_item");
	if(result)
	{
		setUserId(result);
		window.location.href="./data.php?id="+result+"&lang="+getLanguage();
	}
	else
	{
		alert("Error al actualizar los datos de la cuenta");
		return false;
	}
}

function ov_new_booking(form, prefix_id)
{
	var id_rest=$("#"+prefix_id+"_c6").val();
	var id_user=$("#"+prefix_id+"_c7").val();
	
	//check mandatory here
	if(id_rest==0 || id_user==0)
	{
		alert("Campo obligatorio");
		return false;
	}
	
	/*var values=$("#"+form).serialize()+"&table=h_bookings_items";
	var result=ajax_operation(values,"check_booking");
	if(result)
	{*/
		var values2=$("#"+form).serialize()+"&table=h_bookings_items";
		var result2=ajax_operation(values2,"insert_item");
		if(result2)
		{
			alert("Solicitud enviada correctamente. Consulte en su cuenta el estado de la misma");
		}
		else
		{
			alert("Error al enviar la solicitud de reserva");
			return false;
		}
	/*}
	else
	{
		alert("Ya existen reservas en ese horario"); //Contador de mesas disponibles
		return false;
	}*/

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
function ajax_operation_cross(values,operation)
{
	var retorno=false;		
	$.ajax({
	  type: 'POST',
	  url: extern_siteurl+"/server/functions/ajax_operations.php",
	  data: { v: values, op: operation },
	  beforeSend: function( xhr ) {
	    xhr.overrideMimeType("text/javascript");
	  },
	  success: h_proccess_p,
	  error:function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.responseText);
            console.log(errorThrown);
         },
	  dataType: "jsonp",
      jsonp: 'callback',
      jsonpCallback: 'jsonpCallback',
	  async:false
	});		
	function jsonpCallback(data){
        alert(data);
        retorno=false;
    }	
	function h_proccess_p(data){

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
  		
  	$('#restaurants_map_frame').attr('src',url);

  	//$("#geoloc_map_text").html("Ruta desde tu posición actual hasta "+destination);	
	
}

function show_geoloc_web(dest, container)
{	
	var values="c1="+dest+"&table=h_restaurants_items";
	var result=ajax_operation(values, "get_latlong");	
	if(result)
	{
		//nombre_restaurante=result[0];
		destination=result[1];
		if (navigator.geolocation)
		{		
			navigator.geolocation.getCurrentPosition(draw_geoloc_web,error_geoloc);
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
			navigator.geolocation.getCurrentPosition(draw_geoloc_web,error_geoloc);
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
  	//$("#geoloc_map_text").html("Ruta desde tu posición actual hasta "+destination);	
}

function error_geoloc(error)
{
	$("#geoloc_map_text").html("La geolocalización ha fallado.");	
}

function show_near_geoloc()
{
	if (navigator.geolocation)
	{		
		navigator.geolocation.getCurrentPosition(draw_near_geoloc,error_geoloc,{enableHighAccuracy:true, maximumAge:30000, timeout:30000});
		$("#geoloc_map_text").html("Calculando...");	
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
  	
  	var radio=0.4;
  	var radioTierra=6371; //km
	
	var data_near_restaurant=new Array();
	
	for(var i=0; i<data_all_restaurants.length; i++)
	{
		var coord=data_all_restaurants[i][2].split(",");
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
			data_near_restaurant.push(data_all_restaurants[i]);
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
		enlace_rest="<p><a href='restaurante.html?id="+data_near_restaurant[k][0]+"' >"+data_near_restaurant[k][1]+"</a></p>"+data_near_restaurant[k][3]+"<br/>"+data_near_restaurant[k][4];
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
  	
  	var radio=0.4;
  	
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
	/*$.get(xmlDoc, function(xml) {		
		var abuscar=tipo+'[number="'+id+'"]';
		var texto=$(xml).find(abuscar).text(); 
		$("#"+contenedor).html(texto);
	});*/
	$("#"+contenedor).html(data_general_lang[id]);
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
			//navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc);
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc,{enableHighAccuracy:true, maximumAge:30000, timeout:30000});
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

function comprobar_pos() {
	if(parseInt($("#ov_img_gallery").css("left"))==0) {
		$("#ov_izq").hide('fade',200);
		$("#ov_dch").show('fade',200);
	}
	else {
		if(parseInt($("#ov_img_gallery").css("left"))==-(ancho_galeria-ancho_img)) {
			$("#ov_dch").hide('fade',200);
			$("#ov_izq").show('fade',200);
		}
		else {
			$("#ov_dch").show('fade',200);
			$("#ov_izq").show('fade',200);
		}
	}
}
function mostrar_sig() {
	var deplaz=parseInt($("#ov_img_gallery").css("left"))-ancho_img;
	if(deplaz>(-ancho_galeria))
		$("#ov_img_gallery").animate({"left":deplaz}, function(){
			comprobar_pos();
		});
}
function mostrar_ant() {
	var deplaz=parseInt($("#ov_img_gallery").css("left"))+ancho_img;
	if(deplaz<ancho_img)
		$("#ov_img_gallery").animate({"left":deplaz}, function(){
			comprobar_pos();
		});
}

function readXML_gal(xmlDoc, tipo, id)
{
	$.get(xmlDoc, function(xml) {
	}).done(function(xml) {

		if($(xml).find(tipo+" value").text()==id)
		{			
			var images=$(xml).find("images"); 

			if(images.length>0)
			{
				$("#ov_gal_restaurant").append('<div id="ov_izq"><div class="ov_tr_dch"></div></div>');
				$("#ov_gal_restaurant").append('<div id="ov_dch"><div class="ov_tr_izq"></div></div>');
				var listado='<ul id="ov_img_gallery">';
				for(var i=0;i<images.children.length;i++)
				{
					listado+='<li><img src="'+images[0].children[i].innerHTML+'" alt="restaurant" style="width:100%;height:100%;max-width:100%;" /></li>';	
				}
				listado+='</ul><div class="ov_clear_01"></div>';
				$("#ov_gal_restaurant").append(listado);
				
				ancho_img=parseInt($("#ov_img_gallery li").width());
				imgs_galeria=$("#ov_img_gallery li").size();
				ancho_galeria=ancho_img*imgs_galeria;
				$("#ov_img_gallery").css("width",ancho_galeria);
			
				if($("#ov_img_gallery").width()!=ancho_img) 
					comprobar_pos();
				
				$("#ov_dch").click(function() {
					mostrar_sig();
				});
				$("#ov_izq").click(function() {
					mostrar_ant();
				});	
			}
		}
		
	});
} 
function readXML_restaurant(xmlDoc, tipo, id, contenedor) 
{
	$.get(xmlDoc, function(xml) {
	}).done(function(xml) {

		if($(xml).find(tipo+" value").text()==id)
		{			
			var lang=$(xml).find(getLanguage());  
			if(typeof lang=="undefined" || lang=="" || lang.length==0)
				lang=$(xml).find("es");					
			
			var nombre=lang.find("nombre").text();
			var desc=lang.find("desc").text();
			var desc_url=lang.find("desc_url").text();
			
			var tlf=$(xml).find("tlf").text();  
			var calle=$(xml).find("calle").text();
			var cp=$(xml).find("cp").text();
			var ciudad=$(xml).find("ciudad").text();
			var provincia=$(xml).find("provincia").text();
			var pais=$(xml).find("pais").text(); 

			$("#"+contenedor).html("");
			
			$("#"+contenedor).append('<div style="padding:10px;"><h1>'+nombre+'</h1><br><div id="ov_gal_restaurant" class="ov_contenedor_img"></div><br>'+calle+'<br>'+cp+' '+ciudad+'<br>'+provincia+' '+pais+'<div class="ov_clear_03"></div><a href="tel:'+tlf+'"><div class="ov_container_01"><img src="./resources/images/general/tlf.png" /><br>'+tlf+'</div></a><div class="ov_container_01" onclick="$(\'html,body\').animate({scrollTop:$(window).height()})" ><img src="./resources/images/general/marker.png" /><br><span id="ov_texto_como_llegar"></span></div><div class="ov_container_01" onclick="window.location.href=\'./carta.html?id='+id+'\'"><img src="./resources/images/general/reservas.png" /><br><span id="ov_texto_carta"></span></div><div class="ov_container_01" onclick="window.location.href=\'./reservas.html?id='+id+'\'"><img src="./resources/images/general/reservas.png" /><br><span id="ov_texto_reservas"></span></div><div class="ov_clear_03"></div><div class="ov_title_03"><span id="ov_texto_informacion"></span></div><br>'+desc+'<br><div id="desc_larga"></div></div>');
			
			if(desc_url!="")			
				$("#desc_larga").load(desc_url);
		}
		
		load_text_xml('restaurante');
		readXML_gal("./resources/xml/restaurantes/"+get_var_url("id")+".xml", "id", get_var_url("id"));
		
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

function readXML_menu(xmlDoc, tipo, id, contenedor) 
{
	
	$.get(xmlDoc, function(xml) {
	}).done(function(xml) {

		if($(xml).find(tipo).text()==id)
		{			

			var valores='';			
			var lang=$(xml).find(getLanguage());  
			if(typeof lang=="undefined" || lang=="" || lang.length==0)
				lang=$(xml).find("es");					
			
			var categorias=lang.find("type");  
			
			categorias.each(function() {
				
				cat=categorias.attr("id"); 
				valores+='<br>'+cat+'<br>';	

				$(this).find("nombre").each(function() {	

					cat2=$(this).text(); 
					valores+='<a href="./plato.html?id=menu_1&nom='+cat2+'" >'+cat2+'</a><br>';	
	
				});
			});
			
			$("#"+contenedor).html("");
			$("#"+contenedor).append('<div style="padding:10px;font-size:1.1em;">'+valores+'</div>');
			//load_text_xml('menu');
		}
		
	}).fail(function(){
		$("#"+contenedor).html('<p>'+data_general_lang[26]+'</p>');
	});
}

function readXML_plato(xmlDoc, tipo, id_menu, id_plato, contenedor) 
{
	$.get(xmlDoc, function(xml) { 
	}).done(function(xml) {

		if($(xml).find(tipo).text()==id_menu)  
		{			
			var lang=$(xml).find(getLanguage());  
			if(typeof lang=="undefined" || lang=="" || lang.length==0)
				lang=$(xml).find("es");					
			
			var nombre=lang.find("nombre").text();  
			var categoria=lang.find("categoria").text();
			var descr=lang.find("desc").text();
			
			var precios="";
			$(xml).find("precios").children().each(function() {
			
				precios+="<br>"+this.tagName.toUpperCase();
				
				switch(this.tagName)
				{
					case 'normal': 	precios+=": "+$(this).text()+" €"; 
									break;
									
					case 'interior':$(this).children().each(function() {	
										precios+="<br>"+this.tagName+": "+$(this).text()+" €"; 
									});
									break;
									
					case 'exterior':$(this).children().each(function() {	
										precios+="<br>"+this.tagName+": "+$(this).text()+" €"; 
									});
									break;
				}
				
				precios+="<br>";

			});
			
			$("#"+contenedor).html("");
			$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer"><p style="font-size:1.5em;text-transform:uppercase">'+nombre+'</p><span style="font-size:1.2em;font-weight:bold">'+categoria+'</span><p style="font-size:0.9em">'+precios+'<br>'+descr+'</p></div>');
			//load_text_xml('plato');
			
		}
		
	}).fail(function(){
		$("#"+contenedor).html('<p>'+data_general_lang[26]+'</p>'); //No se encontró el archivo xml
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

function search_random_featured(contenedor)
{		
	var featured=data_all_restaurants; 
	
	console.log(data_all_restaurants);

	$("#"+contenedor).html("");
	
	featured = $.grep(data_all_restaurants, function(valores,i) {
		//Busca los restaurantes destacados (1) en valores[5] 
		return (valores[5].search(new RegExp("1", "i"))>-1);
	});			

	var rand1=Math.floor((Math.random() * featured.length));  
	$("#"+contenedor).append('<div style="margin: 1%; padding: 1%;cursor:pointer;width: 45%;float: left; border:1px solid #fff" onclick="window.parent.location.href=\'./restaurante.html?id='+featured[rand1][0]+'\'" ><p style="font-size:1.3em;text-transform:uppercase">'+featured[rand1][1]+'</p><span style="font-size:1.1em;font-weight:bold">'+featured[rand1][4]+'</span><p style="font-size:0.9em">'+featured[rand1][3]+'</p></div>');
	
	var rand2=Math.floor((Math.random() * featured.length));
	while(rand2==rand1)
	  	rand2=Math.floor((Math.random() * featured.length));
	  
	$("#"+contenedor).append('<div style="margin: 1%; padding: 1%;cursor:pointer;width: 45%;float: left; border:1px solid #fff" onclick="window.parent.location.href=\'./restaurante.html?id='+featured[rand2][0]+'\'" ><p style="font-size:1.3em;text-transform:uppercase">'+featured[rand2][1]+'</p><span style="font-size:1.1em;font-weight:bold">'+featured[rand2][4]+'</span><p style="font-size:0.9em">'+featured[rand2][3]+'</p></div>');
	
	
	$("#"+contenedor).append('<div class="ov_clear_01"></div>');
	
	if(featured.length==0)
	{
		$("#"+contenedor).append('<p>No hay destacados</p>');	
	}
}

function search_items_xml(currentstart, currentlimit, paginate, totalpages, form, contenedor)
{		
	var search_string=$("#"+form).serialize(); 
	var c12=$("#restaurants_c12").val();
	
	var c13=$("#restaurants_c13").val();
	var c6=$("#restaurants_c6").val();
		
	$("#"+contenedor).html("");
	var resultados=data_all_restaurants;
	
	if(c12!="")
	{
		resultados = $.grep(data_all_restaurants, function(valores,i) {
			//Busca en nombre valores[1] o id valores[0]
			return (valores[0].search(new RegExp(c12, "i"))>-1 || valores[1].search(new RegExp(c12, "i"))>-1);
		});			
	}
	
	var start=parseInt(currentstart)*parseInt(paginate);
	var limit=parseInt(currentlimit);
	if(start<0)
	{
		start=0;
	}
	if(start>resultados.length)
	{
		start=resultados.length-limit+1;
	}
	
	var currentend=limit+start;
	var total_pages=Math.round(resultados.length/limit);
		
	if(currentend>resultados.length)
	{
		currentend=resultados.length;
	}
			
	var busqueda=0;
	for(var k=start; k<currentend; k++)
	{
		$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href=\'./restaurante.html?id='+resultados[k][0]+'\'" ><p style="font-size:1.5em;text-transform:uppercase">'+resultados[k][1]+'</p><span style="font-size:1.2em;font-weight:bold">'+resultados[k][4]+'</span><p style="font-size:0.9em">'+resultados[k][3]+'</p></div>');
		busqueda++;
	}
	
	if(resultados.length==0)
	{
		$("#"+contenedor).append('<p>No hay resultados</p>');	
	}

	if(busqueda!=0 && busqueda<(currentend-start))
		total_pages=Math.round(busqueda/limit);
	
	$("#"+contenedor).append('<p>');
	for(page=0;page<total_pages;page++)
	{
		$("#"+contenedor).append('<a href="#" onclick="search_items_xml(\''+(limit*page-1)+'\', \''+limit+'\', \''+(page+1)+'\', \''+total_pages+'\', \'form_search_restaurants_01\', \''+contenedor+'\')" class="ov_page_link" >'+(page+limit-1)+'</a> ');	
	}
	$("#"+contenedor).append('</p>');
	
}

function search_items_xml_old(currentstart, currentlimit, paginate, totalpages, form, contenedor)
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
	document.location.href="./loader.php?id="+getUserId()+"&"+search_string;
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
				
				if((result.format).search("./carta.html")!=-1)
					window.location.href=result.format;
				else
					alert("Este código QR no pertenece a ninguna de las cartas registradas en esta aplicación. "+result.text);
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
