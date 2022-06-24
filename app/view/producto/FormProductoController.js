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
        me = this;
        let validacion = me._validacion();
        if (validacion == 0) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados o vacíos');
        } else {

            let store = tools.Util.getById('dgvProducto').getStore();
            let view = this.getView();
            view.mask(Ext.manifest.msgEnviando);
            let service = Ext.create('service-Product');
            let product = Ext.create('modelProduct', {
                idproduct: tools.Util.getById('idproduct').getValue(),
                idproductsuplier: tools.Util.getById('idproductsuplier').getValue(),
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
                let l = me.getLayout();
                l.setActiveItem(0);
            });
        }
    },
    _validacion: function () {
        let input1 = tools.Util.getById('idproduct').getValue();
        let input2 = tools.Util.getById('idproductsuplier').getValue();
        let input3 = tools.Util.getById('description').getValue();
        let input4 = tools.Util.getById('priceunit').getValue();
        let input5 = tools.Util.getById('stock').getValue();
        let input6 = tools.Util.getById('idcategory').getValue();
        let input7 = tools.Util.getById('idbrand').getValue();
        let input8 = tools.Util.getById('idsupplier').getValue();
        if (input1 == null || input2 == null || input3 == null || input4 == null || input5 == null || input6 == null || input7 == null || input8 == null) {
            return 0;
        } else {
            return 1;
        }
    }
});
