function inputFields(form) {
	
	var activity = getValue('WKNumState');
	var user     = getValue("WKUser");
	
	if(activity == 0 || activity == 1)
	{
		var nome = findUser(user);
		form.setValue("avaliado_customer_nome",nome.getValue(0, "colleagueName"));
	}
	else if(activity == 68)
	{
		var nome = findUser(user);
		form.setValue("avaliador_criacao_nome",nome.getValue(0, "colleagueName"));		
	}	
	else if(activity == 15)
	{
		var nome = findUser(user);
		form.setValue("avaliado_criacao_nome",nome.getValue(0, "colleagueName"));		
	}
	else if(activity == 81)
	{
		var nome = findUser(user);
		form.setValue("avaliador_customer_nome",nome.getValue(0, "colleagueName"));		
	}
	else if(activity == 44)
	{
		var nome = findUser(user);
		form.setValue("avaliado_dev_nome",nome.getValue(0, "colleagueName"));		
	}
	else if(activity == 21 || activity == 38)
	{
		//Atualiza contador refação criação
		var total_refacao = parseInt(form.getValue("total_refacao_criacao"));
		form.setValue("total_refacao_criacao",total_refacao+1);		
	}
	else if(activity == 52)
	{
		var total_refacao = parseInt(form.getValue("total_refacao_dev"));
		form.setValue("total_refacao_dev",total_refacao+1);		
	}
}
function findUser(user) {
	var constraints = new Array(DatasetFactory.createConstraint('colleaguePK.colleagueId', user,
			user, ConstraintType.MUST));
	return DatasetFactory.getDataset('colleague', null, constraints, null);
}