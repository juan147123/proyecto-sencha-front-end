Ext.define('backoffice.model.Discount', {
    extend: 'Ext.data.Model',
    alias : 'modelDiscount',
    fields: [
        { name : "iddiscount", type : 'int'},
        { name : "description", type : 'string'},
        { name : "value", type : 'float'},
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
