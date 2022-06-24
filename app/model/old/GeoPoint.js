Ext.define('backoffice.model.GeoPoint', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "_lat" , type : "number"},
        { name: "_long", type : "number"}
     ],
     //hasOne: {model: 'Marca', name: 'marcas'}
});