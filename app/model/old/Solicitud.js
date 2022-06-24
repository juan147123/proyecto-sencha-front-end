Ext.define('backoffice.model.Solicitud', {
    extend: 'Ext.data.Model',
    fields: [
        { name : "idSolicitud", type : "int"},
        { name : "fecha", type : "date"},
        { name : "idCliente", type : "int"},
        { name : "total", type : "int"},
        { name : "enable", type : "int"},
        { name : "idTipoSolicitud", type : "int"},
        { name : "cupon", type : "int"},
        { name : "totalFinal", type : "int"},
        { name : "persona", type : "string"},
        { name : "fechareserva", type : "string"},
        { name : "fecharecojo", type : "string"},
        { name : "status", type : "int"},
        { name : "statustext", type : "string"},
        { name : "taxista", type : "string"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},
     ],
    // hasOne: {model: 'Marca', name: 'marcas'}
});
