Ext.define('backoffice.model.TypeContact', {
    extend: 'Ext.data.Model',
    alias : 'modelTypeContact',
    fields: [
        { name: "idtype_contact", type :'int' },
        { name: "description", type :'string' },
        { name : "enable", type : 'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
    ]
});
