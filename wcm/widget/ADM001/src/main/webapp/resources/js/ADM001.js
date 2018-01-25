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
	
	var c1 = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);
	//var c2 = DatasetFactory.createConstraint("colleaguePK.colleagueId", "007", "admin", ConstraintType.MUST_NOT);
	var sortingFields = new Array("colleagueName");
	var constraints   = new Array(c1);
	var datasetReturned = DatasetFactory.getDataset("colleague", null, constraints, sortingFields);
	
	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
		
	    var records = datasetReturned.values;
	    
	    for (var index in records) {
	    	
	        var record = records[index];
	        
	        if(record.login == "admin" || record.login == "flight.ghfly.com.1")
	        	continue;
	        
	        var nome   = record.colleagueName;
	        var ramal  = record.extensionNr;
	        var login  = record.login;
	        var departamento = record.currentProject;
	        var foto  = "/social/api/rest/social/image/profile/"+login+"/MEDIUM_PICTURE";
			var dados = '<li class="media d-block">';
					dados += '<a class="pull-left" href="#">';
						dados += '<img class="media-object user-avatar" alt="'+nome+'" src="'+foto+'" style="width:50px; height:50px;">';
					dados += '</a>';
					dados += '<div class="media-body">';
						dados += '<h4 class="media-heading">'+nome+'</h4>';
						dados += '<p class="ramal">Ramal: '+ramal+'<br /> <small>'+departamento+'</small></p>';
					dados += '</div>';
				dados += '</li>';
				$("#ramalList").append(dados);
	    }
	}
	
    $('.scrollbar-macosx').scrollbar();
});
function lookRamal() {
    // Declare variables
    var input, filter, ul, li, look, i, user;
    input = document.getElementById('lookRamal');
    filter = replaceSpecialChars(input.value.toUpperCase());

    ul = document.getElementById("ramalList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        look = li[i].getElementsByTagName("h4")[0];
        user = replaceSpecialChars(look.innerHTML.toUpperCase());
        if (user.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function replaceSpecialChars(str)
{
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[éê]/,"e");
    str = str.replace(/[Í]/,"I");
    str = str.replace(/[í]/,"i");
    str = str.replace(/[ÓÕÔ]/,"O");
    str = str.replace(/[óõô]/,"o");
    str = str.replace(/[Ú]/,"U");
    str = str.replace(/[ú]/,"u");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");

    // o resto

    return str.replace(/[^a-z0-9]/gi,''); 
}
