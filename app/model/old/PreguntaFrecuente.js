Ext.define('backoffice.model.PreguntaFrecuente', {
    extend: 'Ext.data.Model',
    fields: [
        {name:"idPreguntasFrecuentes",type :'int'},
        {name:"pregunta",type :'string'},
        {name:"respuesta",type :'string'},
        {name:"enable",type :'int'},
        {name:"codeCategoria",type :'string'}
     ],
});