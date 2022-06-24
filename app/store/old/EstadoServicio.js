Ext.define('backoffice.store.EstadoServicio', {
    extend : 'Ext.data.Store',
    storeId : 'stEstadoServicio',
    model : 'backoffice.model.EstadoServicio',
    pageSize:30,
    
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'estadoservicio',
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