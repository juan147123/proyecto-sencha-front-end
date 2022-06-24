Ext.define('backoffice.store.Locations', {
    extend : 'Ext.data.Store',
    storeId : 'stLocations',
    model : 'backoffice.model.Location',
    proxy: { type: 'memory' }
});