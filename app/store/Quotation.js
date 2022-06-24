Ext.define('backoffice.store.Quotation', {
    extend  : 'Ext.data.Store',
    storeId : 'stQuotation',
    model   : 'backoffice.model.Quotation',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'quotation',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
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