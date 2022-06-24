Ext.define('backoffice.model.Serie', {
    extend: 'Ext.data.Model',
    alias : 'modelSerie',
    fields: [
        { name : "idserie", type : 'int'},
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
