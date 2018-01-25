//cria um zoom baseado em um dataset
function zoomDataSet(titulo, dataset, campos, resultFields, type) {
	var _w = window.innerWidth;
	var _h = window.innerHeight;
	var pos_left = (window.innerWidth-600)/2;
	var pos_top  = (window.innerHeight-400)/2;
	window.open("/webdesk/zoom.jsp?datasetId="+dataset+"&dataFields="+campos+"&resultFields="+resultFields+"&filterValues=metadata_active,true&type="+type+"&title="+titulo, "zoom" , "status , scrollbars=no ,width=600, height=400 , top="+pos_top+" , left="+pos_left);
}
/*
 * Lista empresas
 * Dataset de formulário: ds_empresas
 */
function zoomEmpresa(componente) {
	zoomDataSet('Empresa', 'ds_empresas', 'empresa,empresa', 'empresa', componente);
}
//seta empresa selecionada no zoom
function setSelectedZoomItem(selectedItem){
	document.getElementById("empresa-field").value = selectedItem.empresa;
}