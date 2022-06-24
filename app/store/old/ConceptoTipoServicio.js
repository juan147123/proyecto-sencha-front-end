Ext.define('backoffice.store.ConceptoTipoServicio', {
    extend : 'Ext.data.Store',
    storeId : 'stConceptoTipoServicio',
    model : 'backoffice.model.ConceptoTipoServicio',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'conceptoTipoServicio',
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