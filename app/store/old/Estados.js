Ext.define('backoffice.store.Estados', {
    extend : 'Ext.data.Store',
    storeId : 'stEstados',
    model : 'backoffice.model.Estado',
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: Ext.manifest.api +  '/estado',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true
});