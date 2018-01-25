function defineStructure() {

}
function onSync(lastSyncDate) {
}
function createDataset(fields, constraints, sortFields) {
	
	var c1 = DatasetFactory.createConstraint("active","true","true",ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("login","admin","admin",ConstraintType.MUST_NOT);
	var i;
	
	var constraints = new Array(c1,c2);
	
	var server = "http://flight.ghfly.com:80";
	var parametros    = new java.util.HashMap();
	var destinatarios = new java.util.ArrayList();
	
	var colleague = DatasetFactory.getDataset("colleague", null, constraints,null);
	
	if(colleague != null && colleague.values != null && colleague.values.length > 0 ){
		var mail = "";
		for(i=0;i<colleague.rowsCount;i++)
			mail += colleague.getValue(i,"mail")+"<br />";
		
		destinatarios.add("karimme.santos@ghfly.com");
		destinatarios.add("gabriel.silva@ghfly.com");
		parametros.put("SERVER_URL", server);
		parametros.put("subject", "[FLIGHT] E-mail de Usuários Ativos");
		parametros.put("LISTA", mail);
		notifier.notify("007", "EMAIL_USERS", parametros, destinatarios, "text/html");		

	}
	
	return true;

}function onMobileSync(user) {

}