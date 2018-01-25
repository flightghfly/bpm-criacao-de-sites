function beforeSendData(customField, customFact) {

    customField[0]  = hAPI.getCardValue("empresa");
    customField[1]  = hAPI.getCardValue("division");
    customField[2]  = hAPI.getCardValue("guide_marca");
    customField[3]  = hAPI.getCardValue("midia");
    customField[4]  = hAPI.getCardValue("tipo_peca");
    customField[5]  = hAPI.getCardValue("urgencia");
    customField[6]  = hAPI.getCardValue("aprovacao_urgencia");
    customField[7]  = hAPI.getCardValue("aprovador_urgencia");
    customField[8]  = hAPI.getCardValue("derivacao");
    customField[9]  = hAPI.getCardValue("avaliado_criacao_nome");
    customField[10]  = hAPI.getCardValue("avaliador_criacao_nome");
    customField[11] = hAPI.getCardValue("avaliado_midia_nome");
    customField[12] = hAPI.getCardValue("avaliador_midia_nome");
    
    customFact[0] = java.lang.Double.parseDouble(hAPI.getCardValue("avl_score_briefing"));
    customFact[1] = java.lang.Double.parseDouble(hAPI.getCardValue("avl_score_criacao"));
    customFact[2] = java.lang.Double.parseDouble(hAPI.getCardValue("total_refacao_criacao"));
    customFact[3] = java.lang.Double.parseDouble(hAPI.getCardValue("total_refacao_deriv"));    
    
}
