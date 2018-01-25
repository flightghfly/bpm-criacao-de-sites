function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
    var dataset = DatasetBuilder.newDataset();
    
    //Cria as colunas
    dataset.addColumn("geonameId");
    dataset.addColumn("countryName");
    dataset.addColumn("countryCode");

    //Cria os registros
    dataset.addRow(new Array("3469034", "Brasil", "BR"));
    dataset.addRow(new Array("6252001", "EUA", "US"));
    dataset.addRow(new Array("2921044", "Alemanha", "DE"));
    dataset.addRow(new Array("3865483", "Argentina", "AR"));
    dataset.addRow(new Array("2077456", "Austrália", "AU"));
    dataset.addRow(new Array("6251999", "Canadá", "CA"));
    dataset.addRow(new Array("3895114", "Chile", "CL"));
    dataset.addRow(new Array("1814991", "China", "CN"));
    dataset.addRow(new Array("3686110", "Colômbia", "CO"));
    dataset.addRow(new Array("2623032", "Dinamarca", "DK"));    
    dataset.addRow(new Array("2510769", "Espanha", "ES"));
    dataset.addRow(new Array("2638360", "Escócia", "GB"));
    dataset.addRow(new Array("3658394", "Equador", "EC"));
    dataset.addRow(new Array("3017382", "França", "FR"));
    dataset.addRow(new Array("2750405", "Holanda", "NL"));
    dataset.addRow(new Array("6269131", "Inglaterra", "GB"));
    dataset.addRow(new Array("2641364", "Irlanda", "GB"));
    dataset.addRow(new Array("3175395", "Itália", "IT"));
    dataset.addRow(new Array("1861060", "Japão", "JP"));
    dataset.addRow(new Array("3996063", "México", "MX"));
    dataset.addRow(new Array("3437598", "Paraguai", "PY"));
    dataset.addRow(new Array("3932488", "Peru", "PE"));
    dataset.addRow(new Array("2264397", "Portugal", "PT"));
    dataset.addRow(new Array("2017370", "Rússia", "RU"));
    dataset.addRow(new Array("3439705", "Uruguai", "UY"));
    
    return dataset;

}function onMobileSync(user) {

}