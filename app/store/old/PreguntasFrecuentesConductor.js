Ext.define('backoffice.store.PreguntasFrecuentesConductor', {
    extend : 'Ext.data.Store',
    storeId : 'stPreguntasFrecuentesConductor',
    model : 'backoffice.model.PreguntaFrecuenteConductor',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'preguntasfrecuentesconductor',
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