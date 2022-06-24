Ext.define('backoffice.store.Bancos', {
    extend : 'Ext.data.Store',
    storeId : 'stBancos',
    model : 'backoffice.model.Banco',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'banco',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty : 'totalElements'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});