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
	
	var sortingFields = new Array("andar","ramal");
	var datasetReturned = DatasetFactory.getDataset("ds_ghfly_salas", null, null, sortingFields);
	
	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
	    var records = datasetReturned.values;
	    for (var index in records) {
	        var record = records[index];
	        var nome  = record.nome;
	        var ramal = record.ramal;
	        var andar = record.andar;
			var dados = '<li class="media">';
					/*dados += '<a class="pull-left" href="#">';
						dados += '<img class="media-object user-avatar" alt="'+nome+'" src="'+foto+'" style="width:50px; height:50px;">';
					dados += '</a>';*/
					dados += '<div class="media-body">';
						dados += '<h4 class="media-heading">'+nome+'</h4>';
						dados += '<p class="ramal">Ramal: '+ramal+' - <span style="font-size:10px">'+andar+'º Andar</span></p>';
					dados += '</div>';
				dados += '</li>';
				$("#ramalSalasList").append(dados);
	    }
	}
	else
		$("#ramalSalasList").append("<li>Nenhuma sala encontrada.</li>");
	
    $('.scrollbar-macosx').scrollbar();
});
function lookRamalSala() {
    // Declare variables
    var input, filter, ul, li, look, i;
    input = document.getElementById('lookRamalSala');
    filter = input.value.toUpperCase();
    ul = document.getElementById("ramalSalasList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        look = li[i].getElementsByTagName("h4")[0];
        if (look.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

