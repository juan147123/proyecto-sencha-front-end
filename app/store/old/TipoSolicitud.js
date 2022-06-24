Ext.define('backoffice.store.TipoSolicitud', {
    extend : 'Ext.data.Store',
    storeId : 'stTipoSolicitud',
    model : 'backoffice.model.TipoSolicitud',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'tiposolicitud',
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