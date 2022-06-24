Ext.define('backoffice.store.Employee', {
    extend  : 'Ext.data.Store',
    storeId : 'stEmployee',
    model   : 'backoffice.model.Employee',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'employee/all',
        headers: {
            'Content-Type': "application/json" ,
            //'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'count'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});