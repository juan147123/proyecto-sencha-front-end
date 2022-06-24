Ext.define('backoffice.store.Servicios', {
    extend : 'Ext.data.Store',
    storeId : 'stServicios',
    model : 'backoffice.model.Servicio',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'servicio/conductor',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty : 'totalElements'
        },
        extraParams : {
            desde: '',
            hasta : '',
            idConductor: 0
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});