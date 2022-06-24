Ext.define('backoffice.store.Pagos', {
    extend: 'Ext.data.Store',
    storeId: 'stPagos',
    model: 'backoffice.model.Pagos',
    pageSize: 100,
    extraParams: {
        idsales: 0,
    },
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'pagosbysale',
        headers: {
            'Content-Type': "application/json",
            'Authorization' : tools.Jwt.getBearer()
        },
        extraParams: {
            idsales: 0,
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'count'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync: true
});