Ext.define('backoffice.view.inventario.GeneraReposicionStockController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventario-generareposicionstock',
    /* onClickEnviaPedido:function(b){
         tools.Util.getById('panelReposicionStock')
         .getLayout()
         .setActiveItem(0);
         tools.Util.setToast("",Ext.manifest.msgEnvioPedidoAlmacen,0);
     },*/
    onClickAtras: function (b) {
        tools.Util.getById('panelReposicionStock')
            .getLayout()
            .setActiveItem(0);
    },
    onClickGeneraReposicion: function (b) {
        /**
         * Enviar Reposicion de stock de tienda al almacen
         */
        //TODO: Recorrer la grilla
        me = this;
        let productos = tools.Util.getById('dgvGeneraReposicionProductos');
        var listCheck = productos.getSelectionModel().getSelection();
        if (listCheck.length!=0) {
            Ext.Msg.confirm("Envio a almacen", "Se procedera a la creacion de la solicitud de requerimiento de stock esta seguro?", function (b) {
                if (b == 'yes') {
                    me._GenerarSolicitud(listCheck);
                    //me._GenerarSolicitud();
                    tools.Util.getById('panelReposicionStock')
                        .getLayout()
                        .setActiveItem(0);
                    tools.Util.setToast("", Ext.manifest.msgEnvioPedidoAlmacen, 0);
                }
            }, this);
        }
       
    },
    _GenerarDetalleJson:function(listCheck){
        let _data = [];
        Ext.each(listCheck, function(r){
            _data.push(r.data);
        });
        return JSON.stringify(_data);
    },
    _GenerarSolicitud: function (listCheck) {
        me = this;
        let jsonDetail =  me._GenerarDetalleJson(listCheck);
        if(jsonDetail){
            Ext.Ajax.request({
                url: Ext.manifest.api + 'replacement',
                jsonData:  {
                    "idreplacement": 0,
                    "idstore": tools.Jwt.getStore(),
                    "date": new Date(),
                    "number_replacement": 0,
                    "idinventory_status": 1,
                    "enable": 1,
                    "useradd": tools.Jwt.getUserId(),
                    "detail" : jsonDetail
                },
                method: 'POST',
                async: false,
                cors: true,
                defaultHeaders: {
                    'Authorization':  tools.Jwt.getBearer(),
                    'Content-Type': 'application/json;charset=utf-8'
                },
                success: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                    if(data.data.idreplacement!=0){
                        tools.Util.getById('dgvReposicion')
                        .getStore()
                        .load();
                    }
                },
    
                failure: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                    console.log(data);
                }
            });
    
        }

        
        
    }


});
