Ext.define('backoffice.model.Spent', {
    extend: 'Ext.data.Model',
    alias : 'modelSpent',
    fields: [
        { name : "idspent", type : 'int'},
        { name : "date", type : 'date'},
        { name : "description", type : 'string'},
        { name : "amount", type : 'float'},
    ]
});
