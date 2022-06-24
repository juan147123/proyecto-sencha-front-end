Ext.define('backoffice.model.ProductxTreatment', {
    extend: 'Ext.data.Model',
    alias : 'modelProductxTreatment',
    fields: [
        
        { name : "idproductxtreatment", type :'int'},
        { name : "idproduct", type :'int'},
        { name : "idtreatment", type :'int'},
        { name : "treatment", type :'string'}, 
        { name : "enable", type :'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
       
    ]
});
