Ext.define('backoffice.view.venta.FacturacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.venta-facturacion',
    onClickBuscarProducto: function (b) {
        tools.Util.getWindowPopup('venta.BuscarProducto', {
            ancho: screen.width - 200,
            largo: screen.height - 200
        });
    },
    onClickCancelar: function () {
        try {
            let me = tools.Util.getById('panelVentas');
            let l = me.getLayout();
            l.setActiveItem(0);
        } catch (error) {
            console.warn('ERROR EN VOLVER LA LISTADO');
        }

    },
    _crearJsonDetalle(store) {
        var detalle = [];
        store.each(function (record) {
            r = {
                "idproduct": record.get("idproduct"),
                "descripcion": record.get("descripcion"),
                "add": record.get("add"),
                "cantidad": record.get("cantidad"),
                "precio": record.get("precio"),
                "impuesto": record.get("impuesto"),
                "total": record.get("total"),
            }
            detalle.push(r);
        });

        return JSON.stringify(detalle);

    },
    onClickGuardar: function (b) {
        let me = this;
        let form = me.getView().getForm();
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        } else if (!form.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }
        me = this;
        let detalle = tools.Util.getById('dgvDetVentas').getStore();
        if (detalle.getCount()) {
            let jsonText = me._crearJsonDetalle(detalle);
            Ext.Msg.confirm("Generar venta", "Se procedera a generar la venta, esta seguro?", function (b) {
                if (b == 'yes') {
                    me._GenerarSolicitud(jsonText);
                    let store = tools.Util.getById('dgvVentas').getStore();
                    store.load();
                    let panel = tools.Util.getById('panelVentas');
                    let l = panel.getLayout();
                    l.setActiveItem(0);
                    tools.Util.setToast("", Ext.manifest.msgEnviando, 0);
                    let f = tools.Util.getById('venta-facturacion');
                    f.reset();

                }
            }, this);

        }

    },
    _GenerarSolicitud: function (jsonText) {
        var me = this;
        _id = tools.Util.getById('idsalesF').getValue()
        if (jsonText) {
            Ext.Ajax.request({
                url: (_id != 0 ? Ext.manifest.api + 'sales/' + _id.toString() : Ext.manifest.api + 'sales'),
                jsonData: {
                    "idsales": tools.Util.getById('idsalesF').getValue(),
                    "idstore": tools.Util.getById('idstoreF').getValue(),
                    "idcorrelative": tools.Util.getById('idcorrelativeF').getValue(),
                    "idtype_document": tools.Util.getById('idtype_documentF').getValue(),
                    "iddocument_sales": tools.Util.getById('iddocument_salesF').getValue(),
                    "number_document": tools.Util.getById('number_documentF').getValue(),
                    "businessname": tools.Util.getById('businessnameF').getValue(),
                    "address": tools.Util.getById('addressF').getValue(),
                    "phone": tools.Util.getById('phoneF').getValue(),
                    "date_issue": tools.Util.getById('date_issueF').getValue(),
                    "delivery_date": tools.Util.getById('delivery_dateF').getValue(),
                    "delivery_time": tools.Util.getById('delivery_timeFac').getRawValue(),
                    "idmethodpay": tools.Util.getById('idmethodpayFac').getValue(),
                    "idcoin": tools.Util.getById('idcoinF').getValue(),
                    "exchange_type": tools.Util.getById('exchange_typeF').getValue(),
                    "idemployee": tools.Util.getById('idemployeeF').getValue(),
                    "subtotal": tools.Util.getById('subtotal2F').getValue(),
                    "igv": tools.Util.getById('igv2F').getValue(),
                    "total": tools.Util.getById('total2F').getValue(),
                    "delanto": tools.Util.getById('delanto2F').getValue(),
                    "saldo": tools.Util.getById('saldo2F').getValue(),
                    "notes": tools.Util.getById('notes2F').getValue(),
                    "enable": 1,
                    "detail": jsonText
                },
                method: _id != 0 ? 'PUT' : 'POST',
                async: false,
                cors: true,
                defaultHeaders: {
                    'Authorization': tools.Jwt.getBearer(),
                    'Content-Type': 'application/json;charset=utf-8'
                },
                success: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                    if (data.data.idsales != 0) {
                        tools.Util.getById('dgvDetVentas')
                            .getStore()
                            .load();

                    };
                    if (_id == 0) {
                        url = Ext.manifest.apiFe + data.data.idsales;
                        respuesta = tools.Util.getAjaxOnly('', url, 'GET');
                        if (respuesta) {
                            me._onClickPdf(data.data.idsales);
                            let json = {
                                "estadofe": respuesta.estado,
                                "observacionfe": respuesta.observacion
                            };

                            url = Ext.manifest.api + 'sales/respuestafe/' + data.data.idsales
                            accres = tools.Util.getAjaxOnlyToken(json, url, 'PUT', tools.Jwt.getBearer());
                            
                        }
                    }
                },

                failure: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                }
            });

        }
    },
    _onClickPdf: function (idsales) {
        let pdf = Ext.manifest.ticket + idsales.toString();
        tools.Util.getWOpenPrint(pdf, "Ticket " + idsales);
    },
    onEditCantidadPrecio: function (editor, e) {
        var precio = e.record.get('precio');
        var cantidad = e.record.get('cantidad');
        var total = precio * cantidad;
        e.record.set('total', Ext.Number.toFixed(total, 2));
        this._calcularTotales(tools.Util.getById('dgvDetVentas').getStore());
    },
    _calcularTotales: function (store) {
        var subtotal2 = 0;
        var igv2 = 0;
        var total2 = 0;
        store.each(function (record) {
            subtotal2 += record.get('total');
        });
        igv2 = (subtotal2 * tools.Util.getIgv());
        total2 = igv2 + subtotal2;
        tools.Util.getById('subtotal2F').setValue(Ext.Number.toFixed(subtotal2, 2));
        tools.Util.getById('igv2F').setValue(Ext.Number.toFixed(igv2, 2));
        tools.Util.getById('total2F').setValue(Ext.Number.toFixed(total2, 2));
        delanto = tools.Util.getById('delanto2F').getValue();
        saldo = total2 - delanto;
        tools.Util.getById('saldo2F').setValue(Ext.Number.toFixed(saldo, 2));
    },
    onKeyPressCalcularDelanto: function (obj, e, eOpts) {
        let total2 = tools.Util.getById('total2F').getValue();
        if (e.getKey() == 13) {
            let delanto2 = obj.getValue();
            if (delanto2 <= total2) {
                let saldo2 = total2 - delanto2;
                tools.Util.getById('saldo2F').setValue(saldo2);
            } else {
                tools.Util.setToast('Error!', '   Debe digitar un monto correcto para delanto.', 1);
            }
        }
    },
    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        var view = tools.Util.getById('venta-facturacion');
        let tipo = tools.Util.getById("idtype_documentF").getValue();
        let service = Ext.create('serviceventa');
        if (tipo) {
            if (e.getKey() == 13) {
                view.mask('....espere');
                this._validacion(tipo, obj.getValue(), view);
                service.buscarCliente(obj.getValue()).then(function (content) {
                    if (content.status_code != 200) {
                        alert("error");
                        return false;
                    }
                    if (content.data.data.length != 0) {
                        view.unmask();
                        tools.Util.getById("idtype_documentF").setValue(content.data.data[0]['idtype_document']);
                        tools.Util.getById('number_documentF').setValue(content.data.data[0]['number_document']);
                        tools.Util.getById('addressF').setValue(content.data.data[0]['address']);
                        tools.Util.getById('phoneF').setValue(content.data.data[0]['cell_phone']);
                        if (content.data.data[0]['name'] != null || content.data.data[0]['name'] != undefined) {

                            tools.Util.getById("businessnameF").setValue(
                                content.data.data[0]['name'],
                                '',
                                content.data.data[0]['lastname']
                            );
                        } else {
                            tools.Util.getById("businessnameF").setValue(
                                content.data.data[0]['businessname'])
                        }
                    } else {
                        view.unmask();
                        Ext.Msg.confirm(Ext.manifest.AppName, 'El documento del cliente no se encuentra registrado o no existe ¿desea agregarlo?',
                            function (btn) {
                                if (btn === 'yes') {
                                    tools.Util.getWindowPopup('contacto.modalCliente', {
                                        ancho: screen.width - 150,
                                        largo: screen.height - 150
                                    });
                                    tools.Util.getById('btnCancelar').setHidden(true);
                                    tools.Util.getById('btnCerrarPopup').setHidden(false);

                                }
                            }
                        );
                    }
                });
            }
        }
    },
    onClickBuscarDocumento: function (e) {
        var view = tools.Util.getById('venta-facturacion');
        let tipo = tools.Util.getById("idtype_documentF").getValue();
        let numero = tools.Util.getById("number_documentF").getValue();
        let service = Ext.create('serviceventa');
        if (tipo) {
            view.mask('....espere');
            this._validacion(tipo, numero, view);
            service.buscarCliente(numero).then(function (content) {
                if (content.status_code != 200) {
                    alert("error");
                    return false;
                }
                if (content.data.data.length != 0) {
                    view.unmask();
                    tools.Util.getById("idtype_documentF").setValue(content.data.data[0]['idtype_document']);
                    tools.Util.getById('number_documentF').setValue(content.data.data[0]['number_document']);
                    tools.Util.getById('addressF').setValue(content.data.data[0]['address']);
                    tools.Util.getById('phoneF').setValue(content.data.data[0]['cell_phone']);
                    if (content.data.data[0]['name'] != null || content.data.data[0]['name'] != undefined) {

                        tools.Util.getById("businessnameF").setValue(
                            content.data.data[0]['name'],
                            '',
                            content.data.data[0]['lastname']
                        );
                    } else {
                        tools.Util.getById("businessnameF").setValue(
                            content.data.data[0]['businessname'])
                    }
                } else {
                    view.unmask();
                    Ext.Msg.confirm(Ext.manifest.AppName, 'El documento del cliente no se encuentra registrado o no existe ¿desea agregarlo?',
                        function (btn) {
                            if (btn === 'yes') {
                                tools.Util.getWindowPopup('contacto.modalCliente', {
                                    ancho: screen.width - 150,
                                    largo: screen.height - 150
                                });
                                tools.Util.getById('btnCancelar').setHidden(true);
                                tools.Util.getById('btnCerrarPopup').setHidden(false);

                            }
                        }
                    );
                }
            });
        }
    },
    _validacion: function (tipo, numero, view) {
        if (tipo == null) {
            view.unmask();
            return tools.Util.setToast('Vacio', '   Debe seleccionar un tipo de documento', 1);
        }
        else if (numero == "") {
            view.unmask();
            return tools.Util.setToast('Vacio', '   Debe digitar un número de documento', 1);
        }
    },
    onSelectedDocument: function (combo, record, eOpts) {
        cbo = tools.Util.getById('idcorrelativeF');
        let modelos = cbo.getStore();
        cbo.setRawValue('');
        id = combo.getValue().toString();
        modelos.getProxy().url = Ext.manifest.api + 'correlative/documentsales/' + id;
        modelos.load();
        cbotype = tools.Util.getById('idtype_documentF');
        let typedocument = cbotype.getStore();
        if (id == 5) {
            /* docuemnto ruc si es factura */
            cbotype.setRawValue('');
            typedocument.getProxy().url = Ext.manifest.api + 'typedocument/findByName/ruc';
            typedocument.load();
        } else {
            cbotype.setRawValue('');
            typedocument.getProxy().url = Ext.manifest.api + 'typedocument';
            typedocument.load();
        }
    },


});
