Ext.require("backoffice.model.TipoDocumento");

Ext.define("backoffice.model.Servicio", {
    extend: "Ext.data.Model",
    alias : "mod_servicio",
    /*require: [
      "backoffice.model.TipoDocumento"
    ],*/
    fields: [
        {name:"idServicio" , type : "int",convert: null},
        {name:"fechaSalida",type: "string",convert: null},
        {name:"horaSalida",type: "string",convert: null},
        {name:"fechaLlegada",type: "string",convert: null},
        {name:"horaLlegada",type: "string",convert: null},
        {name:"costo", type : "float",convert: null},
        {name:"descuento", type : "float",convert: null},
        {name:"total", type : "float",convert: null},
        {name:"idVehiculo", type : "int",convert: null},
        {name:"idRuta", type : "int",convert: null},
        {name:"idRutaFinal", type : "int",convert: null},
        {name:"idTipoServicio", type : "int",convert: null},
        {name:"idEstadoServicio", type : "int",convert: null},
        {name:"valoracionCliente", type : "int",convert: null},
        {name:"valoracionConductor", type : "int",convert: null},
        {name:"comentario", type : "string",convert: null},
        {name:"cantPasajeros", type : "int",convert: null},
        {name:"idSolicitud", type : "int",convert: null},
        {name:"idConductor", type : "int",convert: null},
        {name:"totalFinal", type : "float",convert: null},
        {name:"idTipoVehiculo", type: "int",convert: null},
        {name:"cantAdultosPasajeros", type: "int",convert: null},
        {name:"cantNinosPasajeros", type: "int",convert: null},
        {name:"cantBebesPasajeros", type: "int",convert: null},
        {name:"cantMaletasGrandes", type: "int",convert: null},
        {name:"cantMaletasMedianas", type: "int",convert: null},
        {name:"cantMochilas", type: "int",convert: null}
     ]
});