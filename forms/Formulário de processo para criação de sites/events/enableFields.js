function enableFields(form){ 
	var activity = getValue('WKNumState');
	
	form.setEnabled("avl_score_briefing",false);
	form.setEnabled("avl_score_criacao",false);
	form.setEnabled("avl_score_dev",false);		
	
	if(activity == 0 || activity == 1)
	{
		form.setEnabled("conteudo",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 4 || activity == 15)
	{
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		
		if(activity == 15)
			form.setEnabled("conteudo",false);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 17 || activity == 34)
	{		
		form.setEnabled("conteudo",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 21 || activity == 30 || activity == 38)
	{		
		form.setEnabled("conteudo",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 32 || activity == 44)
	{		
		form.setEnabled("conteudo",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 48)
	{		
		form.setEnabled("conteudo",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("link_dev",false);
	}
	else if(activity == 52)
	{		
		form.setEnabled("conteudo",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);	
	}
	else if(activity == 57)
	{
	
		form.setEnabled("conteudo",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);	
	}
	else if(activity == 68)
	{
		form.setEnabled("avl_score_briefing",true);
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 81)
	{
		form.setEnabled("avl_score_criacao",true);
		form.setEnabled("conteudo",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);		
	}
	else if(activity == 86)
	{
		form.setEnabled("avl_score_dev",true);
		form.setEnabled("conteudo",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("link_dev",false);		
		form.setEnabled("dadosftp",false);
	}
	else if(activity == 91)
	{
		form.setEnabled("conteudo",false);
		form.setEnabled("apr_layout001",false);
		form.setEnabled("refacao_layout001",false);
		form.setEnabled("link_criacao",false);
		form.setEnabled("link_dev",false);
		form.setEnabled("apr_dev",false);
		form.setEnabled("refacao_dev",false);
		form.setEnabled("dadosftp",false);
	}
	
	if(activity != 0 && activity != 1)
	{
		form.setEnabled("empresa",false);
		form.setEnabled("tipo_site",false);
		form.setEnabled("comentarios_ad",false);		
	}
}