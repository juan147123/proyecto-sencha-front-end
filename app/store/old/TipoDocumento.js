Ext.define('backoffice.store.TipoDocumento', {
    extend : 'Ext.data.Store',
    storeId : 'stTipoDocumento',
    model : 'backoffice.model.TipoDocumento',
    pageSize:30,
    
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'tipodocumento',
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