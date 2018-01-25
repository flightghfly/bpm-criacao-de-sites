var Eventos = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {

    	//eventos gerais
    	if(this.evento == 0)
    	{
    		/*
	    	var data  = new Date();
	    	var mes   = (data.getMonth())+1;
	    	var year  = data.getFullYear();
	    	var today = data.getDate();*/
	    	
	    	//matricula usuario logado
	    	var user = WCMAPI.userCode;
	
	    	//retorna todos os eventos
	    	var datasetReturned = get_eventos("");
	    	
	    	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0){
	    		
	    	    var records = datasetReturned.values;
	    	     
	    	    for (var index in records) {
	    	    	
	    	        var record       = records[index];
	    	        
	    	        var id 			 = record["metadata#id"];
	    	        
	    	        //Informações do evento.
	    	        var info = {};
	    	        info.titulo 	  = record.nome;
	    	        info.descricao 	  = record.descricao;
	    	        info.local 		  = record.localizacao;
	    	        info.hora_inicio  = record.hora_inicio;
	    	        info.hora_termino = record.hora_termino;
	    	        info.limite 	  = record.limite;
	    	        info.start 		  = record.inicio_inscricao;
	    	        info.end 		  = record.final_inscricao;	    	        

	    	        var login        = record.criado_por;
	    	        var criado_em    = (record.criado_em).split("-");
	    	        var data_evento  = (record.data_evento).split("-");

	    	        //particiona data do evento
		        	var mes_evento = parseInt(data_evento[1]);
		        	var dia_evento = data_evento[2];

		        	//insere data do evento no objeto
		        	info.mes_evento = mes_evento;
		        	info.dia_evento = dia_evento;


	    	        //Usuário que criou o evento.
	    	        var createdBy = infoUsuarios(login,"matricula");

    		        var idDoc = parseInt(record.documentid)+1;

    		        var inscritos = getUsuariosConfirmados(id,"");
    		    	
    		    	var total_inscritos = 0;
    		    	var ha_vagas 		= true;
    		    	var is_inscrito 	= false;
    		    	
    		    	var id_insc;
    		    	
    		    	if(inscritos != null && inscritos.values != null && inscritos.values.length > 0)
    		    	{
    		    		total_inscritos = inscritos.values.length;
    		    		
    		    		if(info.limite != "")
    		    		{
    		    			if(total_inscritos >= info.limite)
    		    				ha_vagas = false;
    		    		}
    		    		
    		    		//procura se usuario está inscrito
    		    		for(var i = 0; i<total_inscritos;i++)
    		    		{
    		    			if(user == inscritos.values[i].usuario_confirmado)
    		    			{
    		    				id_insc = inscritos.values[i]["metadata#id"];
    		    				is_inscrito = true;		 
    		    				break;
    		    			}
    		    		}
    		    	}
    		    	
    			    $.ajax({
    			        async: false,
    			        type: "GET",
    			        url: "/api/public/2.0/documents/getDownloadURL/"+idDoc,
    			        success : function(data) {
    			        	
    			        	var cover 	   = data.content;

			        		var	dados = '<div class="col-xs-6 mb-1">';
			        				dados += "<div class='col-xs-12 box-event pb-1'>";

			        					//usuario que criou o curso
			        					dados += eventoUser(createdBy,criado_em);

			        					dados += infoEventoList(id,cover,info,user,is_inscrito,ha_vagas,id_insc);

			        				dados += "</div>";
			        			dados += '</div>'; //col-xs-12 col-md-6 col-md-offset-3
			        			
							$("#eventosList").append(dados);
    							
    			        },
    			        error: function (msg){
    			            // código omitido
    			        }
    			    });
	    	    }
	    	}
	    	else
	    		$("#eventosList").append("<div class='alert alert-info'>Nenhum evento disponível.</div>");
    	}
    	else
    		//detalhes do evento
    		infoEvento(this.evento);
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'btn-inscrever': ['click_inscreverEvento'],
            'btn-desinscrever': ['click_desinscreverEvento']
        },
        global: {}
    },
    
    desinscreverEvento: function(htmlElement,event)
    {
    	//get matricula logged user
    	var user = WCMAPI.userCode;
    	//get id evento
    	var id = event.target.getAttribute("data-id");
    	//transform base64 to int
    	var id_evento = window.atob(id);

    	var myLoading2 = FLUIGC.loading(window);
    	myLoading2.show();

    	//buscas id da inscricao baseado no id do evento e usuario logado
    	console.log(id_evento);
    	console.log(user);
    	var datasetReturned = getUsuariosConfirmados(id_evento,user);

    	console.log(datasetReturned);

    	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0) 
    	{
    		//retorna metadata#id da inscrição
    		var id_inscricao = datasetReturned.values[0]["metadata#id"];
		    
		    $.ajax({
		        async: false,
		        type: "POST",
		        url: "/api/public/2.0/cardindexes/delete/"+id_inscricao,
		        success : function(data) {

		        	if(data.errorCode == null)
		        	{	
			        	//retorna todas as inscrições
			        	var inscritos = getUsuariosConfirmados(id_evento,"");

				    	//dados do evento
				    	var datasetEvento = get_eventos(id_evento);
				    	
				    	if( (inscritos.values.length < datasetEvento.values[0].limite) || datasetEvento.values[0].limite == "")
				    		var botao = '<button id="confirmar" class="btn btn-success btn-xs mt-1" data-btn-inscrever data-id='+id+'>Inscrever-se</button>';
				    	else
				    		var botao = '<button id="esgotada" class="btn btn-primary btn-xs mt-1 disabled">Vagas Esgotadas</button>';
				    	
				    	$("#ev_"+id_evento).find(".botao").html(botao);
				    }
				    else
				    	alert(data.errorCode);
	    	    },
	    	    error: function(err) {
	    	    	alert(err);
	    	    },
	    	    complete: function(){
	    	    	myLoading2.hide();	
	    	    }   	
		    });
    	}
    	else
    		alert("Erro ao recuperar inscrição.");
    },
    
    inscreverEvento: function(htmlElement, event) {

    	//variaveis
    	var setSoapField = [];
    	//get matricula logged user
    	var user = WCMAPI.userCode;    	
    	//get id evento
    	var id = event.target.getAttribute("data-id");
    	//transform base64 to int
    	var id_evento = window.atob(id);
    	
    	var myLoading2 = FLUIGC.loading(window);
    	myLoading2.show();

    	//inscritos no evento
    	var datasetReturned = getUsuariosConfirmados(id_evento,"");
    	
    	//dados do evento   	
    	var datasetEvento = get_eventos(id_evento);
    	
    	//se ainda tem vaga
    	if(datasetReturned.values.length < datasetEvento.values[0].limite || datasetEvento.values[0].limite == "")
    	{
	    	var wsUrl = WCMAPI.serverURL + "/webdesk/ECMCardService?wsdl";

	    	//fields do formulario que receberá a inscrição
	    	setSoapField.push({field:"id_evento",fieldname:"id_evento"});
	    	setSoapField.push({field:"usuario_confirmado",fieldname:"usuario_confirmado"}); 

	    	var soapRequest = _constructsoap(setSoapField);

	    	//Modelo da Requisição
	    	//var soapRequest =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/"><soapenv:Header/><soapenv:Body><ws:create><companyId></companyId><username></username><password></password><card><item><cardData><field>id_evento</field><value name="id_evento"></value></cardData><cardData><field>usuario_confirmado</field><value name="usuario_confirmado"></value></cardData><parentDocumentId></parentDocumentId></item></card></ws:create></soapenv:Body></soapenv:Envelope>';
	    	 
	    	//Convertendo para XML, para facilitar a manipulação
	    	var parser 	   = new DOMParser();
	    	var xmlRequest = parser.parseFromString(soapRequest,"text/xml");
	    	 
	    	//Código da empresa
	    	xmlRequest.getElementsByTagName("companyId")[0].innerHTML = WCMAPI.organizationId;
	    	 
	    	//Código do template de formulário, já publicado
	    	xmlRequest.getElementsByTagName("parentDocumentId")[0].innerHTML = 23096;
	    	//xmlRequest.getElementsByTagName("parentDocumentId")[0].innerHTML = 3986;
	    	 
	    	//Valores para os campos
	    	xmlRequest.getElementsByName("id_evento")[0].innerHTML 			= id_evento;
	    	xmlRequest.getElementsByName("usuario_confirmado")[0].innerHTML = user;
	    	 
	    	//Enviando a requisição
	    	WCMAPI.Create({
	    	    url: wsUrl,
	    	    contentType: "text/xml",
	    	    dataType: "xml",
	    	    data: xmlRequest,
	    	    success: function(data){

	    	        var xmlResp = parser.parseFromString(data.firstChild.innerHTML,"text/xml");
	    	        
	    	        var botao = '<button id="excluir" class="btn btn-danger btn-xs mt-1" data-btn-desinscrever data-id='+id+'>Cancelar Inscrição</button>';
	    	        
	    	        $("#ev_"+id_evento).find(".botao").html(botao);
	    	    },
	    	    error: function(err) {
	    	    	alert(err);
	    	    },
	    	    complete: function() {
	    	    	myLoading2.hide();
	    	    }
	    	});
	    }
	    else
	    	alert("Desculpe! Este evento já está lotado.")
    }

});