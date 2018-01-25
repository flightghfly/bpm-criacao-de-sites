function validateForm(form) {
	
	var atividade = getValue('WKNumState');
	
	if ((form.getValue("empresa") == null || form.getValue("empresa") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
	{
		throw "Nome do Cliente n\u00E3o pode ser vazio.";
	}
	
	if ((form.getValue("tipo_site") == null || form.getValue("tipo_site") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
	{
		throw "Tipo de Site n\u00E3o pode ser vazio.";
	}

	if ((form.getValue("comentarios_ad") == null || form.getValue("comentarios_ad") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
	{
		throw "Briefing n\u00E3o pode ser vazio.";
	}

	if(atividade == 17)
	{
		if ((form.getValue("apr_layout001") == null || form.getValue("apr_layout001") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Aprovação do cliente n\u00E3o pode ser vazio.";
		}
		else if(form.getValue("apr_layout001") ==  "NAO")
		{
			if ( ( form.getValue("refacao_layout001") == null || form.getValue("refacao_layout001") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') ) )
			{
				throw "Comentários da refação n\u00E3o pode ser vazio.";
			}
		}
	}


	if(atividade == 15 || atividade == 21 || atividade == 30 || atividade == 38)
	{
		if ((form.getValue("link_criacao") == null || form.getValue("link_criacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "URL dos arquivos n\u00E3o pode ser vazio.";
		}
	}

	if(atividade == 44 || atividade == 52)
	{
		if ((form.getValue("link_dev") == null || form.getValue("link_dev") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "URL de homologação n\u00E3o pode ser vazio.";
		}
	}

	if(atividade == 48)
	{
		if ((form.getValue("apr_dev") == null || form.getValue("apr_dev") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Aprovação do cliente n\u00E3o pode ser vazio.";
		}
		else if(form.getValue("apr_dev") == "SIM")
		{
			if ((form.getValue("host_ftp") == null || form.getValue("host_ftp") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
			{
				throw "Host FTP n\u00E3o pode ser vazio.";
			}
			if ((form.getValue("user_ftp") == null || form.getValue("user_ftp") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
			{
				throw "User FTP n\u00E3o pode ser vazio.";
			}
			if ((form.getValue("senha_ftp") == null || form.getValue("senha_ftp") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
			{
				throw "Senha FTP n\u00E3o pode ser vazio.";
			}
		}
		else
		{
			if ((form.getValue("refacao_dev") == null || form.getValue("refacao_dev") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
			{
				throw "Comentários refação n\u00E3o pode ser vazio.";
			}
		}
	}

	/*
	 * Avaliações
	 ----------------------------------- */

	if(atividade == 68)
	{
		if ((form.getValue("avl_score_briefing") == null || form.getValue("avl_score_briefing") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Avaliação do briefing n\u00E3o pode ser vazio.";
		}
	}

	if(atividade == 81)
	{
		if ((form.getValue("avl_score_criacao") == null || form.getValue("avl_score_criacao") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Avaliação da crição n\u00E3o pode ser vazio.";
		}
	}

	if(atividade == 86)
	{
		if ((form.getValue("avl_score_dev") == null || form.getValue("avl_score_dev") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) 
		{
			throw "Avaliação do desenvolvimento n\u00E3o pode ser vazio.";
		}
	}



}