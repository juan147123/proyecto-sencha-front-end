Ext.define('backoffice.store.UseMount', {
    extend  : 'Ext.data.Store',
    storeId : 'stUseMount',
    model   : 'backoffice.model.UseMount',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'usemount',
        headers: {
            'Content-Type': "application/json" 
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