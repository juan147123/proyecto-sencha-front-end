Ext.define('backoffice.store.Modelos', {
    extend : 'Ext.data.Store',
    storeId : 'stModelo',
    model : 'backoffice.model.Modelo',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'modelo',
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