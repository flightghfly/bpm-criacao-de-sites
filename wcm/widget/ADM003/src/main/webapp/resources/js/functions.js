function strFnMesEvento(mes)
{
	var strMes = "";
	switch(mes)
	{
		case 1: strMes = "JAN"; break;
		case 2: strMes = "FEV"; break;
		case 3: strMes = "MAR"; break;
		case 4: strMes = "ABR"; break;
		case 5: strMes = "MAI"; break;
		case 6: strMes = "JUN"; break;
		case 7: strMes = "JUL"; break;
		case 8: strMes = "AGO"; break;
		case 9: strMes = "SET"; break;
		case 10: strMes = "OUT"; break;
		case 11: strMes = "NOV"; break;
		case 12: strMes = "DEZ"; break;			
	}
	return strMes;
}

function ultimoDiaMes(data)
{
	return (new Date(data.getFullYear(), data.getMonth() + 1, 0) ).getDate();	
}
function _constructsoap(soapfields)
{
	let _construct = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">';
			_construct += '<soapenv:Header/>';
			_construct += '<soapenv:Body>';
				_construct += '<ws:create>';
					_construct += '<companyId></companyId><username></username><password></password>';
					_construct += '<card>';
						_construct += '<item>';
							
							for(i=0;i<soapfields.length;i++)
								_construct += setSoapField(soapfields[i].field,soapfields[i].fieldname);

							_construct += '<parentDocumentId></parentDocumentId>';
						_construct += '</item>';
					_construct += '</card>';
				_construct += '</ws:create>';
			_construct += '</soapenv:Body>';
		_construct += '</soapenv:Envelope>';

	return _construct;
}
function setSoapField(field,fieldname)
{
	let cardData = '<cardData>';
			cardData += '<field>'+field+'</field>';
			cardData += '<value name="'+fieldname+'"></value>';
		cardData += '</cardData>';

	return cardData;
}