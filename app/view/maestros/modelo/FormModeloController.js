Ext.define('backoffice.view.maestros.modelo.FormModeloController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-modelo-formmodelo',

    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {

    },

    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelModelo').getLayout();
        me.setActiveItem(nroVista);
    }

});
