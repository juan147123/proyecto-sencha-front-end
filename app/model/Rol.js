Ext.define('backoffice.model.Rol', {
    extend: 'Ext.data.Model',
    alias : 'modelRol',
    fields: [
        { name : "idrol", type : "int"},
        { name : "descripcion", type : "string"},
        { name : "enable", type : "int"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }}, 
    ]
});


