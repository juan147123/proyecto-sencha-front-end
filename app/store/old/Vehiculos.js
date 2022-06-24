Ext.define('backoffice.store.Vehiculos', {
    extend : 'Ext.data.Store',
    storeId : 'stVehiculos',
    model : 'backoffice.model.Vehiculo',
    pageSize:30,
    
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'vehiculo',
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