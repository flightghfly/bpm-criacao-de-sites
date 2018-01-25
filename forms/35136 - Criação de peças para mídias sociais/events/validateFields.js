function validateForm(form) {		
	
	var atv = getValue('WKNumState');

	if(atv == 0 || atv == 1)
	{
		if ((form.getValue("empresa") == null || form.getValue("empresa") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione a empresa solicitante.";
		}

		if ((form.getValue("guide_marca") == null || form.getValue("guide_marca") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione se existe guide de marca.";
		}

		if ((form.getValue("midia") == null || form.getValue("midia") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione a mídia.";
		}

		if ((form.getValue("tipo_peca") == null || form.getValue("tipo_peca") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione o tipo de peça.";
		}
		else if( (form.getValue("midia") == "FACEBOOK" || form.getValue("midia") == "INSTAGRAM" || form.getValue("midia") == "LINKEDIN") )
		{
			if((form.getValue("tipo_peca") == "FEED" || form.getValue("tipo_peca") == "CANVAS" || form.getValue("tipo_peca") == "STORIES"))
			{
				if ( (form.getValue("texto_orientacao") == null || form.getValue("texto_orientacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
				{
					throw "Descreva o texto que deverá conter na peça.";
				}
			}
			else
			{
			    var indexes = form.getChildrenIndexes("carrossel");
			    
			    if(indexes.length < 2)
			    	throw "Para peças do tipo CARROSSEL ou SLIDE SHOW, habilite no mínimo 2 cards.";

			    for (var i = 0; i < indexes.length; i++) 
			    {
			        var texto_card = form.getValue("texto_card___" + indexes[i]);
			        var link_card = form.getValue("link_card___" + indexes[i]);

			        if(texto_card == "" || link_card == "")
			        	throw "É obrigatório o preenchimento das informações de todos os cards habilitados.";
			    }
			}
		}
		else
			throw "Tipo de mídia desconhecido.";

		if ((form.getValue("objetivo") == null || form.getValue("objetivo") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Descreva qual o objetivo da peça.";
		}

		if ((form.getValue("urgencia") == null || form.getValue("urgencia") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione se é um pedido urgente.";
		}
		else
		{
			if(form.getValue("urgencia") == "SIM")
			{
				if ((form.getValue("justificativa_urgencia") == null || form.getValue("justificativa_urgencia") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
				{
					throw "Justificativa da urgência não pode ser vazio.";
				}
			}
		}
	}

	//apr urgência
	if(atv == 38)
	{
		if ((form.getValue("aprovacao_urgencia") == null || form.getValue("aprovacao_urgencia") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione se o pedido de urgência foi aprovada.";
		}
	}

	if(atv == 37)
	{
		if ((form.getValue("avl_score_briefing") == null || form.getValue("avl_score_briefing") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Avaliação do briefing é obrigatória.";
		}
	}

	if(atv == 12)
	{
		if ((form.getValue("avl_score_criacao") == null || form.getValue("avl_score_criacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Avaliação da criação é obrigatória.";
		}
	}

	if(atv == 14)
	{
		if ((form.getValue("aprovacao_peca") == null || form.getValue("aprovacao_peca") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione a aprovação da peça.";
		}
		else if (form.getValue("aprovacao_peca") ==  "NAO")
		{
			if((form.getValue("refacao") == null || form.getValue("refacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') ) )
				throw "Descreva os detalhes da refação.";
		}
		else
		{
			if((form.getValue("derivacao") == null || form.getValue("derivacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') ) )
			{
				throw "Selecione se existirá derivação.";
			}
			else if(form.getValue("derivacao") == "SIM")
			{
				if((form.getValue("txt_derivacao") == null || form.getValue("txt_derivacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') ) )
				{
					throw "Descreva os detalhes da derivação.";
				}
			}
		}
	}

	if(atv == 25)
	{
		if ((form.getValue("aprovacao_derivacao") == null || form.getValue("aprovacao_derivacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Selecione a aprovação da derivação.";
		}
		else if(form.getValue("aprovacao_derivacao") == "NAO")
		{
			if ((form.getValue("derivacao_refacao") == null || form.getValue("derivacao_refacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
			{
				throw "Descreva os detalhes da refação.";
			}
		}
	}
}