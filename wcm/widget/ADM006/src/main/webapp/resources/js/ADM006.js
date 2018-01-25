var MyWidget = SuperWidget.extend({
    //variáveis da widget
	myTable: null,
	mydata: [],
	tableData: null,


    //método iniciado quando a widget é carregada
    init: function() {
    	
    	this.loadTable();
    	
    },
    
    loadTable: function() {
        var that = this;
        var datasetReturned = DatasetFactory.getDataset("ds_empresas", null, null, null);
        if (datasetReturned != null && datasetReturned.values != null && datasetReturned.values.length > 0) {
            var records = datasetReturned.values;
            for ( var index in records) {
                var record = records[index];
                that.mydata.push({
                    id: record.userTenantId,
                    empresa: record.empresa,
                    estado: record.estado_txt,
                    cidade: record.cidade_txt
                });
            }
        }
        that.myTable = FLUIGC.datatable('#idtable' + "_" + that.instanceId, {
            dataRequest: that.mydata,
            renderContent: ['id', 'empresa', 'estado', 'cidade'],
            header: [{
                'title': 'Code',
                'dataorder': 'empresa',
                'size': 'col-md-4'
            }, {
                'title': 'Empresa',
                'standard': true,
                'size': 'col-md-4'
            }, {
                'title': 'UF',
                'size': 'col-md-4',
                'dataorder': 'ASC'
            }, {
                'title': 'Cidade',
                'size': 'col-md-4',
                'dataorder': 'ASC'
            }],
            search: {
                enabled: false,
            },
            scroll: {
                target: ".target",
                enabled: true
            },
            actions: {
                enabled: false,
            },
            navButtons: {
                enabled: false,
            },
            draggable: {
                enabled: false
            },
        }, function(err, data) {
            if (err) {
                FLUIGC.toast({
                    message: err,
                    type: 'danger'
                });
            }
        });
        that.myTable.on('fluig.datatable.loadcomplete', function() {
            if (!that.tableData) {
                that.tableData = that.myTable.getData();
            }
        });
    },    
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

