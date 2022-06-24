Ext.define('backoffice.store.Marcas', {
    extend : 'Ext.data.Store',
    storeId : 'stMarca',
    model : 'backoffice.model.Marca',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'marca',
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