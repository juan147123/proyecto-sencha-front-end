Ext.define('backoffice.store.TipoServicios', {
    extend : 'Ext.data.Store',
    storeId : 'stTipoServicios',
    model : 'backoffice.model.TipoServicio',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'tiposervicio',
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