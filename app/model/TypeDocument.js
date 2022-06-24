Ext.define('backoffice.model.TypeDocument', {
    extend: 'Ext.data.Model',
    alias : 'modelTypeDocument',
    fields: [
        { name: "idtype_document", type :'int' },
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
