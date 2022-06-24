Ext.require('backoffice.model.TipoDocumento');

Ext.define('backoffice.model.Cliente', {
    extend: 'Ext.data.Model',
    alias : 'mod_cliente',
    require: [
      'backoffice.model.TipoDocumento'
    ],
    fields: [
       {name:"idCliente" , type : "int"},
       {name:"nombres" , type : "string"},
       {name:"apellidos" , type : "string"},
       {name:"numeroDocumento" , type : "string"},
       {name:"idTipoDocumento" , type : "int"},
       {name:"uid" , type : "string"},
       {name:"celular" , type : "string"},
       {name:"correo" , type : "string"},
       {name:"enable" , type : "int"},
       {name: "fcm", type : "string"},
       {name : "nombreApellido" , type : 'string',convert:function(value, record){
        return record.get('nombres')+ ' ' + record.get('apellidos');
       }},
       {name : "enabletext" , type : 'string',convert:function(value, record){
        if (record.get('enable') == 1) {
            return 'HABILITADO';
        }else{
            return 'BAJA';
        }
      }},  
       
     ]
});