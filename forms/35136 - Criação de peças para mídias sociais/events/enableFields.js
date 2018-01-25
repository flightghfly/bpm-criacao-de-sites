function enableFields(form) {

	var atv = getValue('WKNumState');
	
	if(atv > 0)
	{
		form.setEnabled("empresa",false);
		form.setEnabled("guide_marca",false);
		form.setEnabled("midia",false);
		form.setEnabled("tipo_peca",false);
		form.setEnabled("objetivo",false);
		form.setEnabled("referencia_visual",false);
		form.setEnabled("observacoes",false);
		form.setEnabled("texto_orientacao",false);
		form.setEnabled("urgencia",false);
		form.setEnabled("justificativa_urgencia",false);

	    var indexes = form.getChildrenIndexes("carrossel");
	    for (var i = 0; i < indexes.length; i++) {
	        form.setEnabled("texto_card___" + indexes[i], false);
	        form.setEnabled("link_card___" + indexes[i], false);
	    }		
	}
	
	//Aprovação da urgência
	if(atv != 38)
	{
		form.setEnabled("aprovacao_urgencia",false);
	}
	
	//Definir prazo canvas
	if(atv != 42)
	{
		form.setEnabled("data_prazo_canvas",false);
		form.setEnabled("hora_canvas",false);
	}

	//avaliação briefing
	if(atv != 37)
	{
		form.setEnabled("avl_score_briefing",false);
		form.setEnabled("cmtt_avl_briefing",false);
	}

	//avaliação criação
	if(atv != 12)
	{
		form.setEnabled("avl_score_criacao",false);
		form.setEnabled("cmtt_avl_criacao",false);
	}

	//aprovação de peça (Cliente)
	if(atv != 14)
	{
		form.setEnabled("aprovacao_peca",false);
		form.setEnabled("refacao",false);
		form.setEnabled("derivacao",false);
		form.setEnabled("txt_derivacao",false);
	}

	if(atv != 25)
	{
		form.setEnabled("aprovacao_derivacao",false);
		form.setEnabled("derivacao_refacao",false);
	}
}