function beforeTaskSave(colleagueId,nextSequenceId,userList){
	
    var atv = getValue("WKNumState");

    log.info("######## ATIVIDADE");
    log.info(atv);

    if (atv == 0 || atv == 1) 
    {
    	var guide = hAPI.getCardValue("guide_marca");
    	if(guide == "ANEXO")
    	{
	        var anexos   = hAPI.listAttachments();
	        var temAnexo = false;
	        
	        if (anexos.size() > 0)
	            temAnexo = true;
	
	        if (!temAnexo)
	            throw "Por favor, anexe o guide de marca!";
    	}
    }
    
    if(atv == 37 || atv == 18 || atv == 23 || atv == 29)
    {
        var anexos   = hAPI.listAttachments();
        var temAnexo = false;
        
        if (anexos.size() > 0)
            temAnexo = true;

        if (!temAnexo)
            throw "Por favor, anexe a imagem!";    	
    }

    if(atv == 42)
    {
        var hora = (hAPI.getCardValue("hora_canvas")).split(":");

        log.info("########### HORA");
        log.info(hora[0]);
        log.info("########### HORA PARSE INT");
        log.info(parseInt(hora[0]));

        if(parseInt(hora[0]) > 17 || parseInt(hora[0]) < 9)
            throw "O Horário previsto deve ser das 09:00 às 18:00";
    }
	
}