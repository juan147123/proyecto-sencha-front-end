Ext.define('backoffice.model.TipoDocumento', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idTipoDocumento" , type : "int"},
        { name: "nombre", type : "string"},
        { name: "enable", type : "int"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
        
        
     ]
});
