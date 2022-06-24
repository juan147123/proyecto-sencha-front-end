Ext.define('backoffice.model.MethodPay', {
    extend: 'Ext.data.Model',
    alias : 'modelMethodPay',
    fields: [
        { name: "idmethodpay" , type : "int"},
        { name: "description", type : "string"},
        { name: "enable", type : "int"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
     ]
});