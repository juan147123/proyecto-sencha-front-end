Ext.define('backoffice.model.DocumentSales', {
    extend: 'Ext.data.Model',
    alias : 'modelDocumentSales',
    fields: [
        { name : "iddocument_sales", type : "int"},
        { name : "code_sunat", type : "string"},
        { name : "description", type : "string"}
    ]
});


