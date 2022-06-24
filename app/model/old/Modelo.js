/*Ext.define('backoffice.model.Marca', {
    extend: 'Ext.data.Model',
    requires:[
        'backoffice.model.Modelo'
    ],
    fields: [
        { name: "idMarca" , type : "int"},
        { name: "marca", type : "string"},
        { name: "enable", type : "int"}
     ],
     hasMany: {model: 'Modelo', name: 'modelos'}

});
*/

Ext.define('backoffice.model.Modelo', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idModelo" , type : "int"},
        { name: "modelo", type : "string"},
        { name: "enable", type : "int"},
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
