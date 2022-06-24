Ext.define('backoffice.view.cotizacion.CotizacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cotizacion-listado',
    onClickBuscarProducto: function (b) {
        tools.Util.getWindowPopup('cotizacion.BuscarProducto', {
            ancho: screen.width - 200,
            largo: screen.height - 200
        });
    },
    onClickCancelar: function () {
        try {
            let me = tools.Util.getById('contentPanelCotizacion');
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
        let detalle = tools.Util.getById('dgvDetCotizacion').getStore();

        if (detalle.getCount()) {
            let jsonText = me._crearJsonDetalle(detalle);
            Ext.Msg.confirm("Generar Cotización", "Se procedera a la creacion de la cotización, esta seguro?", function (b) {
                if (b == 'yes') {
                    me._GenerarSolicitud(jsonText);
                    let store = tools.Util.getById('dgvCotizacion').getStore();
                    store.load();
                    let panel = tools.Util.getById('contentPanelCotizacion');
                    let l = panel.getLayout();
                    l.setActiveItem(0);
                    tools.Util.setToast("", Ext.manifest.msgEnviando, 0);
                    let f = tools.Util.getById('cotizacion-registro');
                    f.reset();

                }
            }, this);

        }

    },

    _GenerarSolicitud: function (jsonText) {
        me = this;
        _id = tools.Util.getById('idquotation').getValue()
        if (jsonText) {
            Ext.Ajax.request({
                url: (_id!=0? Ext.manifest.api + 'quotation/'+ _id.toString(): Ext.manifest.api+'quotation'),
                jsonData: {
                    "idquotation": tools.Util.getByName('idquotation').getValue(),
                    "idstore": tools.Util.getByName('idstore').getValue(),
                    "idtype_document": tools.Util.getByName('idtype_document').getValue(),
                    "number_document": tools.Util.getByName('number_document').getValue(),
                    "businessname": tools.Util.getByName('businessname').getValue(),
                    "address": tools.Util.getByName('address').getValue(),
                    "phone": tools.Util.getByName('phone').getValue(),
                    "date_issue": tools.Util.getByName('date_issue').getValue(),
                    "delivery_date": tools.Util.getByName('delivery_date').getValue(),
                    "delivery_time": tools.Util.getByName('delivery_time').getRawValue(),
                    "idmethodpay": tools.Util.getByName('idmethodpay').getValue(),
                    "idcoin": tools.Util.getByName('idcoin').getValue(),
                    "exchange_type": tools.Util.getByName('exchange_type').getValue(),
                    "idemployee": tools.Util.getByName('idemployee').getValue(),
                    "subtotal": tools.Util.getByName('subtotal').getValue(),
                    "igv": tools.Util.getByName('igv').getValue(),
                    "total": tools.Util.getByName('total').getValue(),
                    "delanto": tools.Util.getByName('delanto').getValue(),
                    "saldo": tools.Util.getByName('saldo').getValue(),
                    "notes": tools.Util.getByName('notes').getValue(),
                    "enable": 1,
                    "detail": jsonText
                },
                method: _id!=0? 'PUT': 'POST',
                async: false,
                cors: true,
                defaultHeaders: {
                    'Authorization': tools.Jwt.getBearer(),
                    'Content-Type': 'application/json;charset=utf-8'
                },
                success: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                    if (data.data.idquotation != 0) {
                        tools.Util.getById('dgvDetCotizacion')
                            .getStore()
                            .load();
                    }
                },

                failure: function (response, opts) {
                    data = Ext.JSON.decode(response.responseText);
                }
            });

        }
    },
    onEditCantidadPrecio: function (editor, e) {
        var precio = e.record.get('precio');
        var cantidad = e.record.get('cantidad');
        var total = precio * cantidad;
        e.record.set('total', Ext.Number.toFixed(total, 2));
        this._calcularTotales(tools.Util.getById('dgvDetCotizacion').getStore());
    },
    _calcularTotales: function (store) {
        var subtotal = 0;
        var igv = 0;
        var total = 0;
        store.each(function (record) {
            subtotal += record.get('total');
        });
        igv = subtotal - (subtotal * tools.Util.getIgv());
        total = igv + subtotal;
        tools.Util.getById('subtotal').setValue(Ext.Number.toFixed(subtotal, 2));
        tools.Util.getById('igv').setValue(Ext.Number.toFixed(igv, 2));
        tools.Util.getById('total').setValue(Ext.Number.toFixed(total, 2));
        delanto = tools.Util.getById('delanto').getValue();
        saldo = total - delanto;
        tools.Util.getById('saldo').setValue( Ext.Number.toFixed(saldo,2) );
    },

    onKeyPressCalcularDelanto: function (obj, e, eOpts) {
        let total = tools.Util.getByName('total').getValue();
        if (e.getKey() == 13) {
            let delanto = obj.getValue();
            if (delanto <= total) {
                let saldo = total - delanto;
                tools.Util.getByName('saldo').setValue(saldo);
            } else {
                tools.Util.setToast('Error!', '   Debe digitar un monto correcto para delanto.', 1);
            }
        }
    },

    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        var view = tools.Util.getById('cotizacion-registro');
        let tipo = tools.Util.getById("idtype_documentQD").getValue();
        let service = Ext.create('servicecotizacion');
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
                        if (content.data.data[0]['name'] != null || content.data.data[0]['name'] != undefined) {
                            tools.Util.getById("businessnameQD").setValue(
                                content.data.data[0]['name'],
                                '',
                                content.data.data[0]['lastname']
                            );
                            tools.Util.getById("idtype_documentQD").setValue(content.data.data[0]['idtype_document']);
                        } else {
                            tools.Util.getById("businessnameQD").setValue(
                                content.data.data[0]['businessname'])
                        }
                        tools.Util.getById("idtype_documentQD").setValue(content.data.data[0]['idtype_document']);
                        tools.Util.getById('number_documentQD').setValue(content.data.data[0]['number_document']);
                        tools.Util.getById('addressQD').setValue(content.data.data[0]['address']);
                        tools.Util.getById('phoneQD').setValue(content.data.data[0]['cell_phone']);
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
    onClickBuscarDocumento: function (obj, e, eOpts) {
        var view = tools.Util.getById('cotizacion-registro');
        let tipo = tools.Util.getById("idtype_documentQD").getValue();
        let service = Ext.create('servicecotizacion');
        let numero = tools.Util.getById("number_documentQD").getValue();
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
                    if (content.data.data[0]['name'] != null || content.data.data[0]['name'] != undefined) {
                        tools.Util.getById("businessnameQD").setValue(
                            content.data.data[0]['name'],
                            '',
                            content.data.data[0]['lastname']
                        );
                        tools.Util.getById("idtype_documentQD").setValue(content.data.data[0]['idtype_document']);
                    } else {
                        tools.Util.getById("businessnameQD").setValue(
                            content.data.data[0]['businessname'])
                    }
                    tools.Util.getById("idtype_documentQD").setValue(content.data.data[0]['idtype_document']);
                    tools.Util.getById('number_documentQD').setValue(content.data.data[0]['number_document']);
                    tools.Util.getById('addressQD').setValue(content.data.data[0]['address']);
                    tools.Util.getById('phoneQD').setValue(content.data.data[0]['cell_phone']);
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
    onTest: function () {
        me = this;
        let grid = tools.Util.getById('dgvDetCotizacion');
        let store = grid.getStore();
        let item = {
            descripcion: 'aa',
            add2: '',
            cantidad: 1,
            precio: 0,
            impuesto: 1,
            total: 1
        };
        store.insert(store.getCount() + 1, item);
        grid.getView().refresh();
        me._calcularTotales(store);
    },

});
