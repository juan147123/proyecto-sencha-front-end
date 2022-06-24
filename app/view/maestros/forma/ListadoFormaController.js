Ext.define('backoffice.view.maestros.forma.ListadoFormaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-forma-listadoforma',
    onClickNuevo: function (b) {
        /*obj = {
          animateTarget: b,
          title : 'Nuevo Cliente'
        };
        tools.Util.getWindowPopup('contacto.FormCliente',obj);*/

        let me = tools.Util.getById('panelForma').getLayout();
        me.setActiveItem(1);
    }

});
