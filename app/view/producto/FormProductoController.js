Ext.define('backoffice.view.producto.FormProductoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-producto',
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },
    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelProducto').getLayout();
        me.setActiveItem(nroVista);
    },

    onClickGuardar: function (b) {
        let form = this.getView().getForm();
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        let store  = tools.Util.getById('dgvProducto').getStore();
        let view = this.getView();
        view.mask(Ext.manifest.msgEnviando);
        let service = Ext.create('service-Product');
        let product = Ext.create('modelProduct', {
            idproduct: tools.Util.getById('idproduct').getValue(),
            description: tools.Util.getById('description').getValue(),
            priceunit: tools.Util.getById('priceunit').getValue(),
            stock: tools.Util.getById('stock').getValue(),
            idcategory: tools.Util.getById('idcategory').getValue(),
            idbrand: tools.Util.getById('idbrand').getValue(),
            idsupplier: tools.Util.getById('idsupplier').getValue(),
            enable: (tools.Util.getByName('enable').getValue() ? 0 : 1),
        });

        service.saveProduct(product).then(function (content) {
            view.unmask();
            store.load();
                let me = tools.Util.getById('panelProducto');
                let l  = me.getLayout();
                l.setActiveItem(0); 
        });
    },
});
