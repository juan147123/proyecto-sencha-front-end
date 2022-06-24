Ext.define('backoffice.store.PreguntasFrecuentesCategorias', {
    extend : 'Ext.data.Store',
    storeId : 'stPreguntasFrecuentesCategorias',
    model : 'backoffice.model.PreguntaFrecuenteCategorias',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'preguntasfrecuentescategorias',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'content',
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: true,
    autoSync:true
});