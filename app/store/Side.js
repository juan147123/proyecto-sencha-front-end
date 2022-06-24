Ext.define('backoffice.store.Side', {
    extend  : 'Ext.data.Store',
    storeId : 'stSide',
    model   : 'backoffice.model.Side',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'side',
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