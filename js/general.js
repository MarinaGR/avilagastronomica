//Global Variables

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
    
	$('#ov_select_language').val(getLanguage());
    
    $('#ov_curtain').hide();
       
    $('#ov_view_container_01').css("min-height",(viewport_height)+"px");		
}

function load_text_xml()
{
	var xml_to_load="../../resources/xml/general/general_"+getLanguage()+".xml";
	 
	readXML(xml_to_load, "text", "14", "ov_texto_como_llegar");
	readXML(xml_to_load, "text", "15", "ov_texto_reservas");
	readXML(xml_to_load, "text", "16", "ov_texto_informacion");
}

function ov_select_language(select)
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

function ajax_operation(values,operation)
{
	var retorno=false;			
	$.ajax({
	  type: 'POST',
	  url: "./server/functions/ajax_operations.php",
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
			//alert(data.error+" - "+data.error_message); // uncomment to trace errors
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
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc);
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
			navigator.geolocation.getCurrentPosition(draw_geoloc,error_geoloc);
		}
		else
		{
			$("#geoloc_map_text").html("Tu dispositivo no permite la geolocalización dinámica.");			
		}
	}
}

function draw_geoloc(position)
{
	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latlong = latitude+","+longitude;
  	var url="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin="+latlong+"&destination="+destination+"&avoid=tolls|highways&mode=walking&language=es&zoom=15&center="+latlong;
  	$("#restaurants_map_frame").attr("src",url);
  	$("#geoloc_map_text").html("Ruta desde tu posición actual hasta "+destination);	
}

function error_geoloc(error)
{
	$("#geoloc_map_text").html("La geolocalización ha fallado.");	
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
function draw_near_geoloc(position)
{
	//User position
	var latitude = position.coords.latitude;
  	var longitude = position.coords.longitude;
  	var latlong = latitude+","+longitude;
  	
  	var radio=0.5;
  	
  	//Near restaurants		
  	var values="radio="+radio+"&lat="+latitude+"&long="+longitude+"&table=h_restaurants_items";
  	var result=ajax_operation(values,"near_locations");
  	if(result)
  	{
  		var puntos="", restaurantes="";
  		for(k=0;k<result.length;k++)
  		{
  			puntos+="@"+result[k][2]+",3z/";
  			
  			restaurantes+="<p><a href='restaurante.html?id="+result[k][0]+"' >"+result[k][3]+"</a></p>";
  		}

  		//var url="http://www.google.com/maps/place/"+puntos+"&language="+getLanguage()+"&zoom=15&center="+latlong;
  		
  		var url="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAD0H1_lbHwk3jMUzjVeORmISbIP34XtzU&origin="+latlong+"&destination= &avoid=tolls|highways&mode=walking&language=es&zoom=15&center="+latlong;
		
	  	$("#restaurants_map_frame").attr("src",url);
	  	$("#geoloc_map_text").html("Restaurantes cercanos, a menos de "+radio+" km de tu ubicación");	
	  	
	  	$("#geoloc_map_text").append(restaurantes);  		
  	}  	
  	else
  	{
  		$("#geoloc_map_text").html("No hay restaurantes a menos de "+radio+" km de tu ubicación");	  		
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

function readXML(xmlDoc, tipo, id, contenedor) 
{
	$.get(xmlDoc, function(xml) {		
		var abuscar=tipo+'[number="'+id+'"]';
		var texto=$(xml).find(abuscar).text(); 
		$("#"+contenedor).html(texto);
	});
}

function readXML_restaurant(xmlDoc, tipo, id, contenedor) 
{
	$.get(xmlDoc, function(xml) {		

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
			
			$("#"+contenedor).append('<div style="padding:10px;"><h1>'+nombre+'</h1><br>'+calle+'<br>'+cp+' '+ciudad+'<br>'+provincia+' '+pais+'<div class="ov_clear_03"></div><div class="ov_container_01"><img src="../../resources/images/general/tlf.png" /><br>'+tlf+'</div><div class="ov_container_01"><img src="../../resources/images/general/marker.png" /><br><span id="ov_texto_como_llegar"></span></div><div class="ov_container_01"><img src="../../resources/images/general/reservas.png" /><br><span id="ov_texto_reservas"></span></div><div class="ov_clear_03"></div><div class="ov_title_03"><span id="ov_texto_informacion"></span></div><br>'+desc+'<br></div>');
			
		}
		load_text_xml();
		
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
			
				
				$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href=\'../../restaurante.html?id='+value+'\'" ><p style="font-size:1.5em;text-transform:uppercase">'+nombre+'</p><span style="font-size:1.2em;font-weight:bold">'+tlf+'</span><p style="font-size:0.9em">'+calle+'<br>'+cp+' '+ciudad+'</p></div>');
			
			});
		});		
	});
}

function search_items_xml(currentstart, currentlimit, paginate, totalpages, form, contenedor)
{		
	var search_string=$("#"+form).serialize(); 
	var c12=$("#restaurants_c12").val();
	
	var c13=$("#restaurants_c13").val();
	var c6=$("#restaurants_c6").val();
	
	
//	search_string+="&start="+parseInt(paginate)+"&limit="+parseInt(currentlimit);
	
	$("#"+contenedor).html("");
	
	var texto="";
	$.get("../../resources/xml/restaurantes/all.xml", function(xml) {	

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
					$("#"+contenedor).append('<div style="padding:10px;border-bottom:1px solid #333;cursor:pointer" onclick="window.parent.location.href=\'../../restaurante.html?id='+value+'\'" ><p style="font-size:1.5em;text-transform:uppercase">'+nombre+'</p><span style="font-size:1.2em;font-weight:bold">'+tlf+'</span><p style="font-size:0.9em">'+calle+'<br>'+cp+' '+ciudad+'</p></div>');
					
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

function setLanguage(value) 
{
	setLocalStorage("language",value);
}
function getLanguage()
{
	var language=getLocalStorage("language");
	
	if(typeof(language) == 'undefined')
		setLocalStorage("language","es");
		
	return getLocalStorage("language");
}

function setSession(value)
{
	setLocalStorage("session_user_id",value);
}
function getSession()
{
	var session=getLocalStorage("session_user_id");
	
	if(typeof(session) == 'undefined')
		return false;
		
	return getLocalStorage("session_user_id");
	
}

//window.localStorage - stores data with no expiration date
//code.sessionStorage - stores data for one session (data is lost when the tab is closed)
function setLocalStorage(keyinput,valinput) //idioma
{
	if(typeof(window.localStorage) != 'undefined'){ 
		window.localStorage.setItem(keyinput,valinput); 
	} 
	else{ 
		throw "localStorage no definido"; 
	}
}
function getLocalStorage(keyoutput)
{
	if(typeof(window.localStorage) != 'undefined'){ 
		return window.localStorage.getItem(keyoutput); 
	} 
	else{ 
		throw "localStorage no definido"; 
	}
}
