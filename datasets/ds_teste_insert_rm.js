function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	/*
	 * Insere dados no RM
	 ------------------------------------*/

    var NOME_DATASERVER = "FinCFODataBR";  
  
    /* Prepararação das variaveis */  
      //usuário e senha do aplicativo RM. O mesmo utilizado para logar no sistema e que tenha permissão de   
      //acesso ao cadastro que deseja utilizar  
      //var usuario = "gabriel.silva";  
      //var senha   = "G@890gs*1";  
      var usuario = "mestre";
      var senha   = "totvs";
      //importante passar no contexto o mesmo código de usuário usado para logar no webservice  
      var context = "CodUsuario=mestre;CodSistema=F;CodColigada=1"  
    /* Fim Prepararação das variaveis */  
    

    try{  

    	log.info("############ INICIO INTEGRAÇÃO RM");
  
        // carrega o webservice...  
        var authService = getWebService(usuario, senha);  
        // define o contexto...  
        var context = "CodUsuario=mestre;CodSistema=F;CodColigada=1"  
        // faz a leitura...  
        //var text = new String(authService.readRecord(NOME_DATASERVER, primaryKey, context));  
  
        var text = GetXml();  
  
        // atualiza o valor...  
        text = replaceValue(text, "NOMEFANTASIA" , "FACEBOOK");   
        text = replaceValue(text, "NOME" , "Facebook INC");
        text = replaceValue(text, "CGCCFO" , "13.347.016/0001-17");
        text = replaceValue(text, "RUA" , "R Leopoldo Couto De Magalhaes Junior");   
        text = replaceValue(text, "NUMERO" , "700");   
        text = replaceValue(text, "COMPLEMENTO" , "andar 1");   
        text = replaceValue(text, "BAIRRO" , "Itaim");   
        text = replaceValue(text, "CIDADE" , "São Paulo");   
        text = replaceValue(text, "CODETD" , "SP"); 
        text = replaceValue(text, "CEP" , "04542-000");   
        text = replaceValue(text, "TELEFONE" , "(11)3333-3333");  
        text = replaceValue(text, "EMAIL" , "faceook@facebook.com");   
        text = replaceValue(text, "CONTATO" , "Gabriel");
        text = replaceValue(text, "ATIVO" , "1");
        text = replaceValue(text, "PAIS" , "Brasil");
        text = replaceValue(text, "IDPAIS" , "1");
        text = replaceValue(text, "PAGREC" , "3");
  
        var result = new String(authService.saveRecord(NOME_DATASERVER, text, context));   
          
    // se retornou a chave, salvou ok...  
        checkIsPK(result, 2);  
    }  
    catch (e)   
    {  
        if (e == null)  e = "Erro desconhecido!";  
        var mensagemErro = "Ocorreu um erro ao salvar dados no RM: " + e;  
        throw mensagemErro;  
    }		

}function onMobileSync(user) {

}
function GetXml()  
{  
    return "<FinCFOBR >" +   
"  <FCFO>" +   
"    <CODEXTERNO>C00427</CODEXTERNO>" +   
"    <CODCOLIGADA>-1</CODCOLIGADA>" +   
"    <CODCFO>C00427</CODCFO>" +   
"    <CODLOJA>01</CODLOJA>" +   
"    <NOMEFANTASIA>FRANCILEIDE COPQUE MARQUES</NOMEFANTASIA>" +   
"    <NOME>FRANCILEIDE COPQUE MARQUES</NOME>" +   
"    <CGCCFO>568.664.295-87</CGCCFO>" +   
"    <PAGREC>1</PAGREC>" +   
"    <ATIVO>1</ATIVO>" +   
"    <LIMITECREDITO>0.00</LIMITECREDITO>" +   
"    <VALORULTIMOLAN>279.67</VALORULTIMOLAN>" +   
"    <DATAULTALTERACAO>2017-04-26T00:00:00</DATAULTALTERACAO>" +   
"    <DATACRIACAO>2004-09-14T00:00:00</DATACRIACAO>" +   
"    <DATAULTMOVIMENTO>2004-11-05T00:00:00</DATAULTMOVIMENTO>" +     
"    <VALOROP1>0.00</VALOROP1>" +   
"    <VALOROP2>0.00</VALOROP2>" +   
"    <VALOROP3>0.00</VALOROP3>" +   
"    <PATRIMONIO>0.00</PATRIMONIO>" +   
"    <NUMFUNCIONARIOS>0</NUMFUNCIONARIOS>" +   
"    <PESSOAFISOUJUR>J</PESSOAFISOUJUR>" +   
"    <ULTIMODOCUMENTO>00003545</ULTIMODOCUMENTO>" +   
"    <CONTRIBUINTE>1</CONTRIBUINTE>" +   
"    <CFOIMOB>0</CFOIMOB>" +   
"    <VALFRETE>0.0000</VALFRETE>" +   
"    <TPTOMADOR>0</TPTOMADOR>" +   
"    <CONTRIBUINTEISS>0</CONTRIBUINTEISS>" +   
"    <NUMDEPENDENTES>0</NUMDEPENDENTES>" +   
"    <USUARIOALTERACAO>mestre</USUARIOALTERACAO>" +   
"    <ORGAOPUBLICO>0</ORGAOPUBLICO>" +   
"    <IDCFO>2534</IDCFO>" +   
"    <VROUTRASDEDUCOESIRRF>0.0000</VROUTRASDEDUCOESIRRF>" +   
"    <RAMOATIV>0</RAMOATIV>" +   
"    <OPTANTEPELOSIMPLES>0</OPTANTEPELOSIMPLES>" +   
"    <REGIMEISS>N</REGIMEISS>" +   
"    <RETENCAOISS>0</RETENCAOISS>" +   
"    <USUARIOCRIACAO>Glayson</USUARIOCRIACAO>" +   
"    <PORTE>0</PORTE>" +   
"    <TIPOOPCOMBUSTIVEL>3</TIPOOPCOMBUSTIVEL>" +   
"    <NUMDIASATRASO>0</NUMDIASATRASO>" +   
"    <NACIONALIDADE>0</NACIONALIDADE>" +   
"    <CALCULAAVP>0</CALCULAAVP>" +   
"    <RECCREATEDBY>mestre</RECCREATEDBY>" +   
"    <RECCREATEDON>2017-04-26T16:27:19</RECCREATEDON>" +   
"    <RECMODIFIEDBY>mestre</RECMODIFIEDBY>" +   
"    <RECMODIFIEDON>2017-04-26T16:27:19</RECMODIFIEDON>" +   
"    <TIPORENDIMENTO>000</TIPORENDIMENTO>" +   
"    <CODETD>SP</CODETD>" +   
"    <FORMATRIBUTACAO>00</FORMATRIBUTACAO>" +   
"    <SITUACAONIF>0</SITUACAONIF>" +   
"    <TPINSCCONTRATANTE>0</TPINSCCONTRATANTE>" +   
"    <TPINSCPROPRIETARIO>0</TPINSCPROPRIETARIO>" +   
"    <ISTOTVSMESSAGE>0</ISTOTVSMESSAGE>" +   
"    <INOVAR_AUTO>0</INOVAR_AUTO>" +   
"    <APLICFORMULA>F</APLICFORMULA>" +   
"    <CODCFOCOLINTEGRACAO>0</CODCFOCOLINTEGRACAO>" + 
"	 <CEP></CEP>" + 
"	 <RUA></RUA>" +   
"	 <BAIRRO></BAIRRO>" +   
"	 <NUMERO></NUMERO>" +   
"	 <CIDADE></CIDADE>" +  
"	 <COMPLEMENTO></COMPLEMENTO>" +  
"	 <TELEFONE></TELEFONE>" +
"	 <EMAIL></EMAIL>" +      
"  </FCFO>" +   
"  <FCFOCOMPL>" +   
"    <CODCOLIGADA>1</CODCOLIGADA>" +   
"    <CODCFO>C00427</CODCFO>" +   
"    <VENDEDOR>Lélio</VENDEDOR>" +   
"  </FCFOCOMPL>" +   
"</FinCFOBR>";  
      
}  
function checkIsPK(result, qtd){
var lines = result.split('\r');

if(lines.length == 1){
	var pk = result.split(';');
	if(pk.length == qtd)
		return;
}
	throw result;

}

