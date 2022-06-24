Ext.define('backoffice.view.cotizacion.ListadoCotizacionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cotizacion-listadocotizacion',
    onClickNuevo: function (b) {
        let f = tools.Util.getById('cotizacion-registro');
        f.getForm().reset();
        tools.Util.getById('dgvDetCotizacion')
        .getStore()
        .removeAll();
        let me = tools.Util.getById('contentPanelCotizacion').getLayout();
        me.setActiveItem(1);
    },
    onClick_Editar: function (grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let form = tools.Util.getById('cotizacion-registro');
        form.getForm().reset();
        form.loadRecord(record);
        let servicio = Ext.create('servicecotizacion');
        servicio.buscarDetalle(record.get('idquotation')).then((resultado) => {
            let grid = tools.Util.getById('dgvDetCotizacion');
            let store = grid.getStore();
            Ext.each(resultado.data.data, function (record) {
                let item = {
                    "idproduct": record['idproduct'],
                    "descripcion": record['description'],
                    "add": record['add'],
                    "cantidad": record['quantity'],
                    "precio": record['price'],
                    "total": record['total'],
                }
                store.insert(store.getCount() + 1, item);
            });

            grid.getView().refresh();
        });
        let panel = tools.Util.getById('contentPanelCotizacion');
        let view = panel.getLayout();
        view.setActiveItem(1);
        tools.Util.getById('dgvDetCotizacion')
        .getStore()
        .removeAll();
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _idproduct = _record.get('idquotation');
                    let _url = Ext.manifest.api + 'quotation/' + _idproduct;
                    let _resp = tools.Util.getAjaxOnlyToken({enable:0}
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    tools.Util.getById('dgvCotizacion').getStore().load(
                        {
                            params: {
                                idstore:0,
                                idcorrelative:0, 
                                idemployee :0,
                            },
                        }
                    );
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvCotizacion').getStore();
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
                    width:250,
                },
                {
                    dataIndex: 'number_document',
                    header: 'Ruc',
                    align: 'center',
                },
                {
                    dataIndex: 'date_issue',
                    header: 'Creacion',
                    xtype: 'datecolumn',
                    format:'d/m/Y',
                    align: 'center',
                },
                {
                    dataIndex: 'delivery_date',
                    header: 'Vencimiento',
                    xtype: 'datecolumn',
                    format:'d/m/Y',
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
        gridexcel.export(tools.Util.getGenerateUUID() + 'Cotizacion');
        gridexcel.destroy();
    },
    onClickFiltrarFecha: function (e) {
        let data1 = tools.Util.getById('date1').getValue();
        let data2 = tools.Util.getById('date2').getValue();
        let date1 = Ext.Date.format(data1, 'Y-m-d');
        let date2 = Ext.Date.format(data2, 'Y-m-d'); 

        tools.Util.getById('dgvCotizacion').getStore().load({
            params : {
                date1: date1,
                date2: date2
            }
        });

    },
    onKeyPressDocumentCotizacion: function (obj, e, eOpts) {
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvCotizacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation/documentcotizacion/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation',
                store.load();
        }
    },
    onKeyPressDocument: function (obj, e, eOpts) {
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvCotizacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation/document/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation',
                store.load();
        }
    },
    onKeyPressName: function (obj, e, eOpts) {
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvCotizacion').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation/name/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'quotation',
                store.load();
        }
    },




    });
