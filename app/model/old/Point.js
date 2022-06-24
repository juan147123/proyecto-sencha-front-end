Ext.define('backoffice.model.Point', {
    extend: 'Ext.data.Model',
    alias : 'mod_point',
    fields: [
        {name :"idPoint", type : 'int'},
        {name :"name", type : 'string'},
        {name :"location", type : 'string'},
     ],
     //belongsTo: {name:'Conductor', model:'backoffice.model.Conductor'} 
});