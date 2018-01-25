function eventoUser(created_by,criado_em)
{
	var dados = '<div class="media mt-1">';
			dados += '<a class="pull-left" href="#"><img class="media-object user-avatar" alt="'+created_by.nome+'" src="'+created_by.foto+'" style="width:35px; height:35px;"></a>';
			dados += '<div class="media-body">';
				dados += '<h5 class="media-heading">';
					dados += '<strong>'+created_by.nome+'</strong>';
					dados += '<span style="color:#90949c; font-size:12px;"> compartilhou um evento.</span>';
					dados += '<p style="color:#90949c; font-size:12px;">'+criado_em[2]+"/"+criado_em[1]+"/"+criado_em[0]+'</p>';
				dados += '</h5>';
			dados += '</div>';		
		dados += '</div>';
		
		return dados;
}

//- Função lista todos os eventos
function infoEventoList(id,cover,info,login,inscrito,ha_vagas,id_insc)
{
	var data  = new Date();
	var mes   = (data.getMonth())+1;
	var year  = data.getFullYear();
	var today = new Date(year+"-"+mes+"-"+data.getDate());

	//resgata dados do evento objeto

	var titulo    = info.titulo;
	var descricao = info.descricao;
	var local 	  = info.local;
	//hroa inicio e fim do evento
	var hora_i 	  = info.hora_inicio;
	var hora_f 	  = info.hora_termino;
	//data de inicio e fim do evento
	var start 	  = info.start;
	var end 	  = info.end;
	
	var data_atual 	     = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
	var data_inicio_insc = moment(start).format("YYYY-MM-DD 09:00:00");
	var data_final_insc  = moment(end).subtract(1,'days').format("YYYY-MM-DD 18:00:00");

	//dia e mês do evento
	var dia_evento = info.dia_evento;
	var mes_evento = info.mes_evento;
	

	//capa default
	if(cover == "")
		cover = "https://events.nationalgeographic.com/sites/default/files/styles/1280x446/public/2017-06/all%20events.jpg?itok=DVbCcmVM";

	//transform int to base64
	var id_evento = window.btoa(id);
	
	var dados = '<figure>';
			dados += '<img src="'+cover+'" alt="Evento" />';
		dados += '</figure>';
	
	dados += '<div class="col-xs-12 infoEvento">';
		
		dados += '<div class="row pb-1">';

		// BLOCO DATA
			dados += '<div class="col-xs-6 col-md-2 date">';
				dados += '<span class="month">'+strFnMesEvento(mes_evento)+'</span>';
				dados += '<span class="day">'+dia_evento+'</span>';
			dados += '</div>';
		//- FIM BLOCO DATA
		
		//BLOCO INFO EVENTO
			dados += '<div class="col-xs-6 col-md-10 title pl-0">';
				dados += '<span class="name"><a href="/portal/eventos/'+id+'/">'+titulo+'</a></span>';
				dados += '<span class="local">'+local+'</span>';
				dados += '<span class="horario">'+hora_i+' • '+hora_f+'</span>';
			dados += '</div>';
		dados += "</div>";
		//- FIM BLOCO EVENTO
		
		dados += "<div id='ev_"+id+"' class='row'>";	
			dados += '<div class="col-md-12">';
				dados += '<div class="col-md-12 bt-1" id="actions">';
					dados += "<div class='row'>";
						dados += '<div class="col-md-2 pl-0">';
							dados += '<a href="/portal/eventos/'+id+'/" class="btn btn-info btn-xs mt-1">+ info</a>';
						dados += '</div>';
						dados += '<div class="col-md-8 col-md-offset-2 text-right botao pr-0">';
							if(moment(data_atual).isBefore(data_inicio_insc))
							//if(new Date(start) > today)
							{
								let inicio_br = start.split("-");
								dados += '<button class="btn btn-primary btn-xs mt-1 disabled">Início das inscrições: '+inicio_br[2]+'/'+inicio_br[1]+'/'+inicio_br[0]+'</button>';
							}
							//else if(new Date(end) < today)
							else if(moment(data_atual).isAfter(data_final_insc))
								dados += '<button class="btn btn-primary btn-xs mt-1 disabled">Inscrições Encerradas</button>';

							else if(inscrito == false && ha_vagas == true)
								dados += '<button id="confirmar" class="btn btn-success btn-xs mt-1" data-btn-inscrever data-id='+id_evento+'>Inscrever-se</button>';
							
							else if(inscrito == true)
								dados += '<button id="excluir" class="btn btn-danger btn-xs mt-1" data-btn-desinscrever data-id='+id_evento+' >Cancelar Inscrição</button>';
							
							else
								dados += '<button id="esgotada" class="btn btn-primary btn-xs mt-1 disabled">Vagas Esgotadas</button>';
									
						dados += "</div>";
					dados += "</div>";
				dados += "</div>";
			dados += '</div>'; //row
		
	dados += '</div>'; //col-xs-12
	
	return dados;
}

