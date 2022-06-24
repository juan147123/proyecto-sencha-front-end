Ext.define('backoffice.store.MethodPay', {
    extend  : 'Ext.data.Store',
    storeId : 'stFormaPago',
    model   : 'backoffice.model.MethodPay',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'methodpay',
        headers: {
            'Content-Type': "application/json" ,
           // 'Authorization' : tools.Jwt.getBearer()
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