function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("departamento");

    dataset.addRow(new Array("Criação"));
    dataset.addRow(new Array("Mídia"));
    dataset.addRow(new Array("Financeiro"));
    dataset.addRow(new Array("RH"));
    dataset.addRow(new Array("Desenvolvimento"));
    dataset.addRow(new Array("Growth Hacking"));
    dataset.addRow(new Array("Customer Success"));
    dataset.addRow(new Array("New Business"));
     
    return dataset;
    
}function onMobileSync(user) {

}