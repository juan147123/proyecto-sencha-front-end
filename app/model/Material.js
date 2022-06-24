Ext.define('backoffice.model.Material', {
    extend: 'Ext.data.Model',
    alias : 'modelMaterial',
    fields: [
        { name : "idmaterial", type : 'int'},
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
