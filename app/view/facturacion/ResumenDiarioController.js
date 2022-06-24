Ext.define('backoffice.view.facturacion.ResumenDiarioController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.resumendiario',


    onClickResumenDiario: function () {
        var me = this;
        let form = tools.Util.getById('formResumenDiario');
        let fecha = form.getForm().getValues().fechaResumen;
        const [day, month, year] = fecha.split('/');

        const fechaFormat = [year, month, day].join('-');
        urlResumen = Ext.manifest.apiResumen + fechaFormat;
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        respuesta = tools.Util.getAjaxOnly('', urlResumen, 'GET');

        if (respuesta) {
            console.log(respuesta)
            let newTicket = {
                "ticket": respuesta.ticket,
            };
            let servicio = Ext.create('serviceticketsunat');
            servicio.registrarTicket(newTicket).then((resultado) => {
                console.log(resultado)
               
                servicio.resumenBoletas(fechaFormat).then((resultado2) => {
                    console.log(resultado2)

                    Ext.each(resultado2.data.data, function (record) {
                        let asignarTicket = {
                            "estadofe": respuesta.status,
                            "observacionfe": respuesta.message,
                            "idticket": resultado.data.data.idticket,
                        };
                        servicio.asignarTicket(record['idsales'], asignarTicket).then((resultado) => {
                        });
                    });
                });
                let store = tools.Util.getById('dgvFacturacion').getStore();
                me.refrescarCards(store);
                tools.Util.setToast("", Ext.manifest.msgEnviando, 0);
                me.onClickCerrar();

            });
            console.log(respuesta)


        };
    },
    onClickCerrar: function (b) {
        this.getView().close();
    },
    refrescarCards: function (store) {
        {
            store.load({
                callback: function (records, operation, success) {
                    if (success) {
                        let totalventa = 0;
                        let totaldelanto = 0;
                        let totalsaldo = 0;
                        records.forEach(element => {
                            if (element.get('enabletext') == "Activo") {
                                totalventa += parseFloat(element.get('total'));
                                totaldelanto += parseFloat(element.get('delanto'));
                                totalsaldo += parseFloat(element.get('saldo'));
                            }
                        });
                        tools.Util.getById('lblTotalVentas').setText((totalventa).toFixed(2));
                        tools.Util.getById('lblTotalDelantos').setText((totaldelanto).toFixed(2));
                        tools.Util.getById('lblTotalSaldo').setText((totalsaldo).toFixed(2));
                    }
                },
                scope: this
            });
        }
    }
});
