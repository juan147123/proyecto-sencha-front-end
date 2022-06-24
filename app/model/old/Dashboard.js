Ext.define('backoffice.model.Dashboard', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "todaysales", type: 'float' },
        { name: "totalbalance", type: 'float' },
        { name: "totalclients", type: 'float' },
        { name: "workorders", type: 'float' }
    ],
    // belongsTo: {name:'Conductor', model:'backoffice.model.Conductor'} 
});