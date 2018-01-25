function beforeTaskSave(colleagueId,nextSequenceId,userList){
    var atv      = getValue("WKNumState");

    if (atv == 4)
    {
        var anexos   = hAPI.listAttachments();
        var temAnexo = false;

        if (anexos.size() > 0) {
            temAnexo = true;
        }

        if (!temAnexo) {
            throw "Por favor, anexe os conteúdos do cliente continuar o processo!";
        }
    }
}