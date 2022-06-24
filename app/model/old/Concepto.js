Ext.define('backoffice.model.Concepto', {
    extend: 'Ext.data.Model',
    fields: [
        { name:"idConcepto", type :"int"},
        { name:"nombre", type :"string"},
        { name:"costo", type :"float"},
        { name:"precio", type :"float"},
        { name:"enable", type :"int"},   
        {name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
        }},  
    ],
    belongsTo: {name:'ConceptoTipoServicio', model:'backoffice.model.ConceptoTipoServicio'} 
});

