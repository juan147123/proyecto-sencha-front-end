Ext.define('backoffice.model.TypeTax', {
    extend: 'Ext.data.Model',
    alias : 'modelTypeTax',
    fields: [
        { name : "idtype_tax", type : 'int'},
        { name : "description", type : 'string'},
        { name : "status", type : 'float'}
       
    ]
});
