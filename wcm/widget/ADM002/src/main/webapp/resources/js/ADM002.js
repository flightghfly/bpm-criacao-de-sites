var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {

    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});
$(document).ready(function(){
	
	var data = new Date();
	
	//getMonth devolve entre 0 (jan) e 11 (dez), adicionar +1
	var mes = (data.getMonth())+1;

	var mesFinal;
	var today = data.getDate();
	
	var horario_atual = data.getHours()+":"+data.getMinutes();
		
	if(mes < 12)
		mesFinal = mes+1;
	else if(mes == 12)
		mesFinal = 1;

	var c1 = DatasetFactory.createConstraint("mes_nascimento",mes,mes,ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("sqlLimit", "15", "15", ConstraintType.MUST);
	var sortingFields = new Array("mes_nascimento","dia_nascimento");
	var constraints   = new Array(c1,c2);
	var datasetReturned = DatasetFactory.getDataset("ds_ghflyers_aniversariantes", null, constraints, sortingFields);
	
	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
		
	    var records = datasetReturned.values;
	    var records2 = datasetReturned.values;
	    
	    records2 = _.sortBy(records2,"dia_nascimento");

	    var aniversariantes = [];
	    for (var index in records) {
	    	
	        var record = records[index];
	        var login  = record.nome;
	        var dia_aniversario = parseInt(record.dia_nascimento);
	        var mes_aniversario = parseInt(record.mes_nascimento);
	        	        	        	    
	        if(dia_aniversario < today && mes == mes_aniversario)
	        	continue;

	        aniversariantes.push({login:login,dia_aniversario:dia_aniversario,mes_aniversario:mes_aniversario});
	    }
	    
	    //organiza por dia de aniversario e agrupa por mês.
	    
	    var grupo_aniversariantes = _.groupBy(_.sortBy(aniversariantes,"dia_aniversario"),function(data){return data.mes_aniversario});
	    
	    $.each(grupo_aniversariantes,function(){
	    	let anv = $(this);
	    	$.each(anv,function(){
	    		
		    	let user = $(this)[0].login;
		    	var mes_aniversario  = $(this)[0].mes_aniversario;
		    	var dia_aniversario  = $(this)[0].dia_aniversario;
		    	
		    	var c1 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
		    	var c2 = DatasetFactory.createConstraint("login",user,user,ConstraintType.MUST);
		    	var constraints   	 = new Array(c1,c2);
		    	var datasetReturned2 = DatasetFactory.getDataset("colleague", null, constraints, null);
		    	
		    	if(datasetReturned2 != null && datasetReturned2.values != null && datasetReturned2.values.length > 0) {
		    		
		    		var aniversariante = datasetReturned2.values;
			        var nome    	   = aniversariante[0].colleagueName;
			        var login   	   = aniversariante[0].login;

				    var foto  = "/social/api/rest/social/image/profile/"+login+"/MEDIUM_PICTURE";
					var dados = '<li class="media d-block">';
							dados += '<a class="pull-left" href="#">';
								dados += '<img class="media-object user-avatar" alt="'+nome+'" src="'+foto+'" style="width:50px; height:50px;">';
							dados += '</a>';
							dados += '<div class="media-body">';
								dados += '<h4 class="media-heading"><a href="/portal/p/1/social/'+login+'" target="_blank">'+nome+'</a></h4>';
								if(dia_aniversario == today && mes_aniversario == mes)
									dados += '<p class="data_aniversario"><strong>Hoje</strong></p>';
								else
									dados += '<p class="data_aniversario">'+dia_aniversario+' de '+strFnMes(mes_aniversario)+'</p>';
							dados += '</div>';
						dados += '</li>';
						$("#aniversarianteList").append(dados);
		    	}	
	    	});	
	    });
	}
	else
		$("#aniversarianteList").append("<li>Nenhum aniversariante.</li>");
	
    $('.scrollbar-macosx').scrollbar();
});
function strFnMes(mes)
{
	var strMes = "";
	switch(mes)
	{
		case 1:
			strMes = "janeiro";
		break;
		case 2:
			strMes = "fevereiro";
		break;
		case 3:
			strMes = "março";
		break;
		case 4:
			strMes = "abril";
		break;
		case 5:
			strMes = "maio";
		break;
		case 6:
			strMes = "junho";
		break;
		case 7:
			strMes = "julho";
		break;
		case 8:
			strMes = "agosto";
		break;
		case 9:
			strMes = "setembro";
		break;
		case 10:
			strMes = "outubro";
		break;
		case 11:
			strMes = "novembro";
		break;
		case 12:
			strMes = "dezembro";
		break;			
	}
	return strMes;
}
function ultimoDiaMes(data)
{
	return (new Date(data.getFullYear(), data.getMonth() + 1, 0) ).getDate();	
}