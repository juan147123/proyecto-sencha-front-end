Ext.define('backoffice.model.EstadoConductor', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idEstadoConductor" , type : "int"},
        { name: "nombre", type : "string"},
        { name: "enable", type : "int"} ,
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
     ]
});