function campos_tipo_peca(midia,tipo_peca)
{
	if( (midia == "FACEBOOK" || midia == "INSTAGRAM" || midia == "LINKEDIN") && (tipo_peca == "FEED" ||tipo_peca == "CANVAS" || tipo_peca == "STORIES") )
		$("#texto_orientacao").show();
	else if( (midia == "FACEBOOK" || midia == "INSTAGRAM") && (tipo_peca == "CARROSSEL" || tipo_peca == "SLIDE SHOW") )
		$("#cards").show();
}

function limpa_carrossel(id)
{
	$(id+' tbody tr').not(':first').each(function(count,tr){ 
		fnWdkRemoveChild($(this).find('i')[0]);
	});
}
function setSelectedZoomItem(selectedItem) {

	console.log(selectedItem);
	
	document.getElementById("cnpj").value = selectedItem.CNPJ;
	document.getElementById("division").value = selectedItem.DIVISION;
}