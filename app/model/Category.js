Ext.define('backoffice.model.Category', {
    extend: 'Ext.data.Model',
    alias : 'modelCategory',
    fields: [
        { name : "idcategory", type : 'int'},
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
