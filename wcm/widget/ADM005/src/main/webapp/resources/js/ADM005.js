var Eventos_side = SuperWidget.extend({
	
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	var data = new Date();
    	//getMonth devolve entre 0 (jan) e 11 (dez), adicionar +1
    	var mes   = (data.getMonth())+1;
    	
    	var year  = data.getFullYear();
    	var today = data.getDate();
    	
    	var ultimo_dia = ultimoDiaMes(data);
    	
    	//retorna todos os eventos
    	var datasetReturned = get_eventos("");
    	
    	
    	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
    	    
    		var records = datasetReturned.values;
    		
    		console.log(records);
    		
    	    for (var index in records) {
    	    	
    	        var record       = records[index];
    	        var id 			 = record['metadata#id'];
    	        var login        = record.criado_por;
    	        var criado_em    = record.criado_em;
    	        var data_evento  = (record.data_evento).split("-");
    	        var titulo 		 = record.nome;
    	        var descricao 	 = record.descricao;
    	        var local 		 = record.localizacao;
    	        var hora_inicio  = record.hora_inicio;
    	        var hora_termino = record.hora_termino;
    	        var inicio_inscricao = record.inicio_inscricao;
    	        var final_inscricao = record.final_inscricao;
    	       
    	        criado_em 		 = criado_em.split("-");
    	        
    	        var ano_evento = parseInt(data_evento[0]);
	        	var mes_evento = parseInt(data_evento[1]);
	        	var dia_evento = parseInt(data_evento[2]);
	        	
	        	var data_final = moment(new Date()).format("YYYY-MM-DD 00:00:00");
	        	var data_ev    = moment(record.data_evento).format("YYYY-MM-DD "+hora_inicio+":00");
	        	
	        	if(moment(data_ev).isBefore(data_final))
	        		continue;
	        	
	        	//if(new Date(record.data_evento) < data3)
	        		//continue;
	        	
	        	var	dados = '<li>';
	       				dados += infoEventoList(id,mes_evento,dia_evento,titulo,local,hora_inicio,hora_termino,inicio_inscricao,final_inscricao);
	       			dados += '</li>';
	        			
				$("#evento_list").append(dados);    	        
    	    }
    	}
    	else
    		$("#evento_list").append("<li>Nenhum evento disponível no momento.</li>");

    },
  
    //BIND de eventos
    bindings: {
        local: {
            'btn-inscrever': ['click_inscreverEvento'],
            'btn-desinscrever': ['click_desinscreverEvento']
        },
        global: {}
    }
    
 
});
function strFnMesEvento(mes)
{
	var strMes = "";
	switch(mes)
	{
		case 1:
			strMes = "JAN";
		break;
		case 2:
			strMes = "FEV";
		break;
		case 3:
			strMes = "MAR";
		break;
		case 4:
			strMes = "ABR";
		break;
		case 5:
			strMes = "MAI";
		break;
		case 6:
			strMes = "JUN";
		break;
		case 7:
			strMes = "JUL";
		break;
		case 8:
			strMes = "AGO";
		break;
		case 9:
			strMes = "SET";
		break;
		case 10:
			strMes = "OUT";
		break;
		case 11:
			strMes = "NOV";
		break;
		case 12:
			strMes = "DEZ";
		break;			
	}
	return strMes;
}
function ultimoDiaMes(data)
{
	return (new Date(data.getFullYear(), data.getMonth() + 1, 0) ).getDate();	
}

function infoEventoList(id,mes,dia,titulo,local,hora_i,hora_f,inicio_inscricao,final_inscricao)
{
	var dados = '<div class="row evento">';

			dados += '<div class="col-md-12">';
				dados += '<div class="media">';
					dados += '<a href="/portal/eventos/'+id+'/" class="pull-left">';
						dados += '<div class="media-object date">';
							dados += '<span class="month">'+strFnMesEvento(mes)+'</span>';
							dados += '<span class="day">'+dia+'</span>';						
						dados += '</div>';
					dados += '</a>';
					dados += '<div class="media-body">';
						dados += '<h4 class="media-heading name"><a href="/portal/eventos/'+id+'/" >'+titulo+'</a></h4>';
						dados += '<span class="local">'+local+'</span>';
						dados += '<span class="horario"> - '+hora_i+' • '+hora_f+'</span>';
					dados += '</div>';
				dados += '</div>';
			dados += '</div>';

		dados += '</div>';
	
	return dados;
}

function get_eventos()
{
	var filter = new Date();
	var mes   = (filter.getMonth())+1;
	var year  = filter.getFullYear();
	var dia;
	var today = new Date();	
	
	if(filter.getDate() < 10)
		dia = "0"+filter.getDate();
	else
		dia = filter.getDate();
	console.log(year+"-"+mes+"-"+dia);
	
	var c1 = DatasetFactory.createConstraint("metadata#active","true","true",ConstraintType.MUST);
	//var c2 = DatasetFactory.createConstraint("data_evento", year+"-"+mes+"-"+dia,'2018-12-31', ConstraintType.SHOULD);
	//var c2 = DatasetFactory.createConstraint("sqlLimit", "3", "3", ConstraintType.MUST);

	var sortingFields = new Array("data_evento");
	var constraints   = new Array(c1);
	
	var datasetReturned = DatasetFactory.getDataset("ds_ghfly_eventos", null, constraints, sortingFields);
	
	console.log(datasetReturned);
	
	return datasetReturned;
}
