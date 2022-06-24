Ext.require('backoffice.model.Concepto');
Ext.require('backoffice.model.TipoServicio');

Ext.define('backoffice.model.ConceptoTipoServicio', {
    extend: 'Ext.data.Model',
    require: [
        'backoffice.model.Concepto',
        'backoffice.model.TipoServicio'
    ],
    fields: [
        { name: "idConceptoTipoServicio", type: "int"},
        { name: "idConcepto", type: "int"},
        { name: "idTipoServicio", type: "int"},
        { name: "costo", type: "string"},
        { name: "operador", type: "string"},
        { name: "factor", type: "string"},
        { name: "enable", type: "int"},
        {name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
        }},  
    ],
    hasMany: [
        {name:'tiposervicio',model: 'backoffice.model.TipoServicio'},
        {name:'concepto',model: 'backoffice.model.Concepto'}
     ]

});

