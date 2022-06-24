Ext.define('backoffice.view.maestros.tipo.FormTipoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-tipo-formtipo',

    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {
        let form = this.getView().getForm();
        let store = tools.Util.getById('dgvType').getStore();

        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id = tools.Util.getById('idtype').getValue();

        form.submit({
            url: (_id != 0 ? Ext.manifest.api + 'type/' + _id.toString() : Ext.manifest.api + 'type'),
            method: (_id != 0 ? 'PUT' : 'POST'),
            waitMsg: Ext.manifest.msgEnviando,
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': tools.Jwt.getBearer()
            },
            clientValidation: true,
            submitEmptyText: true,
            standardSubmit: false,
            success: function (form, action) {
                store.load();
                let me = tools.Util.getById('panelTipo');
                let l = me.getLayout();
                l.setActiveItem(0);
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);

            }
        });
    },

    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelTipo').getLayout();
        me.setActiveItem(nroVista);
    }
});
