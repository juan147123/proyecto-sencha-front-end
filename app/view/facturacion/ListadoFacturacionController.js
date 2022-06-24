Ext.define('backoffice.view.facturacion.ListadoFacturacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.facturacion-listadofacturacion',
    onClickNuevo: function (b) {
        tools.Util.getById('panelFacturacion')
            .getLayout()
            .setActiveItem(1);
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        var me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _idsales = _record.get('idsales');
                    let _url = Ext.manifest.api + 'sales/' + _idsales;
                    let _resp = tools.Util.getAjaxOnlyToken({ enable: 0 }
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    urlBaja = Ext.manifest.apiBaja + _idsales;
                    respuesta = tools.Util.getAjaxOnly('', urlBaja, 'GET');
                    if (respuesta) {
                        console.log(respuesta)
                        let newTicket = {
                            "ticket": respuesta.ticket,
                        };

                        let servicio = Ext.create('serviceticketsunat');
                        servicio.registrarTicket(newTicket).then((resultado) => {
                            console.log(resultado)
                            let asignarTicket = {
                                "estadofe": respuesta.status,
                                "observacionfe": respuesta.message,
                                "idticket": resultado.data.data.idticket,
                            };
                            servicio.asignarTicket(_idsales, asignarTicket).then((resultado) => {
                                let store = tools.Util.getById('dgvFacturacion').getStore();
                                me.refrescarCards(store);
                            });
                        });


                    }
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvFacturacion').getStore();
        let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
            store: store,
            renderTo: Ext.getBody(),
            columns: [
                {
                    dataIndex: 'document',
                    header: 'Numero',
                    align: 'center',
                },
                {
                    dataIndex: 'businessname',
                    header: 'Cliente',
                    align: 'left',
                    width: 250,
                },
                {
                    dataIndex: 'number_document',
                    header: 'Ruc',
                    align: 'center',
                },
                {
                    dataIndex: 'date_issue',
                    header: 'Fecha',
                    xtype: 'datecolumn',
                    format: 'd/m/Y',
                    align: 'center',
                },
                {
                    type: 'numbercolumn',
                    dataIndex: 'total',
                    header: 'Total',
                    align: 'center',
                },
                {
                    dataIndex: 'enabletext',
                    header: 'Estado',
                    align: 'left',
                }
            ]
        }
        );
        gridexcel.export(tools.Util.getGenerateUUID() + 'Facturacion');
        gridexcel.destroy();
    },
    onClickFiltrarFecha: function (e) {
        me = this;
        let data1 = tools.Util.getById('date1').getValue();
        let data2 = tools.Util.getById('date2').getValue();
        let date1 = Ext.Date.format(data1, 'Y-m-d');
        let date2 = Ext.Date.format(data2, 'Y-m-d');

        tools.Util.getById('dgvFacturacion').getStore().load({
            params: {
                date1: date1,
                date2: date2
            },
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
        let store = tools.Util.getById('dgvFacturacion').getStore();
        me.refrescarCards(store);


    },
    onClickPdf: function (b) {
        let record = b.getWidgetRecord();
        let pdf = Ext.manifest.ticket + record.data.idsales.toString();
        tools.Util.getWOpenPrint(pdf, "Ticket " + record.data.idsales);
    },
    onKeyPressDocserie: function (obj, e, eOpts) {
        me = this;
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvFacturacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'sales/docserie/' + dato,
                me.refrescarCards(store);
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'sales',
                me.refrescarCards(store);
        }
    },
    onKeyPressDocument: function (obj, e, eOpts) {
        me = this;
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvFacturacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'sales/document/' + dato,
                me.refrescarCards(store);
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'sales',
                me.refrescarCards(store);
        }
    },
    onKeyPressName: function (obj, e, eOpts) {
        me = this;
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvFacturacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'sales/name/' + dato,
                me.refrescarCards(store);
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'sales',
                me.refrescarCards(store);
        }
    },
    onClick_Pagos: function (grid, rowIndex, colIndex) {
        tools.Util.getWindowPopup('facturacion.ListadoPagos', {
            ancho: screen.width - 400,
            largo: screen.height - 300
        });
        let _record = grid.getWidgetRecord();//.getAt(rowIndex);
        let _idsales = _record.data.idsales;
        let _delanto = _record.data.delanto;
        let _saldo = _record.data.saldo;
        let _total = _record.data.total;

        //console.log(_idsales)
        tools.Util.getById('dgvPagos').getStore().load({
            params: {
                idsales: _idsales,
            },
        });
        tools.Util.getById('total').setValue((parseFloat(_total)).toFixed(2));

        tools.Util.getById('idsales').setValue(_idsales);
        tools.Util.getById('delanto').setValue((parseFloat(_delanto)).toFixed(2));
        tools.Util.getById('saldo').setValue((parseFloat(_saldo)).toFixed(2));

    },
    onClickResumenDiario: function () {
        tools.Util.getWindowPopup('facturacion.ResumenDiario', {
            ancho: screen.width - 1200,
            largo: screen.height - 800
        });

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
