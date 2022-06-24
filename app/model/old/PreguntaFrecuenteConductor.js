
Ext.define('backoffice.model.PreguntaFrecuenteConductor', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idPreguntasFrecuentes" , type : 'int'},
        { name: "pregunta" , type : 'string'},
        { name: "respuesta" , type : 'string'},
        { name: "enable" , type : 'int'},
        { name: "codeCategoria" , type : 'string'},
        {name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
        }},

     ]
});

