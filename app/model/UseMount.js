Ext.define('backoffice.model.UseMount', {
    extend: 'Ext.data.Model',
    alias : 'modelUseMount',
    fields: [
        { name : "iduse_mount", type : 'int'},
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