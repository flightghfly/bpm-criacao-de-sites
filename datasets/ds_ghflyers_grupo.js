/*
 * Função para filtrar os usuários por determinado grupo
 * Retorno:
 * 	# Nome do colaborador
 *  # Status padrão HTTP
 */
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn("nome");
	dataset.addColumn("status");
	dataset.addColumn("email");
	dataset.addColumn("matricula");
	
	//array
	var ghflyers_groupo = new Array();
	var ghflyer 		= new Array();
	var cdr 			= new Array();
	
	//int
	var i,matricula,id;
	var count = 0;
	
	//str
	var filter_grupo = constraints[0].initialValue;
	var uf_head 	 = constraints[1].initialValue;
	var nome, email;
	
	
	if(filter_grupo == "")
	{
		dataset.addRow(new Array("Nenhum grupo selecionado",400));
		return dataset;
	}
	
	//Função retorna os usuários dentro do grupo
	ghflyers_groupo = busca_ghflyers_grupo(filter_grupo);
	
	if(ghflyers_groupo.rowsCount < 1)
	{
		dataset.addRow(new Array("Nenhum usuário encontrado no grupo "+filter_grupo,404));
		return dataset;
	}
	
	for(i=0;i<ghflyers_groupo.rowsCount;i++)
	{
		ghflyer   = new Array(); //reset array
		matricula = ghflyers_groupo.getValue(i,"colleagueGroupPK.colleagueId");
		
		//Se procura coordenadores
		if(uf_head == "true")
		{
			cdr = busca_ghflyers_cdr(matricula);
			if(cdr.rowsCount > 0)
			{
				matricula = cdr.getValue(0,"workflowColleagueRolePK.colleagueId");
				ghflyer   = info_ghflyer(matricula);
			}
		}
		else
			ghflyer = info_ghflyer(matricula);
		
		if(ghflyer.rowsCount > 0)
		{
			count++;
			nome  = ghflyer.getValue(0,"colleagueName");
			email = ghflyer.getValue(0,"mail");
			id    = ghflyer.getValue(0,"colleaguePK.colleagueId");
			dataset.addRow(new Array(nome,200,email,id));
		}
	}
	
	if(count < 1)
	{
		dataset.addRow(new Array("Parece que nenhum usuário do grupo "+grupo+" está ativo", 404));
		return dataset;
	}

	return dataset;

}

/*
 * Função retorna usuários que estão dentro de determinado grupo;
 * A consulta é feita no dataset colleagueGroup;
 * Retorna um objeto com as matrículas do usuários + infos: colleagueGrupoPK.colleagueId (matrícula);
 * O filtro é o nome do grupo;
 */
function busca_ghflyers_grupo(grupo)
{
	
	var filter        = DatasetFactory.createConstraint("colleagueGroupPK.groupId", grupo, grupo, ConstraintType.MUST);
	//Oculta administrador
	var filter2       = DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", "007", "007", ConstraintType.MUST_NOT);
	var constraints   = new Array(filter,filter2);
	var datasetGrupos = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
	
	return datasetGrupos;
}
/*
 * Função busca os coordenadores do grupo;
 * A consulta é feita no dataset workflowColleagueRole;
 * Retorna um objeto com a matrícula dos coordenadores;
 */
function busca_ghflyers_cdr(matricula)
{
	/* Filtros:
	 *  # Matrícula do usuário
	 *  # Usuário ativo
	 */
	var condicao1   = DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", matricula, matricula, ConstraintType.MUST);
	// O usuário pode ter mais de um papel, portanto faz-se necessária a busca pelo papel CDR = coordenador
	var condicao2   = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", "CDR", "CDR", ConstraintType.MUST);	
	var constraints = new Array(condicao1,condicao2); // montagem dos filtros
	
	var datasetGhFlyer = DatasetFactory.getDataset("workflowColleagueRole", null, constraints, null);

	return datasetGhFlyer;
}
/*
 * Função busca info dos usuários;
 * A consulta é feita no dataset colleague;
 * Retorna um objeto com o nome do usuários + infos: colleagueName (nome);
 * O filtro é a matrícula dos usuários;
 */
function info_ghflyer(matricula)
{
	/* Filtros:
	 *  # Matrícula do usuário
	 *  # Usuário ativo
	 */
	var condicao1   = DatasetFactory.createConstraint("colleaguePK.colleagueId", matricula, matricula, ConstraintType.MUST);
	var condicao2   = DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST);	
	var constraints = new Array(condicao1,condicao2); // montagem dos filtros
	
	var datasetGhFlyer = DatasetFactory.getDataset("colleague", null, constraints, null);

	return datasetGhFlyer;
}