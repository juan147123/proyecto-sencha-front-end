Ext.define('backoffice.view.facturacion.ListadoPagosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.listado-pagos',

    onClickEliminar: function (grid, rowIndex, colIndex) {
        var me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _idsales = tools.Util.getById('idsales').getValue();

                    let _record = grid.getStore().getAt(rowIndex);
                    let idpago = _record.get('idpago');
                    let _url = Ext.manifest.api + 'pagos/' + idpago.toString();
                    let _resp = tools.Util.getAjaxOnlyToken({ enable: 0, idsales: _idsales }
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    me._calcular(_idsales);
                }
            }
        );
    },
    onClickCerrar: function (b) {
        this.getView().close();
    },
    onClickGuardar: function (b) {
        let me = this;
        let form = tools.Util.getById('formpago');
        var store = tools.Util.getById('dgvPagos').getStore();

        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }/* else if (!form.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }*/
        //_id = tools.Util.getById('idpago').getValue();

        form.submit({
            url: (Ext.manifest.api + 'pagos'),
            method: ('POST'),
            waitMsg: 'Enviando ...',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': tools.Jwt.getBearer()
            },
            clientValidation: true,
            submitEmptyText: true,
            standardSubmit: false,
            success: function (form, action) {
                tools.Util.setToast("", Ext.manifest.msgOk, 0);
                let _idsales = tools.Util.getById('idsales').getValue();
                me._calcular(_idsales);
                form.reset();
                tools.Util.getById('idsales').setValue(_idsales);



            }
        });



    },

    _calcular: function (_idsales) {
        tools.Util.getById('dgvPagos').getStore().load(
            {
                params: {
                    idsales: _idsales
                },
                callback: function (records, operation, success) {
                    if (success) {
                        var store = tools.Util.getById('dgvPagos').getStore();
                        var monto = 0;
                        store.each(function (_record) {
                            monto += _record.get("monto");
                        })
                        tools.Util.getById('delanto').setValue((parseFloat(monto)).toFixed(2));
                        var total = tools.Util.getById('total').getValue();
                        var saldo = total-monto;
                        tools.Util.getById('saldo').setValue((parseFloat(saldo)).toFixed(2));
                    }
                }

            }
        );
        let storefac = tools.Util.getById('dgvFacturacion').getStore();
        storefac.load({
            callback: function (records, operation, success) {
                if (success) {
                    let totalventa = 0;
                    let totaldelanto = 0;
                    let totalsaldo = 0;
                    records.forEach(element => {
                        totalventa += parseFloat(element.get('total'));
                        totaldelanto += parseFloat(element.get('delanto'));
                        totalsaldo += parseFloat(element.get('saldo'));
                    });
                    tools.Util.getById('lblTotalVentas').setText((totalventa).toFixed(2));
                    tools.Util.getById('lblTotalDelantos').setText((totaldelanto).toFixed(2));
                    tools.Util.getById('lblTotalSaldo').setText((totalsaldo).toFixed(2));
                }
            },
            scope: this
        });

    }


});
