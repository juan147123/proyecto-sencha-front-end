Ext.define('backoffice.model.Brand', {
    extend: 'Ext.data.Model',
    alias : 'modelBrand',
    fields: [
        { name : "idbrand", type : 'int'},
        { name : "description", type : 'string'},
        { name : "enable", type : 'int'},
    ]
});
