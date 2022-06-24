Ext.define('backoffice.store.tmp.ReplacementDetail', {
    extend: 'Ext.data.Store',
    storeId : 'stReplacementDetail',
    fields: [
        { name: "idproduct", type : "int"},
        { name: "description", type : "string"},
        { name: "stockmin", type : "int"},
        { name: "stockactual", type : "int"},
        { name: "request", type : "int"}
    ],
    proxy: { 
        type: 'memory' 
    }
});
