Ext.define('backoffice.view.contacto.ListadoPersonalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-listadopersonal',
    onClickNuevo: function (b) {
        try {
            let view = tools.Util.getById('panelPersonal').getLayout();
            let form = tools.Util.getById('personal-registro');
            form.getForm().reset();
            view.setActiveItem(1);
        } catch (error) {
            console.warn(error);
        }

    },
    onClick_Editar: function (grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let form = tools.Util.getById('personal-registro');
        form.getForm().reset();
        form.loadRecord(record);
        let panel = tools.Util.getById('panelPersonal');
        let view = panel.getLayout();
        view.setActiveItem(1);
    },
    onKeyPressDocument: function (obj, e, eOpts) {
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvPersonal').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'employee/document/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'employee',
                store.load();
        }
    },
    onKeyPressName: function (obj, e, eOpts) {
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvPersonal').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'employee/name/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'employee',
                store.load();
        }
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url = Ext.manifest.api + 'employee/' + _record.get('idemployee');
                    _record.set("enable", 0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    let _store = tools.Util.getById('dgvPersonal').getStore();
                    _store.load();
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvPersonal').getStore();
        let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
            store: store,
            renderTo: Ext.getBody(),
            columns: [
                {
                    dataIndex: 'datos',
                    header: 'Personal',
                    width:250,
                    align : 'left',
                },
                {
                    dataIndex: 'tipodocumento',
                    header: 'Tipo de Documento',
                    align: 'left',
                },
                {
                    dataIndex: 'number_document',
                    header: 'Documento',
                    align : 'left',
                },
                {
                    dataIndex: 'cell_phone',
                    header: 'Celular',
                    align : 'center',
                },
                {
                    dataIndex: 'job_title',
                    header: 'Titulo',
                    align : 'left',
                },
                {
                    dataIndex: 'address',
                    header: 'Dirección',
                    width:300,
                    align : 'left',
                },
                {
                    dataIndex: 'enabletext',
                    header: 'Estado',
                    align: 'left',
                },
            ]
        }
        );
        gridexcel.export(tools.Util.getGenerateUUID() + 'ListadoPersonal');
        gridexcel.destroy();
    }

});
