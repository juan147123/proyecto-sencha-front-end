Ext.define('backoffice.store.Supplier', {
    extend  : 'Ext.data.Store',
    storeId : 'stSupplier',
    model   : 'backoffice.model.Supplier',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'supplier',
        headers: {
            'Content-Type': "application/json" ,
            //'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'count'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});