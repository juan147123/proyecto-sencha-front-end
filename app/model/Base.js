Ext.define('backoffice.model.Base', {
    extend: 'Ext.data.Model',
    alias : 'modelBase',
    fields: [
        { name : "idbase", type : 'int'},
        { name : "description", type : 'string'},
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
