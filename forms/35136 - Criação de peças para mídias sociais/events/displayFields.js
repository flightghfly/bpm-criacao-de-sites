function displayFields(form,customHTML){ 	
	
	var atv = getValue('WKNumState');

	form.setVisibleById('avl_score_briefing',false);
	form.setVisibleById('avl_score_criacao',false);	
	
	if(atv == 0 || atv == 1)
	{

		//manipulaveis de acordo com a seleção de mídia e tipo de job
		form.setVisibleById('texto_orientacao',false);
		form.setVisibleById('cards',false);
		form.setVisibleById('justificativa_urgencia',false);

		//Campos de outras etapas
		form.setVisibleById('aprovacao_urgencia',false);
		form.setVisibleById('prazo_canvas',false);
		form.setVisibleById('aprovacao_peca',false);
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);
	}

	//libera visualização para todas as outras tarefas
	if(atv > 1)
	{
		form.setHideDeleteButton(true);
		
		var midia 	  = form.getValue("midia");
		var tipo_peca = form.getValue("tipo_peca");
		var urgencia  = form.getValue("urgencia");

		if( (midia == "FACEBOOK" || midia == "INSTAGRAM" || midia == "LINKEDIN") && (tipo_peca == "FEED" ||tipo_peca == "CANVAS" || tipo_peca == "STORIES") )
		{
			form.setVisibleById("texto_orientacao",true);
			form.setVisibleById("cards",false);
		}
		else
		{
			form.setVisibleById("cards",true);
			form.setVisibleById("texto_orientacao",false);
		}

		if(urgencia == "SIM")
		{
			form.setVisibleById("justificativa_urgencia",true);
			form.setVisibleById('aprovacao_urgencia',true);
		}
		else
		{
			form.setVisibleById("justificativa_urgencia",false);
			form.setVisibleById('aprovacao_urgencia',false);
		}

		form.setVisibleById('prazo_canvas',false);
	}

	//Aprovação de urgência
	if(atv == 38)
	{
		form.setVisibleById('aprovacao_peca',false);
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);
	}

	// Definir prazo canvas
	if(atv == 42)
	{
		form.setVisibleById('prazo_canvas',true);

		form.setVisibleById('aprovacao_peca',false);
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);
	}

	//Criação de peça
	if(atv == 37)
	{
		//habilita campo de avaliação do briefing
		form.setVisibleById('avl_score_briefing',true);

		form.setVisibleById('aprovacao_peca',false);
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);
	}

	//Avaliação criação
	if(atv == 12)
	{
		//habilita campo de avaliação da criação
		form.setVisibleById('avl_score_criacao',true);

		form.setVisibleById('aprovacao_peca',false);
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);		
	}

	//Aprovação de peça
	if(atv == 14)
	{
		form.setVisibleById('refacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);

		//manipulavel por script no front
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);

		form.setValue("aprovacao_peca","");
	}

	//Refação da peça
	if(atv == 18)
	{
		form.setVisibleById('derivacao',false);
		form.setVisibleById('txt_derivacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);		
	}

	//Derivação da peça
	if(atv == 23)
	{
		form.setVisibleById('refacao',false);
		form.setVisibleById('aprovacao_derivacao',false);
		form.setVisibleById('derivacao_refacao',false);		
	}

	//Aprovação da derivação da peça
	if(atv == 25)
	{
		form.setVisibleById('refacao',false);
		form.setVisibleById('derivacao_refacao',false);
		form.setValue("aprovacao_derivacao","");
	}

	if(atv == 29)
	{
		form.setVisibleById('refacao',false);
	}
}