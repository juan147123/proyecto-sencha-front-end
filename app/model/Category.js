Ext.define('backoffice.model.Category', {
    extend: 'Ext.data.Model',
    alias : 'modelCategory',
    fields: [
        { name : "idcategory", type : 'int'},
        { name : "description", type : 'string'},
        { name : "enable", type : 'int'},
    ]
});
