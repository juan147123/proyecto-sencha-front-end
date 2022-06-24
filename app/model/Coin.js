Ext.define('backoffice.model.Coin', {
    extend: 'Ext.data.Model',
    alias : 'modelCoin',
    fields: [
        { name : "idcoin", type : 'int'},
        { name : "description", type : 'string'},
        { name : "simbolo", type : 'string'},
        { name : "enable", type : 'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
       
    ]
});