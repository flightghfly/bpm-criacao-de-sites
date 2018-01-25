function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
    var dataset = DatasetBuilder.newDataset();
    
    var score        = constraints[0].initialValue;
    var possui_midia = constraints[1].initialValue;
    
    dataset.addColumn("tamanho");
    
    if(possui_midia)
    {
    	if(score >= 0 && score <= 0.7)
    		dataset.addRow(new Array("GB 1"));
    	else if(score >= 0.8 && score <= 1.3)
    		dataset.addRow(new Array("GB 2"));
    	else if(score >= 1.4 && score <= 1.7)
    		dataset.addRow(new Array("GB 3"));
    	else if(score >= 1.8 && score <= 3.2)
    		dataset.addRow(new Array("SMB"));
    	else if(score >= 3.3 && score <= 5)
    		dataset.addRow(new Array("CORP"));
    }
     
    return dataset;
    
}function onMobileSync(user) {

}