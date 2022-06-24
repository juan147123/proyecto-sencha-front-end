Ext.define('backoffice.view.proveedor.PedidoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.proveedor-pedido',
    onClickCancelar: function () {
        try {
            let f = tools.Util.getById('formcolumn');
            let f2 = tools.Util.getById('formcolumn2');

            f.getForm().reset();
            f2.getForm().reset();
            let me = tools.Util.getById('contentPanelPedidoProveedor');
            let l = me.getLayout();
            l.setActiveItem(0);
        } catch (error) {
            console.warn('ERROR EN Regresar Pedido proveedor');
        }
    },
    onClickExpExcel: function (b) {
        let idorder=tools.Util.getById('idorder').getValue();
        tools.Util.getWOpenDownload(Ext.manifest.api + 'orderexcel/'+idorder, '');
    },
    onClickExpExcelBifo: function (b) {
        let idorder=tools.Util.getById('idorder').getValue();
        tools.Util.getWOpenDownload(Ext.manifest.api + 'orderbifoexcel/'+idorder, '');
    },
    onClickExpExcelMono: function (b) {
        let idorder=tools.Util.getById('idorder').getValue();
        tools.Util.getWOpenDownload(Ext.manifest.api + 'ordermonoexcel/'+idorder, '');
    },
    onClickExpExcelMont: function (b) {
        let idorder=tools.Util.getById('idorder').getValue();
        tools.Util.getWOpenDownload(Ext.manifest.api + 'ordermontexcel/'+idorder, '');
    },
    onClickGuardar: function (b) {
        me = this;
        
        let form1 = tools.Util.getById('formcolumn');
        let form2 = tools.Util.getById('formcolumn2');

        if (!form1.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        if (!form2.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        var view = me.getView();
        view.mask('Cargando...');
        let dataform1 = form1.getForm().getValues();
        let dataform2 = form2.getForm().getValues();
        var fecha = dataform2.fecha;
        let [day, month, year] = fecha.split('/');

        let fechaFormat = [year, month, day].join('-');
        let status = (tools.Util.getByName('status').getValue() ? 1 : 0);

        let nuevoPedido = {
            "idorder": dataform1.idorder,
            "idcategory": dataform1.idcategory,
            "idcolor": dataform1.idcolor,
            "idmaterial": dataform1.idmaterial,
            "idsupplier": dataform1.idsupplier,
            "idtype": dataform1.idtype,
            "typetransaction": dataform1.typetransaction,
            "date": fechaFormat,
            "idbrand": dataform2.idbrand,
            "idindex": dataform2.idindex,
            "idside": dataform2.idside,
            "idsize": dataform2.idsize,
            "idstore": dataform2.idstore,
            "treatment1": dataform1.treatment1,
            "treatment2": dataform2.treatment2,
            "treatment3": dataform1.treatment3,
            "treatment4": dataform2.treatment4,
            "status": status,
        }
        let store1 = tools.Util.getById('proveedor-ListadoTerminadoBifocal').getStore();
        let jsonDetalleTerminadoBifocal = me._GenerarDetalleJson(store1);

        let store2 = tools.Util.getById('proveedor-ListadoMonoSph1').getStore();
        let jsonDetalleTerminadoMonoSPH1 = me._GenerarDetalleJson(store2);

        let store3 = tools.Util.getById('proveedor-ListadoMonoSph2').getStore();
        let jsonDetalleTerminadoMonoSPH2 = me._GenerarDetalleJson(store3);

        let store4 = tools.Util.getById('proveedor-ListadoMonoCyl1').getStore();
        let jsonDetalleTerminadoMonoCyl = me._GenerarDetalleJson(store4);

        let store5 = tools.Util.getById('proveedor-ListadoMonoSphCyl1').getStore();
        let jsonDetalleTerminadoMonoSphCyl1 = me._GenerarDetalleJson(store5);

        let store6 = tools.Util.getById('proveedor-ListadoMonoSphCyl2').getStore();
        let jsonDetalleTerminadoMonoSphCyl2 = me._GenerarDetalleJson(store6);

        let store7 = tools.Util.getById('proveedor-ListadoMontura').getStore();
        let jsonDetalleMontura = me._GenerarDetalleJson(store7);

        let servicio = Ext.create('servicePedido');
        Ext.Msg.confirm("Generar venta", "Se procedera a generar el pedido, esta seguro?", function (b) {
            if (b == 'yes') {
                servicio.guardarPedido(nuevoPedido).then((resultado) => {

                    let detallebifo = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoBifocal,
                    }
                    servicio.guardarDetalleBifo(dataform1.idorder, detallebifo).then((resultado) => { });
                    let detallemonoshpplus = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoMonoSPH1,
                    }
                    servicio.guardarDetalleMonoShpPlus(dataform1.idorder, detallemonoshpplus).then((resultado) => { });
                    let detallemonoshpless = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoMonoSPH2,
                    }
                    servicio.guardarDetalleMonoShpLess(dataform1.idorder, detallemonoshpless).then((resultado) => { });
                    let detallemonocylless = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoMonoCyl,
                    }
                    servicio.guardarDetalleMonoCylLess(dataform1.idorder, detallemonocylless).then((resultado) => { });
                    let detallemount = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleMontura,
                    }
                    servicio.guardarDetalleMount(dataform1.idorder, detallemount).then((resultado) => { });
                    let detallesphpluscylless = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoMonoSphCyl1,
                    }
                    servicio.guardarDetalleMonoShpPlusCylLess(dataform1.idorder, detallesphpluscylless).then((resultado) => { });
                    let detallesphlesscylless = {
                        "idorder": resultado.data.data.idorder,
                        "json": jsonDetalleTerminadoMonoSphCyl2,
                    }
                    servicio.guardarDetalleMonoShpLessCylLess(dataform1.idorder, detallesphlesscylless).then((resultado) => {
                        let f = tools.Util.getById('formcolumn');
                        let f2 = tools.Util.getById('formcolumn2');

                        f.getForm().reset();
                        f2.getForm().reset();
                        let store = tools.Util.getById('dgvOrder').getStore();
                        store.load();
                        let panel = tools.Util.getById('contentPanelPedidoProveedor');
                        let l = panel.getLayout();
                        l.setActiveItem(0);
                        tools.Util.setToast("", Ext.manifest.msgEnviando, 0);

                        view.unmask();
                    });
                });


            }
        }, this);

    },
    _GenerarDetalleJson: function (store) {
        let _data = [];
        store.each(function (record) {
            _data.push(record.data);
        });
        return JSON.stringify(_data);
    },
    onBeforeActivate: function () {
        // Cuando muestra el formulario
        //tools.Util.getById('dgvCorrelative').getStore().load();
    },

});
