Ext.define('backoffice.view.producto.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.producto-registro',
    onBeforeActivate: function (obj, opts) {
        tools.Util.getById('idcategory').getStore().load();
        tools.Util.getById('idbrand').getStore().load();
        tools.Util.getById('idside').getStore().load();
        tools.Util.getById('idsize').getStore().load();
        tools.Util.getById('idindex').getStore().load();
        tools.Util.getById('idcolor').getStore().load();
        tools.Util.getById('idtype').getStore().load();
        tools.Util.getById('idmaterial').getStore().load();
        tools.Util.getById('idserie').getStore().load();
        tools.Util.getById('iduse_mountP').getStore().load();


    },
    onClickCancelar: function (b) {
        tools.Util.getById('dgvProducto').getStore().load(
            {
                params: {
                    idcategory: 0,
                    idmaterial: 0,
                    idtype: 0,
                    idcolor: 0,
                    idindex: 0,
                    idbrand: 0,
                    idtreatment: 0
                },
            }
        );
        let me = tools.Util.getById('contentPanelProducto').getLayout();
        me.setActiveItem(0);
    },
    onClickGuardar: function (b) {
        let form = this.getView().getForm();
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        let me = tools.Util.getById('contentPanelProducto').getLayout();
        let view = this.getView();
        view.mask(Ext.manifest.msgEnviando);
        let service = Ext.create('service-Product');
        let product = Ext.create('modelProduct', {
            idproduct: tools.Util.getById('idproduct').getValue(),
            description: '',
            stockmin: tools.Util.getById('stockmin').getValue(),
            idstore: tools.Util.getById('idstorePD').getValue(),
            stockactual: tools.Util.getById('stockactual').getValue(),
            idcategory: tools.Util.getById('idcategory').getValue(),
            idtype: tools.Util.getById('idtype').getValue(),
            idmaterial: tools.Util.getById('idmaterial').getValue(),
            idsize: tools.Util.getById('idsize').getValue(),
            idindex: tools.Util.getById('idindex').getValue(),
            idside: tools.Util.getById('idside').getValue(),
            idcolor: tools.Util.getById('idcolor').getValue(),
            idbrand: tools.Util.getById('idbrand').getValue(),
            enable: (tools.Util.getByName('enable').getValue() ? 1 : 0),
            sph: tools.Util.getById('sph').getValue(),
            cyl: tools.Util.getById('cyl').getValue(),
            iduse_mount: tools.Util.getById('iduse_mountP').getValue(),
            add: tools.Util.getById('add').getValue(),
            price_local: tools.Util.getById('price_local').getValue(),
            price_dolar: tools.Util.getById('price_dolar').getValue(),
            idserie: tools.Util.getById('idserie').getValue()
        });

        service.saveProduct(product).then(function (content) {
            view.unmask();
            tools.Util.getById('idproduct').setValue(content.data.data.idproduct),
            tools.Util.setToast("", "Registre un tratamiento",0);
           
        });
    },
    onClickAddTratamiento: function (b) {
        var data = {
            product: tools.Util.getById('idproduct').getValue()
        };
        if (data.product != 0) {
            tools.Util.getWindowPopup('producto.AgregarTratamiento', data);
        }

    }


});
