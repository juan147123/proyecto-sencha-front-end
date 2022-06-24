Ext.define('backoffice.view.compra.ListadoCompraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.compra-listadocompra',
    onClickNuevo:function(){
        tools.Util.getById('panelCompra')
        .getLayout()
        .setActiveItem(1);
    }

});
