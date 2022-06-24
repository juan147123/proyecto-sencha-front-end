Ext.define('backoffice.store.Ingresos', {
    extend: 'Ext.data.Store',
    storeId: 'stIngresos',
    model: 'backoffice.model.Ingresos',
    sorters: [{
        property: 'mes',
        direction: 'ASC'
    }],
    sortRoot: 'mes',
    sortOnLoad: true,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        method: 'GET',
        url: Ext.manifest.api +  'dashboard/ingresos',
        reader: {
            type: 'json',
          //  rootProperty: 'data'
        }
    },
    autoLoad: false
});