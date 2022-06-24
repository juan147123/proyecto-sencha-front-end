Ext.require('backoffice.model.GeoPoint')
Ext.define('backoffice.model.Position', {
    extend: 'Ext.data.Model',
    requiere: [
         'backoffice.model.GeoPoint'
    ],
    fields: [
        { name: "geohash" , type : "string"}
     ],
     hasMany: {model: 'GeoPoint', associationKey: 'geopoint'}
});