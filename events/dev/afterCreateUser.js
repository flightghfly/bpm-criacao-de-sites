function afterCreateUser(user) {
	/*
	// Instância um cliente da API pública do Fluig. O usuário aplicativo utilizado
	// precisa ser um administrador do Fluig
	var consumer = oauthUtil.getNewAPIConsumer(
			"e3fe3d72-bfcc-4552-8c9b-93c66531dab9", 
			"6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d",
			"11a419dd-0c8a-4388-bd32-d66319bd750b",
			"fd2b53a4-b43d-4118-9725-68abaa1b41a9ee584784-73b2-454b-942f-5e07ad114234");

	// Adiciona o usuário criado na comunidade RH através da utilização do método 
	// addParticipants do serviço de comunidades da API Pública
	var postJson = '{"communityAlias": "RH", "userAliases": ["' + user.getLogin() + '"]}';
	consumer.post("/public/social/community/addParticipants", postJson);
	*/
	

	//- Envio de e-mail boas vindas para novo colaborador

	// INFO global 
	var server = "http://flight.ghfly.com:80";
	
	var parametros    = new java.util.HashMap();
	var destinatarios = new java.util.ArrayList();

	var nome  = user.getFirstName();
	var login = user.getEmail();
	var senha = user.getPassword();

	parametros.put("SERVER_URL", server);

	parametros.put("subject", "E-mail de boas vindas");
	parametros.put("NOME",nome);
	parametros.put("LOGIN",login);
	parametros.put("SENHA","TempGhFly1A@");

	destinatarios.add(login);
	destinatarios.add("gabriel.silva@ghfly.com");
	destinatarios.add("karimme.santos@ghfly.com");

	notifier.notify("007", "NOVO_USUARIO", parametros, destinatarios, "text/html");
	
}