function infoEvento(id)
{
	
	var confirmadosGroup = [];
	var user  = WCMAPI.userCode;
	var user_confirmado = false;
	
	var evento = get_eventos(id);

	
	if(evento != null && evento.values != null && evento.values.length > 0) {
		
		var documentId   	 = parseInt(evento.values[0].documentid)+1;

        //Informações do evento.
        var info = {};
        info.titulo 	  = evento.values[0].nome;
        info.descricao 	  = evento.values[0].descricao;
        info.local 		  = evento.values[0].localizacao;
        info.hora_inicio  = evento.values[0].hora_inicio;
        info.hora_termino = evento.values[0].hora_termino;
        info.limite 	  = evento.values[0].limite;
        info.start 		  = evento.values[0].inicio_inscricao;
        info.end 		  = evento.values[0].final_inscricao;
        info.responsavel  = evento.values[0].responsavel;

		var data_evento   = (evento.values[0].data_evento).split("-");

        //particiona data do evento
    	var mes_evento = parseInt(data_evento[1]);
    	var dia_evento = data_evento[2];

    	//insere data do evento no objeto
    	info.mes_evento = mes_evento;
    	info.dia_evento = dia_evento;

		$.when().then(function(res1){
			
			//Img cover
			return $.getJSON("/api/public/2.0/documents/getDownloadURL/"+documentId,res1);
		
		}).then(function(res2){
			
			if(res2.message.errorCode == null)
				console.log(res2.message.errorCode);
			
			var bgcover = res2.content;
			$("#eventosList").append(cover(bgcover));
			
			//Verifica se usuario confirmou presença
			return getUsuariosConfirmados(id,user);
		
		}).then(function(res3){
			
			user_confirmado = false;
			if(res3.values.length > 0)
			{
				user_confirmado = true;
				id_form = res3.values[0]["metadata#id"];
			}
			
			//total de usuários confirmados
			return getUsuariosConfirmados(id,"");
			
		}).then(function(res4){
			
			let confirmados = res4;
			let ha_vagas    = true;
			
			if(info.limite != "")
			{
				if(confirmados.values.length >= info.limite)
					ha_vagas = false;
			}

			//correto
			
			$("#eventosList").append(label_info(id,info,user_confirmado,ha_vagas));
			
			if(confirmados != null && confirmados.values != null && confirmados.values.length > 0)
			{
				var records = confirmados.values;
				
				for(var index in records)
				{
					var record = records[index];
					var mat    = record.usuario_confirmado;
					confirmadosGroup.push(infoUsuarios(mat,"matricula"));
				}
				
				$("#eventosList").append(box_comparecerao(confirmadosGroup));
			}
			$("#eventosList").append(label_descricao(info.descricao));
		});	
	}
	else
		alert("Falha ao listar evento.");
}
//- Retorna lista de usuários confirmados
function getUsuariosConfirmados(id,user)
{
	var c1 = DatasetFactory.createConstraint("id_evento",id,id,ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("metadata#active","true","true",ConstraintType.MUST);
	var constraints = new Array(c1,c2);
	
	if(user != "")
	{
		var c3 = DatasetFactory.createConstraint("usuario_confirmado",user,user,ConstraintType.MUST);
		constraints.push(c3);
	}
	
	var datasetReturned = DatasetFactory.getDataset("ds_inscricao_evento", null, constraints, null);
	
	return datasetReturned;
	
}

function infoUsuarios(matricula,type)
{
	var usuario = new Object();
	
	if(type == "matricula")
		var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",matricula,matricula,ConstraintType.MUST);
	else
		var c1 = DatasetFactory.createConstraint("login",matricula,matricula,ConstraintType.MUST);
	
	var constraints   	 = new Array(c1);
	var datasetReturned2 = DatasetFactory.getDataset("colleague", null, constraints, null);
	    	
	if(datasetReturned2 != null && datasetReturned2.values != null && datasetReturned2.values.length > 0) 
	{
		var user     = datasetReturned2.values;
		var login 	 = user[0].login;
		usuario.nome = user[0].colleagueName;
		usuario.foto = "/social/api/rest/social/image/profile/"+login+"/X_SMALL_PICTURE";    
	}
	return usuario;
}

function box_comparecerao(user)
{
	var limite,i;
	
	if(user.length > 15)
		limite = 15;
	else
		limite = user.length;
	
	let dados = "<div class='row'>";
		dados += "<div class='col-md-6 col-md-offset-3'>";
			dados += "<div class='panel panel-default'>";
				dados += "<div class='panel-body'>";
					if(user.length == 1)
						dados += "<span><strong>"+user.length+" confirmou presença</strong></span>";
					else if(user.length > 1)
						dados += "<span><strong>"+user.length+" confirmaram presença</strong></span>";
					
					dados += "<ul id='confirmados' class='list-inline mt-1'>";
						for(i=0;i<limite;i++)
						{
							dados += "<li>";
								dados += '<img class="media-object user-avatar img-popover" alt="'+user[i].nome+'" src="'+user[i].foto+'" style="width:35px; height:35px;" data-toggle="popover" data-content="'+user[i].nome+'" data-original-title="'+user[i].nome+'" >';	
							dados += "</li>";					
						}
					dados += "</ul>";					
				dados += "</div>";
			dados += "</div>";

		dados += "</div>";
	dados += "</div>";
		
		return dados;
}

function get_eventos(id)
{
	var c1 = DatasetFactory.createConstraint("metadata#active","true","true",ConstraintType.MUST);
	
	var constraints = new Array(c1);
	
	//pega id especifico
	if(id != "")
	{
		var c2 = DatasetFactory.createConstraint("metadata#id",id,id,ConstraintType.MUST);
		constraints.push(c2);
	}

	var sortingFields = new Array("data_evento");
	
	var datasetReturned = DatasetFactory.getDataset("ds_ghfly_eventos", null, constraints, sortingFields);
	
	return datasetReturned;
}

function cover(cover)
{
	let dados = "<div class='row'>";
			dados += "<div class='col-md-6 col-md-offset-3'>";
				dados += "<img src='"+cover+"' width='100%' heigth='262px' />";
			dados += "</div>";
		dados += "</div>";
	return dados;
}
function label_info(id,info,inscrito,ha_vagas)
{

	//resgata dados do evento objeto
	var titulo    = info.titulo;
	var descricao = info.descricao;
	var local 	  = info.local;

	//hroa inicio e fim do evento
	var hora_i 	  = info.hora_inicio;
	var hora_f 	  = info.hora_termino;
	//data de inicio e fim do evento
	var start 	    = info.start;
	var end 	    = info.end;
	var responsavel = info.responsavel;
	//dia e mês do evento
	var dia_evento = info.dia_evento;
	var mes_evento = info.mes_evento;	

	//usuario responsavel pelo evento
	var user = infoUsuarios(responsavel,"login");
	var responsavel_nome = "";
	var responsavel_foto = "";
	if(user.nome)
		responsavel_nome = user.nome;
	if(user.foto)
		responsavel_foto = user.foto;

	var data = new Date();
	var mes   = (data.getMonth())+1;
	var year  = data.getFullYear();
	var today = new Date(year+"-"+mes+"-"+data.getDate());
	
	var data_atual 	     = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
	var data_inicio_insc = moment(start).format("YYYY-MM-DD 09:00:00");
	var data_final_insc  = moment(end).subtract(1,'days').format("YYYY-MM-DD 18:00:00");
	

	var id_evento = window.btoa(id);
	
	let dados = "<div id='ev_"+id+"' class='row'>";
	
		dados += "<div class='col-md-6 col-md-offset-3'>";
			
			
			dados += "<div class='panel panel-default'>";
				dados += "<div class='panel-body'>";
					// ------
					dados += "<ul class='list-unstyled'>";
						dados += "<li>";
							dados += "<ul class='list-inline info1'>";
								dados += "<li class='date text-center'>";
									dados += '<span class="month">'+strFnMesEvento(parseInt(mes_evento))+'</span>';
									dados += '<span class="day">'+dia_evento+'</span>';
								dados += "</li>";
								dados += "<li style='width:80%'>";
									dados += '<span class="name">'+titulo+'</span>';
									dados += '<div class="media responsavel mt-0">';
										dados += '<a class="pull-left"><img src="'+responsavel_foto+'" class="media-object user-avatar" style="width:25px; height:25px;"></a>';
										dados += '<div class="media-body">';
											dados += '<h4 class="media-heading"><strong>Responsável:</strong> '+responsavel_nome+'</h4>';
										dados += '</div>';
									dados += '</div>';
								dados += "</li>";
							dados += "</ul>";
						dados += "</li>";
					dados += "</ul>";
					
					dados += "<hr>";
					
					// ------
					dados += "<ul class='list-unstyled mt-1'>";
						dados += "<li>";
							dados += "<ul class='list-inline info2'>";
								dados += "<li><span class='fluigicon fluigicon-time fluigicon-md'></span></li>";
								dados += "<li>"+hora_i+" - "+hora_f+"</li>";
							dados += "</ul>";
						dados += "</li>";
						dados += "<li>";
							dados += "<ul class='list-inline info2 mt-1'>";
								dados += "<li><span class='fluigicon fluigicon-map-marker fluigicon-md'></span></li>";
								dados += "<li>"+local+"</li>";
							dados += "</ul>";
						dados += "</li>";						
					dados += "</ul>";
					
					dados += '<div id="actions" class="col-md-12 text-right botao bt-1">';
						if(moment(data_atual).isBefore(data_inicio_insc))
						//if(new Date(start) > today)
						{
							let inicio_br = start.split("-");
							dados += '<button class="btn btn-primary btn-xs mt-1 disabled">Início das inscrições: '+inicio_br[2]+'/'+inicio_br[1]+'/'+inicio_br[0]+'</button>';
						}
						else if(moment(data_atual).isAfter(data_final_insc))
						//else if(new Date(end) < today)
							dados += '<button class="btn btn-primary btn-xs mt-1 default disabled">Inscrições Encerradas</button>';

						else if(inscrito == false && ha_vagas == true)
							dados += '<button id="confirmar" class="btn btn-success btn-xs mt-1" data-btn-inscrever data-id='+id_evento+'>Inscrever-se</button>';
						
						else if(inscrito == true)
							dados += '<button id="excluir" class="btn btn-danger btn-xs mt-1" data-btn-desinscrever data-id='+id_evento+'>Cancelar Inscrição</button>';
						
						else
							dados += '<button id="esgotada" class="btn btn-primary btn-xs mt-1 disabled">Vagas Esgotadas</button>';
							
					dados += "</div>";
					
				dados += "</div>";				
			dados += "</div>";
			
		dados += "</div>";
	dados += "</div>";	
	
	return dados;
}

function label_descricao(descricao)
{
	let dados = "<div class='row'>";
			dados += "<div class='col-md-6 col-md-offset-3'>";
				dados += "<div class='panel panel-default'>";
					dados += "<div class='panel-heading'>";
						dados += "<h3 class='panel-title'>Detalhes</h3>";
					dados += "</div>";
					dados += "<div class='panel-body'>";
						dados += descricao;
					dados += "</div>";
				dados += "</div>";
			dados += "</div>";
		dados += "<div>";

		return dados;
}