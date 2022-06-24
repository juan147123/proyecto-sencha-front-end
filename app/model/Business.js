Ext.define('backoffice.model.Business', {
    extend: 'Ext.data.Model',
    require: [
        'backoffice.model.Store'
    ],
    fields: [
       { name: "idbusiness",type : 'string'},
       { name: "name",type : 'string'},
       { name: "idtype_document",type : 'int'},
       { name: "number",type : 'string'},
       { name: "address",type : 'string'},
       { name: "fiscal_address",type : 'string'},
       { name: "email",type : 'string'},
       { name: "cell_phone",type : 'string'},
       { name: "phone1",type : 'string'},
       { name: "phone2",type : 'string'},
       { name: "webpage",type : 'string'},
       { name: "img_logo_empresa_name",type : 'string',convert:function(value, record){
        if (record.get('img_logo_empresa_name') != "" || record.get('img_logo_empresa_name') != null) {
            return record.get('img_logo_empresa_name');
        }else{
            return '';
        }
        
    }},  
       { name: "enable",type : 'int'},
    ]
});
