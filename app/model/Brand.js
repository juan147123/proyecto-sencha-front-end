Ext.define('backoffice.model.Brand', {
    extend: 'Ext.data.Model',
    alias : 'modelBrand',
    fields: [
        { name : "idbrand", type : 'int'},
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
