Ext.define('backoffice.model.EstadoServicio', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idEstadoServicio" , type : "int"},
        { name: "codigo", type : "string"},
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