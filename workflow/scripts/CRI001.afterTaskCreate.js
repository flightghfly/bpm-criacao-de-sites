function afterTaskCreate(colleagueId){
	
     var atv = getValue('WKCurrentState');
     var numeroDaSolicitacao   = getValue('WKNumProces');
     var threadDaSolicitacao   = 0; // Normalmente 0, quando não for atividade paralela
     var responsavelPelaTarefa = colleagueId;

     // Cria a data no Javascript
     var dataDoPrazo = new Date();

     var prazoSegundos = Math.round((dataDoPrazo.getTime() % 86400000) / 1000) - (3600*2);

     //aprovação urgência
     if(atv == 38)
     {
          /*
          * Prazo para aprovação da urgência GM/SMB: 2h
          ----------------------------------------------- */
          var prazo = 2;

          //calcula o prazo baseado na configuração do Fluig
          var obj = hAPI.calculateDeadLineHours(dataDoPrazo, prazoSegundos, prazo, "Default");

          var dt = obj[0];
          var segundos = obj[1];


          // Altera o prazo de conclusão
          hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
     }


     //Criação ou derivação
     if(atv == 37 || atv == 23)
     {

          var division     = hAPI.getCardValue("division");
          var urgencia     = hAPI.getCardValue("urgencia");
          var apr_urgencia = hAPI.getCardValue("aprovacao_urgencia");
          var tipo_peca    = hAPI.getCardValue("tipo_peca");

          var prazo;

          //se for etapa "criação de mídia" e tipo de job é CANVAS, o horário foi definido pelo coordenador
          if(atv == 37 && tipo_peca == "CANVAS")
          {
               var dataPrevista = (hAPI.getCardValue("data_prazo_canvas")).split('-');
               var horaPrevista = (hAPI.getCardValue("hora_canvas")).split(':');

               var dia = dataPrevista[2];
               var mes = parseInt(dataPrevista[1]) - 1;
               var ano = dataPrevista[0];

               var obj_time = new Date(ano,mes,dia,horaPrevista[0],horaPrevista[1]);

               var h = obj_time.getHours();
               var m = obj_time.getMinutes();

             //transforma hora e minuto para segundos.
             var segundos = ((h*3600)+(m*60));

             // Cria a data no Javascript
             var dt = new Date();
             dt.setDate(dia);
             dt.setMonth(mes);
             dt.setFullYear(ano);
          }
          else
          {

               if(urgencia == "SIM" && apr_urgencia == "SIM")
               {
                    if(division == "CORP")
                         prazo = 2;
                    else if(division == "SMB")
                         prazo = 3;
                    else
                         prazo = 4;
               }
               else
               {
                    if(division == "CORP")
                         prazo = 16;
                    else if(division == "SMB")
                         prazo = 24;
                    else
                         prazo = 32;
               }

               //calcula o prazo baseado na configuração do Fluig
               var obj = hAPI.calculateDeadLineHours(dataDoPrazo, prazoSegundos, prazo, "Default");

               var dt = obj[0];
               var segundos = obj[1];
          }


          // Altera o prazo de conclusão
          hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
     }

     //Refação ou refação da derivação
     if(atv == 18 || atv == 29)
     {

          var division = hAPI.getCardValue("division");
          var urgencia = hAPI.getCardValue("urgencia");
          var prazo;

          if(urgencia == "SIM" && apr_urgencia == "SIM")
          {
               if(division == "CORP")
                    prazo = 4;
               else if(division == "SMB")
                    prazo = 6;
               else
                    prazo = 8; 
          }
          else
          {
               if(division == "CORP")
                    prazo = 8;
               else if(division == "SMB")
                    prazo = 12;
               else
                    prazo = 16;
          }

          //calcula o prazo baseado na configuração do Fluig
          var obj = hAPI.calculateDeadLineHours(dataDoPrazo, prazoSegundos, prazo, "Default");

          var dt = obj[0];
          var segundos = obj[1];


          // Altera o prazo de conclusão
          hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dt, segundos);
     }
}