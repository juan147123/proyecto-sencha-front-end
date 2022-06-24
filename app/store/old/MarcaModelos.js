Ext.define('backoffice.store.MarcaModelos', {
    extend : 'Ext.data.Store',
    storeId : 'stMarcaModelos',
    model : 'backoffice.model.Modelo',
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'marca/modelos',
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