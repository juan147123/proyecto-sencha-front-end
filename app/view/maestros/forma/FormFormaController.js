Ext.define('backoffice.view.maestros.forma.FormFormaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-forma-formforma',
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {

    },

    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelForma').getLayout();
        me.setActiveItem(nroVista);
    }

});
