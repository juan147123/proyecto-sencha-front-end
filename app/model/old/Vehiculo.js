Ext.define('backoffice.model.Vehiculo', {
    extend: 'Ext.data.Model',
    alias : 'mod_vehiculo',
    requires:[
        'backoffice.model.Conductor'
    ],
    fields: [

        { name : "idVehiculo", type : 'int',},
        { name : "idConductor", type : 'int',},
        { name : "idMarca", type : 'int',},
        { name : "placa", type : 'string',},
        { name : "asientos", type : 'string',},
        { name : "maletas", type : 'string',},
        { name : "foto", type : 'string',},
        { name : "idModelo", type : 'int',},
        { name : "color", type : 'string',},
        { name : "urlSoat", type : 'string',},
        { name : "urlRevisionTecnica", type : 'string',},
        { name : "urlResolicionTaxi", type : 'string',},
        { name : "urlTarjetaCirculacion", type : 'string',},

     ],
    // belongsTo: {name:'Conductor', model:'backoffice.model.Conductor'} 

});
