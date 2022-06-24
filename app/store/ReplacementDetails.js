Ext.define('backoffice.store.ReplacementDetails', {
    extend: 'Ext.data.Store',
    storeId: 'stReplacementDetails',
    model: 'backoffice.model.ReplacementDetails',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'replacement/replacementdetail',
        headers: {
            'Content-Type': "application/json",
            'Authorization' : tools.Jwt.getBearer()
        },
        extraParams: {
            idreplacement: 0,
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