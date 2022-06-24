Ext.define('backoffice.model.Correlative', {
    extend: 'Ext.data.Model',
    alias : 'modelCorrelative',
    fields: [
        { name : "idcorrelative", type : "int"},
        { name : "iddocument_sales", type : "int"},
        { name : "serie", type : "string"},
        { name : "correlative", type : "string"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
    ]
});


