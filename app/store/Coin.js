Ext.define('backoffice.store.Coin', {
    extend  : 'Ext.data.Store',
    storeId : 'stCoin',
    model   : 'backoffice.model.Coin',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'coin',
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