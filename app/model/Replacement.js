Ext.define('backoffice.model.Replacement', {
    extend: 'Ext.data.Model',
    alias : 'modelReplacement',
    fields: [
        { name :"idreplacement", type : 'int'},
        { name :"idstore", type : 'int'},
        { name :"date", type : 'date'},
        { name :"number_replacement", type : 'int'},/* 
        { name :"idinventory_status", type : 'int'}, */
        { name :"enable", type : 'int'},
        { name : "nro_orden" , type : 'string',convert:function(value, record){
            return Ext.String.leftPad( record.get('idreplacement').toString(), 5, '0');
        }},   
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return '<div class="x-status-activo"> ACTIVO </div>';
            }else{
                return '<div class="x-status-inactivo"> INACTIVO </div>';
            }
            
        }},   
        { name : "idinventory_status" , type : 'string',convert:function(value, record){
            if (record.get('idinventory_status') == 1) {
                return '<div class="x-status-inactivo"> CREADO </div>';
            }else if(record.get('idinventory_status') == 2){
                return '<div class="x-status-aceptado"> ACEPTADO </div>';
            }else if(record.get('idinventory_status') == 3){
                return '<div class="x-status-enviado"> ENVIADO </div>';
            }else{
                return '<div class="x-status-activo"> RECEPCIONADO </div>';
            }            
        }}   
    ]
});
