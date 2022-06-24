Ext.define('backoffice.store.InventoryStatus', {
    extend  : 'Ext.data.Store',
    storeId : 'stInventoryStatus',
    model   : 'backoffice.model.Store',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'inventorystatus',
        headers: {
            'Content-Type': "application/json" ,
           // 'Authorization' : tools.Jwt.getBearer()
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