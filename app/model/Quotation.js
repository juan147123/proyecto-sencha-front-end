Ext.define('backoffice.model.Quotation', {
    extend: 'Ext.data.Model',
    alias : 'modelQuotation',
    fields: [
        { name : "idquotation", type : 'int'},
        { name : "idstore", type : 'int'},
        { name : "idtype_document", type : 'int'},
        { name : "iddocument_sales", type : 'int'},
        { name : "number_document", type : 'string'},
        { name : "businessname", type : 'string'},
        { name : "address", type : 'string'},
        { name : "phone", type : 'string'},
        { name : "date_issue", type : 'string'},
        { name : "delivery_date", type : 'string'},
        { name : "delivery_time", type : 'string'},
        { name : "idmethodpay", type : 'string'},
        { name : "idcoin", type : 'string'},
        { name : "exchange_type", type : 'string'},
        { name : "idemployee", type : 'int'},
        { name : "subtotal", type : 'string'},
        { name : "igv", type : 'string'},
        { name : "total", type : 'string'},
        { name : "delanto", type : 'string'},
        { name : "saldo", type : 'string'},
        { name : "notes", type : 'string'},
        { name : "document", type : 'string'},
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
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
    ]
});
