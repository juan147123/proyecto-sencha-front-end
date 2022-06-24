Ext.define('backoffice.view.maestros.modelo.ListadoModeloController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-modelo-listadomodelo',
    onClickNuevo: function (b) {
        /*obj = {
          animateTarget: b,
          title : 'Nuevo Cliente'
        };
        tools.Util.getWindowPopup('contacto.FormCliente',obj);*/

        let me = tools.Util.getById('panelModelo').getLayout();
        me.setActiveItem(1);
    }

});
