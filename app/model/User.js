Ext.define('backoffice.model.User', {
    extend: 'Ext.data.Model',
    alias : 'modelUser',
    fields: [
        { name : "id", type : 'int'},
        { name : "name", type : 'string'},
        { name : "email", type : 'string'},
        { name : "password", type : 'string'},
        { name : "idstore", type : 'int'},
        { name : "enable", type : 'int'},
        { name : "idemployee", type : 'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
    ]
});