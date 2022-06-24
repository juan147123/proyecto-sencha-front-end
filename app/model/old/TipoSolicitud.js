
Ext.define('backoffice.model.TipoSolicitud', {
    extend: 'Ext.data.Model',
    fields: [
        { name : "idTipoSolicitud", type : "int"},
        { name : "nombre", type : "string"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
     ],
     //belongsTo: {name:'ConceptoTipoServicio', model:'backoffice.model.ConceptoTipoServicio'} 
});