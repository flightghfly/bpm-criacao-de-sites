function beforeSendData(customField, customFact) {

    customField[0] = hAPI.getCardValue("empresa");
    customField[1] = hAPI.getCardValue("tipo_site");
    customField[2] = hAPI.getCardValue("avaliado_customer_nome");
    customField[3] = hAPI.getCardValue("avaliador_customer_nome");
    customField[4] = hAPI.getCardValue("avaliado_criacao_nome");
    customField[5] = hAPI.getCardValue("avaliador_criacao_nome");
    customField[6] = hAPI.getCardValue("avaliado_dev_nome");

    customFact[0] = hAPI.getCardValue('avl_score_briefing');
    customFact[1] = hAPI.getCardValue('avl_score_criacao');
    customFact[2] = hAPI.getCardValue('avl_score_dev');
    customFact[3] = hAPI.getCardValue('total_refacao_criacao');
    customFact[4] = hAPI.getCardValue('total_refacao_dev');
}
