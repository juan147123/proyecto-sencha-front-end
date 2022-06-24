Ext.define('backoffice.store.Solicitudes', {
    extend  : 'Ext.data.Store',
    storeId : 'stSolicitudes',
    model   : 'backoffice.model.Solicitud',
    pageSize:30,
    extraParams: {
        desde:"",
        hasta:"",
        tipo : 0
    },
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'solicitud/tipo',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        extraParams: {
            desde:"",
            hasta:"",
            tipo : 0
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