Ext.define('backoffice.store.PreguntasFrecuentesPasajero', {
    extend : 'Ext.data.Store',
    storeId : 'stPreguntasFrecuentesPasajero',
    model : 'backoffice.model.PreguntaFrecuenteConductor',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'preguntasfrecuentepasajero',
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