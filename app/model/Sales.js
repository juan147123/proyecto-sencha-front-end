Ext.define('backoffice.model.Sales', {
    extend: 'Ext.data.Model',
    alias : 'modelSales',
    fields: [
        { name : "idsales", type : 'int'},
        { name : "idstore", type : 'int'},
        { name : "idcorrelative", type : 'int'},
        { name : "type_document", type : 'int'},
        { name : "number_document", type : 'string'},
        { name : "businessname", type : 'string'},
        { name : "address", type : 'string'},
        { name : "phone", type : 'string'},
        { name : "date_issue", type : 'date'},
        { name : "delivery_date", type : 'string'},
        { name : "delivery_time", type : 'string'},
        { name : "delivery_type", type : 'string'},
        { name : "payment", type : 'string'},
        { name : "coin", type : 'string'},
        { name : "exchange_type", type : 'string'},
        { name : "idemployee", type : 'int'},
        { name : "subtotal", type : 'string'},
        { name : "igv", type : 'string'},
        { name : "total", type : 'string'},
        { name : "delanto", type : 'string'},
        { name : "saldo", type : 'string'},
        { name : "notes", type : 'string'},
        { name : "docserie", type : 'string'},
        { name : "enable", type : 'int'},
        { name : "datos" , type : 'string',convert:function(value, record){
            let persona ="";
            if(record.get('name')!="" && record.get('lastname')!=""){
                return persona.concat(record.get('name')," ",record.get('lastname'));
            }else{
                return persona.concat(record.get('businessname'));
            }
            
        }}, 
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'Activo';
            }else{
                return 'Anulado';
            }
            
        }},  
        { name : "estadopago" , type : 'string',convert:function(value, record){
            if (record.get('saldo') <= 0) {
                return 'Pagado';
            }else{
                return 'Por pagar';
            }
            
        }}, 
    ]
});
