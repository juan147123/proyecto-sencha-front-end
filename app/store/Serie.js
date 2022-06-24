Ext.define('backoffice.store.Serie', {
    extend  : 'Ext.data.Store',
    storeId : 'stSerie',
    model   : 'backoffice.model.Serie',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'serie',
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