function ChekExist(result)
{
 var lines = result.split('\r');
if(lines.length > 1)
	return true
else
	return false;
}


function replaceValue(text, columnName, newValue){


if ((newValue != null) && (newValue.trim() != ""))
{
	var regex = new RegExp("<" + columnName + ">(.*?)<\\/" + columnName + ">", "g");
	var replaceText = "<" + columnName + ">" + newValue + "</" + columnName + ">";
	
	return text.replace(regex, replaceText);
}
else
	return text;
}


function isEmpty(str) {
return (!str || 0 === str.length);
}

/**'
* A API de autenticação da Totvs baseia no "Basic access authentication" do HTTP.
* Código Java para autenticação 
* Programa responsável por integrar com os Webservices do RM 
*  Exemplo dev valores para os parâmetros 
*		@param string Usuario = "mestre";
*		@param string Senha = "totvs";
*/

function getWebService(Usuario, Senha){

var Nome_Servico = "WSDATASERVER";
var Caminho_Servico = "com.totvs.WsDataServer";

var dataServerService = ServiceManager.getServiceInstance(Nome_Servico);
if(dataServerService == null){
	throw "Servico nao encontrado: " + Nome_Servico;
}

var serviceLocator = dataServerService.instantiate(Caminho_Servico);
if(serviceLocator == null){
	throw "Instancia do servico nao encontrada: " + Nome_Servico + " - " + Caminho_Servico;
}

var service = serviceLocator.getRMIwsDataServer();	
if(service == null){
	throw "Instancia do dataserver do invalida: " + Nome_Servico + " - " + Caminho_Servico;
}

var serviceHelper = dataServerService.getBean();
if(serviceHelper == null){
	throw "Instancia do service helper invalida: " + Nome_Servico + " - " + Caminho_Servico;
}

var authService = serviceHelper.getBasicAuthenticatedClient(service, "com.totvs.IwsDataServer", Usuario, Senha);	  
if(serviceHelper == null){
	throw "Instancia do auth service invalida: " + Nome_Servico + " - " + Caminho_Servico;
}

return authService;
}


