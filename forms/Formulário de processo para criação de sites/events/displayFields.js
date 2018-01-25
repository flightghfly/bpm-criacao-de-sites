function displayFields(form,customHTML){
	
	var activity = getValue('WKNumState');
	
	//Campos ocultos para praticamente todas as etapas do processo.
	//Liberar apenas na etapa correta.
	form.setVisibleById("avl_score_criacao",false);
	form.setVisibleById("avl_score_briefing",false);
	form.setVisibleById("avl_score_dev",false);
	form.setVisibleById("conteudo",false);
	form.setVisibleById("conteudo_dev",false);
	
	if(activity == 0 || activity == 1)
	{
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		form.setVisibleById("dadosftp",false);
	}
	//Aguardando Conteúdo	
	if(activity == 4)
	{
		form.setVisibleById("conteudo",true);
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		form.setVisibleById("dadosftp",false);
	}
	//Avaliação de Briefing
	if(activity == 68)
	{
		form.setVisibleById("avl_score_briefing",true);
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		form.setVisibleById("dadosftp",false);		
	}
	//Criação Layout + Criação Layout Int 
	if(activity == 15 || activity == 30 )
	{
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);	
		form.setVisibleById("dadosftp",false);	
	}
	//Avaliação Criação
	//Feito somente uma única vez na primeira etapa
	if(activity == 81)
	{
		form.setVisibleById("avl_score_criacao",true);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		form.setVisibleById("dadosftp",false);		
	}
	//Aguardando Aprovação
	if(activity == 17 || activity == 34)
	{
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		
		//Zera valor do campo "aprovação cliente" para etapa criação (loop)
		form.setValue("apr_layout001","");
		customHTML.append('<script>');
		//Zera select
			customHTML.append('$("form").find("select[name=\'apr_layout001\']").val("");');
		//Campo refação aguarda ação do select
			customHTML.append('$("form").find("#refacao_layout001").css("display","none");');
		//Habilita função de mudança de select
			customHTML.append('$("form").on("change","select[name=\'apr_layout001\']",function(){ var apr = $(this).val(); if(apr != "SIM") $("#refacao_layout001").show(); else $("#refacao_layout001").hide(); });');
		customHTML.append('</script>');	
		form.setVisibleById("dadosftp",false);	
	}
	//Refação Criação 1 + refação internas criação
	if(activity == 21 || activity == 38)
	{
		form.setVisibleById("link_dev",false);
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);	
		form.setVisibleById("dadosftp",false);	
	}
	//Implementação HOME + Implementação Geral
	if(activity == 32 || activity == 44)
	{
		//Esconde refação criação
		form.setVisibleById("refacao_layout001",false);
		
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);	
		form.setVisibleById("dadosftp",false);	
	}
	//Avaliação DEV
	if(activity == 86)
	{
		//Esconde dados da etapa criação
			form.setVisibleById("link_criacao",false);
			form.setVisibleById("apr_layout001",false);
			form.setVisibleById("refacao_layout001",false);
		
		form.setVisibleById("apr_dev",false);
		form.setVisibleById("refacao_dev",false);
		
		//Habilita avaliação DEV
		form.setVisibleById("avl_score_dev",true);
		form.setVisibleById("dadosftp",false);
	}
	//Aguardando aprovação DEV
	if(activity == 48)
	{
		//Esconde dados da etapa criação
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
	
		//Zera valor do campo "aprovação cliente" para etapa DEV (loop)
		form.setValue("apr_dev","");
		customHTML.append('<script>');
		//Zera select
			customHTML.append('$("form").find("select[name=\'apr_dev\']").val("");');
		//Campo refação aguarda ação do select
			customHTML.append('$("form").find("#refacao_dev").css("display","none");');
		//Habilita função de mudança de select
			customHTML.append('$("form").on("change","select[name=\'apr_dev\']",function(){ var apr = $(this).val(); if(apr != "SIM") $("#refacao_dev").show(); else $("#refacao_dev").hide(); });');

		//aguarda ação do select
			customHTML.append('$("form").find("#dadosftp").css("display","none");');
		//Habilita função de mudança de select
			customHTML.append('$("form").on("change","select[name=\'apr_dev\']",function(){ var apr = $(this).val(); if(apr != "SIM") $("#dadosftp").hide(); else $("#dadosftp").show(); });');

		customHTML.append('</script>');
	}
	
	if(activity == 52)
	{
		//Esconde dados da etapa criação
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);	
		form.setVisibleById("dadosftp",false);	
	}
	
	if(activity == 57)
	{
		//Esconde dados da etapa criação
		form.setVisibleById("link_criacao",false);
		form.setVisibleById("apr_layout001",false);
		form.setVisibleById("refacao_layout001",false);
		
		form.setVisibleById("refacao_dev",false);
		
		//Habilita campo anexo
		form.setVisibleById("conteudo_dev",true);
		form.setVisibleById("dadosftp",false);
	}
	
	if(activity == 91)
	{
		form.setVisibleById("refacao_layout001",false);
		form.setVisibleById("refacao_dev",false);
	}
	
	
	if(activity != 0 && activity != 1)
	{
		//Bloqueia zoom p/ alterar nome da empresa solicitante
		customHTML.append('<script>');
			customHTML.append('$(\'form\').find(\'.styled-readonly\').prop(\'onclick\', null).off(\'click\').removeClass(\'styled-readonly\');');
		customHTML.append('</script>');			
	}
}