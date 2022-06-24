Ext.require('backoffice.model.Banco');
Ext.require('backoffice.model.Vehiculo');

Ext.define('backoffice.model.Conductor', {
    extend: 'Ext.data.Model',
    alias: 'mod_conductor',
    require: [
        'backoffice.model.Banco',
        'backoffice.model.Vehiculo'
    ],
    fields: [
        { name: "idConductor", type: 'int' },
        { name: "nombres", type: 'string' },
        { name: "apellidos", type: 'string' },
        { name: "uid", type: 'string' },
        { name: "celular", type: 'string' },
        { name: "correo", type: 'string' },
        { name: "idBanco", type: 'int' },
        { name: "numeroCuenta", type: 'string' },
        { name: "numeroDocumento", type: 'string' },
        { name: "idTipoDocumento", type: 'int' },
        { name: "licencia", type: 'string' },
        { name: "idEstadoConductor", type: 'int' },
        {
            name: "nombreApellido", type: 'string', convert: function (value, record) {
                return record.get('nombres') + ' ' + record.get('apellidos');
            }
        },
        { name: "placa", type: 'string' },
        { name: "marca", type: 'string' },
        { name: "vehiculos", reference: 'Vehiculo' },
        { name: "banco", reference: 'Banco' },
        { name: "enable", reference: 'int' },
        {name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'BAJA';
            }
          }},  

    ],
    //hasMany: [
    // {name:'banco',model: 'backoffice.model.Banco'},
    // {name:'vehiculos',model: 'backoffice.model.Vehiculo'}
    //]



});




