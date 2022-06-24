Ext.define('backoffice.model.Site', {
    extend: 'Ext.data.Model',
    alias : 'mod_site',
    fields: [
        {name:"idSite", type:"int"},
        {name:"nombre", type : "string"},
        {name:"direccion", type : "string"},
        {name:"foto", type : "string"},
        {name:"valoracion", type : "string"},
        {name:"contacto", type : "string"},
        {name:"rangoPrecio", type : "string"},
        {name:"idPoint", type : "int"},
        {name:"idCategoria", type : "int"}
        ],
     //belongsTo: {name:'Conductor', model:'backoffice.model.Conductor'} 
});


/*
"idSite": 3,
"nombre": "DISCOTECA EL PAPI",
"direccion": "calle los alisos",
"foto": "aaaa",
"valoracion": 3,
"contacto": "JOSE RAMIREZ",
"rangoPrecio": "30 - 50 SOLES",
"idPoint": 1,
"idCategoria": 1,
"point": {
  "idPoint": 1,
  "name": "georeferencia",
  "location": "-1.6666,2.666"
},
"categoria": {
  "idCategoria": 1,
  "nombre": "DISCOTECAS",
  "enable": 1
}*/