Ext.define('backoffice.view.maestros.index.ListadoIndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-index-listadoindex',
    onClickNuevo: function (b) {
        let f = tools.Util.getById('form-index');
        f.getForm().reset();
        let me = tools.Util.getById('panelIndice').getLayout();
        me.setActiveItem(1);
    },

    onClickEditar: function (grid, rowIndex, colIndex) {

        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('form-index');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('panelIndice');
        let l = me.getLayout();
        l.setActiveItem(1);

    },

    onClickAnular: function (grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url = Ext.manifest.api + 'index/' + _record.get('idindex');
                    _record.set("enable", 0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    let _store = tools.Util.getById('dgvIndex').getStore();
                    _store.load();
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvIndex').getStore();
        let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
            store: store,
            renderTo: Ext.getBody(),
            columns: [
                {
                    dataIndex: 'description',
                    header: 'Descripcion',
                    align: 'left',
                },

                {
                    dataIndex: 'enabletext',
                    header: 'Estado',
                    align: 'right',

                },
            ]
        }
        );
        gridexcel.export(tools.Util.getGenerateUUID() + 'Indice');
        gridexcel.destroy();
    }
});
