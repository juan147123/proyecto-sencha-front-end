Ext.define('backoffice.model.InventoryStatus', {
    extend: 'Ext.data.Model',
    alias : 'modelInventoryStatus',
    fields: [
        { name: "idinventory_status", type :'int' },
        { name: "description", type :'string' }
        
    ]
});