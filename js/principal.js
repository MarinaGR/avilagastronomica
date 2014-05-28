//Global Variables
var array_text=new Array();

$(document).ready(function() {
	 // var fields=["value", "nombre[lang='"+getLanguage()+"']","desc[lang='"+getLanguage()+"']"];
   // create_array_xml("./resources/xml/restaurantes/all.xml", "id", fields);
	 var fields=["value"];
     create_array_xml("./resources/xml/general/general_es.xml", "text", fields);
});

function create_array_xml(route_xml, type, fields)
{	
	$.get(route_xml, function(xml) {  
				
		var k=0;
		var campo=new Array();
		$(xml).find(type).each(function() {

			for(j=0;j<fields.length;j++)
			{
				campo[j]=$(this).find(fields[j]).text();
			}

			/*var id=$(this).find('value').text(); 
			
			var nombre_es=$(this).find('nombre[lang="es"]').text(); 
			var nombre_en=$(this).find('nombre[lang="en"]').text(); 
			
			var desc_es=$(this).find('desc[lang="es"]').text(); 
			var desc_en=$(this).find('desc[lang="en"]').text(); */
				
			array_text[k]=new Array();
			for(j=0;j<fields.length;j++)
			{
				array_text[k][j]=campo[j];
				
				/*array_text[k][0]=id;
				array_text[k][1]=[nombre_es, nombre_en]
				array_text[k][2]=[desc_es, desc_en];*/
			}
			

			k++;
	
		});
		//read_array_xml("", fields);
		
     	console.log(array_text);
		
	});
}
function read_array_xml(number, fields)
{
	if(number="")
	{
		for(k=0;k<array_text.length;k++)
		{
			for(j=0;j<fields.length;j++)
			{
				console.log(array_text[k][j]);
			}
		}
	}
	else 
	{
		for(j=0;j<fields.length;j++)
		{
			console.log(array_text[number][j]);
		}
	}
	
}
