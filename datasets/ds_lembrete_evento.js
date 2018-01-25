function defineStructure() {

}
function onSync(lastSyncDate) {
	
	var i;
	var j;
	var k;
	var data = new Date();
	
	var ano = data.getFullYear();
	//Mes atual
	var mes   	  = (data.getMonth())+1;
	
	//Dia atual
	var today 	  = ano+"-"+mes+"-"+data.getDate();
	
	var c1 = DatasetFactory.createConstraint("metadata#active","true","true",ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("data_evento",today,today,ConstraintType.MUST);
	
	var constraints = new Array(c1,c2);
	
	var server = "http://flight.ghfly.com:80";
	var parametros    = new java.util.HashMap();
	var destinatarios = new java.util.ArrayList();
	
	var evento = DatasetFactory.getDataset("ds_ghfly_eventos", null, constraints,null);
	
	if(evento != null && evento.values != null && evento.values.length > 0 ){
		
		for(i=0;i<evento.rowsCount;i++)
		{
			var id = evento.getValue(i,"id");
			var c1 = DatasetFactory.createConstraint("id_evento",id,id,ConstraintType.MUST);
			var constraints = new Array(c1);
			
			var inscrito = DatasetFactory.getDataset("ds_inscricao_evento", null, constraints,null);
			
			if(inscrito != null && inscrito.values != null && inscrito.values.length > 0 ){
				for(j=0;j<inscrito.rowsCount;j++)
				{
					var mat = inscrito.getValue(j,"usuario_confirmado");
					var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",mat,mat,ConstraintType.MUST);
					var constraints = new Array(c1);
					
					var usuario = DatasetFactory.getDataset("colleague", null, constraints,null);					
					
					if(usuario != null && usuario.values != null && usuario.values.length > 0 ){
						email = usuario.getValue(0,"mail");
						destinatarios.add(email);
					}
				}
				parametros.put("SERVER_URL", server);
				parametros.put("subject", "[LEMBRETE] GhFly Evento");
				notifier.notify("007", "LEMBRETE_EVENTO", parametros, destinatarios, "text/html");				
			}		
		}
	}

}
function createDataset(fields, constraints, sortFields) {
	
}function onMobileSync(user) {

}
function ultimoDiaMes(data)
{
	return (new Date(data.getFullYear(), data.getMonth() + 1, 0) ).getDate();	
}