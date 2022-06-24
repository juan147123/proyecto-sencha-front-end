Ext.define('backoffice.store.PreguntasFrecuentes', {
    extend : 'Ext.data.Store',
    storeId : 'stFrecuentesFrecuentes',
    model : 'backoffice.model.PreguntaFrecuente',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'preguntasfrecuentes',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'total'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});