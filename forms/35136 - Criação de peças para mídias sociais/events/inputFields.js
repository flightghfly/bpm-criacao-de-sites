function inputFields(form) {
	
	var atv  = getValue('WKNumState');
	var user = getValue("WKUser");
	
	if(atv == 0 || atv == 1)
	{
		var nome = findUser(user);
		form.setValue("avaliado_midia_nome",nome.getValue(0, "colleagueName"));
	}

	if(atv == 42)
	{
		var regEx = "^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$";
		 
		if (form.getValue("data_prazo_canvas").match(regEx)) 
		{
			var split = form.getValue("data_prazo_canvas").split('/');
			form.setValue("data_prazo_canvas", split[2] + '-' + split[1] + '-' + split[0]);
		}
	}
	
	//Criação peça
	if(atv == 37)
	{
		var nome = findUser(user);
		form.setValue("avaliado_criacao_nome",nome.getValue(0, "colleagueName"));
		form.setValue("avaliador_criacao_nome",nome.getValue(0, "colleagueName"));
	}
	
	//Avaliação criação
	if(atv == 12)
	{
		var nome = findUser(user);
		form.setValue("avaliador_midia_nome",nome.getValue(0, "colleagueName"));
	}
	
	//Aprovação urgência
	if(atv == 38)
	{
		var nome = findUser(user);
		form.setValue("aprovador_urgencia",nome.getValue(0, "colleagueName"));		
	}
}
function findUser(user) {
	var constraints = new Array(DatasetFactory.createConstraint('colleaguePK.colleagueId', user,
			user, ConstraintType.MUST));
	return DatasetFactory.getDataset('colleague', null, constraints, null);
}