Ext.require('backoffice.model.Position')
Ext.define('backoffice.model.Location', {
    extend: 'Ext.data.Model',
    alias : 'mod_location',
    requiere : [
          'backoffice.model.Position'
    ],
    fields: [
        { name: "fcmToken" , type : "string"},
        { name: "status", type : "string"}
     ],
     hasMany: {model: 'Position', associationKey: 'position'}
});