function dcReadView(dataservername, context, usuario, senha, filtro)
{	 
  // carrega o webservice...
  var authService = getWebService(usuario, senha);
  
  // lê os dados da visão respeitando o filtro passado
  var viewData = new String(authService.readView(dataservername, filtro, context));

  return viewData;
}


function dcReadRecord(dataservername, context, usuario, senha, primaryKey)
{	 
  // carrega o webservice...
  var authService = getWebService(usuario, senha);

  // lê os dados do registro respeitando a pk passada
  try
  {
	var recordData = new String(authService.readRecord(dataservername, primaryKey, context));
  }
  catch (e) 
  {
	  var recordData = new String(authService.getSchema(dataservername, context));
  }
  
  return recordData;
}


function dcSaveRecord(dataservername, context, usuario, senha, xml)
{	 
  // carrega o webservice...
  var authService = getWebService(usuario, senha);

  // salva o registro de acordo com o xml passado
  var pk = new String(authService.readRecord(dataservername, xml, context));
  	  
  return pk;
}


//Transforma o conceito de constraints do Fluig para o Filtro do TBC.
function parseConstraints(constraints, filterRequired)
{
// inicializa o resultado...
var result = [];
result.context = "";

// inicializa o filtro...
var filter = "";

// varre as contraints...
for	(con in constraints) {
	var fieldName = con.getFieldName().toUpperCase();
	if (fieldName == "RMSCONTEXT")
	{
		result.context = con.getInitialValue();
		continue;
	}
	
	filter += "(";
	
	if (fieldName == "RMSFILTER")
	{
		filter += con.getInitialValue();
	}
	else
	{
		if (con.getInitialValue() == con.getFinalValue() || isEmpty(con.getFinalValue()))
		{
			filter += con.getFieldName();
			var isLike = false;
			switch(con.getConstraintType())
			{
				case ConstraintType.MUST:
					filter += " = ";
				break;
				case ConstraintType.MUST_NOT:
					filter += " = ";
				break;
				case ConstraintType.SHOULD:
					filter += " LIKE ";
					isLike = true;
				break;
				case ConstraintType.SHOULD_NOT:
					filter += " NOT LIKE ";
					isLike = true;
				break;
			}
			filter += getFormattedValue(con.getInitialValue(), isLike);
		}
		else
		{
			filter += con.getFieldName();
			filter += " BETWEEN ";
			filter += getFormattedValue(con.getInitialValue(), false);
			filter += " AND ";
			filter += getFormattedValue(con.getFinalValue(), false);
		}
	}
	
	filter += ") AND ";
}

if (filter.length == 0)
{
	if(filterRequired){
	  filter = "1=1";
	}
	else{
  	  filter = "1=1";
	}
}
else
	filter = filter.substring(0, filter.length-5);

// guarda o filtro...
result.filter = filter;

// retorna o resultado...
return result;
}

function isEmpty(str) {
return (!str || 0 === str.length);
}

function getFormattedValue(value, isLike){
if(isLike){
  return "'%" + value + "%'";
}
else{
  return "'" + value + "'";
}
}

function getXMLFromString(xmlString) {
	var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
	var parser = factory.newDocumentBuilder();
	var is = new org.xml.sax.InputSource();
	is.setCharacterStream(new java.io.StringReader(xmlString));
	return parser.parse(is);
}