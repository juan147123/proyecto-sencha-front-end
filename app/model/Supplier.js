Ext.define('backoffice.model.Supplier', {
    extend: 'Ext.data.Model',
    alias : 'modelSupplier',
    fields: [
        { name : "idsupplier", type : 'int'},
        { name : "typedocument", type : 'string'},
        { name : "numberdocument", type : 'string'},
        { name : "businessname", type : 'string'},
        { name : "address", type : 'string'},
        { name : "email", type : 'string'},
        { name : "phone", type : 'string'},
        { name : "enable", type : 'int'},
    ]
});
