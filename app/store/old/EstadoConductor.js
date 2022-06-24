Ext.define('backoffice.store.EstadoConductor', {
    extend : 'Ext.data.Store',
    storeId : 'stEstadoConductor',
    model : 'backoffice.model.EstadoConductor',
    pageSize:30,
    
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'estadoconductor',
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
    autoLoad: true,
    autoSync:true
});