function defineStructure() {

}
function onSync(lastSyncDate) {
	
	var data = new Date();
	
	//Mes atual
	var mes   	  = (data.getMonth())+1;
	var mes_final = mes;
	
	//Dia atual
	var today 	  = data.getDate();
	var until_day = today;
	
	//Ultimo dia do Mês
	var last_day = 0;
	
	//retorna dia da semana
	var dia_semana = parseInt(data.getDay());
	
	var c1 = DatasetFactory.createConstraint("mes_nascimento",mes,mes,ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("dia_nascimento",today,today,ConstraintType.SHOULD);
	var constraints = new Array(c1,c2);
	
	//se for sexta-feira, estende consulta de aniversariantes até domingo
	if(dia_semana == 5)
	{
		last_day = parseInt(ultimoDiaMes(data));
		//se hoje for menor que o último dia do mês - 2 dias
		if(today < last_day-2)
		{
			//estende consulta para sáb e dom
			var c3 = DatasetFactory.createConstraint("dia_nascimento",until_day+1,until_day+1,ConstraintType.SHOULD);
			var c4 = DatasetFactory.createConstraint("dia_nascimento",until_day+2,until_day+2,ConstraintType.SHOULD);
			constraints.push(c3);
			constraints.push(c4);
		}
	}
	
	var server 	  = "http://flight.ghfly.com:80";
		
	
	var datasetReturned = DatasetFactory.getDataset("ds_ghflyers_aniversariantes", null, constraints,null);
	
	//Se existir aniversariante no dia presente e dia presente for diferente de fds, dispara lembrete de e-mail
	if(datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0 && (dia_semana != 6 && dia_semana != 0) ){
		
		var parametros    = new java.util.HashMap();
		var destinatarios = new java.util.ArrayList();
		parametros.put("SERVER_URL", server);
		parametros.put("subject", "[LEMBRETE] GhFly Aniversariantes");
	    
		destinatarios.add("gabriel.silva@ghfly.com");
		destinatarios.add("karimme.santos@ghfly.com");
		notifier.notify("007", "LEMBRETE_ANIVERSARIO", parametros, destinatarios, "text/html");
	}

}
function createDataset(fields, constraints, sortFields) {
	
}function onMobileSync(user) {

}
function ultimoDiaMes(data)
{
	return (new Date(data.getFullYear(), data.getMonth() + 1, 0) ).getDate();	
}