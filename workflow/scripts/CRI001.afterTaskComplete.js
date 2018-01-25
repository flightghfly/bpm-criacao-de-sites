function afterTaskComplete(colleagueId,nextSequenceId,userList){
	var atv  = getValue('WKNumState');
	var user = getValue("WKUser");
	
	//aprovação cliente
	if(atv == 14)
	{
		var aprovacao = hAPI.getCardValue("aprovacao_peca");
		
		if(aprovacao == "NAO")
		{
			//Atualiza contador
			var total_refacao = parseInt(hAPI.getCardValue("total_refacao_criacao"));
			hAPI.setCardValue("total_refacao_criacao",total_refacao+1);
		}
	}
	
	//aprovação 
	if(atv == 25)
	{
		var aprovacao = hAPI.getCardValue("aprovacao_derivacao");
		
		if(aprovacao == "NAO")
		{
			var total_refacao = parseInt(hAPI.getCardValue("total_refacao_deriv"));
			hAPI.setCardValue("total_refacao_deriv",total_refacao+1);
		}
	}	
}