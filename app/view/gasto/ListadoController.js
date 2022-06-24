Ext.define('backoffice.view.gasto.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gasto-listado',
    onBeforeActivate:function(){
        let data1 = tools.Util.getById('date1').getValue();
        let data2 = tools.Util.getById('date2').getValue();
        let date1 = Ext.Date.format(data1, 'Y-m-d');
        let date2 = Ext.Date.format(data2, 'Y-m-d'); 

        tools.Util.getById('dgvGasto').getStore().load({
            params : {
                date1: date1,
                date2: date2
            }
        });

    },
    onClickNuevo: function (b) {
            let f = tools.Util.getById('gasto-registro');
            f.getForm().reset();
            let me = tools.Util.getById('contentPanelGastos');
            me.setActiveItem(1);  
    },
    onClickEditar: function (grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('gasto-registro');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('contentPanelGastos');
        let l = me.getLayout();
        l.setActiveItem(1);
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url = Ext.manifest.api + 'spent/' + _record.get('idspent');
                    _record.set("enable", 0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    let _store = tools.Util.getById('dgvGasto').getStore();
                    _store.load();
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvGasto').getStore();
        let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
            store: store,
            renderTo: Ext.getBody(),
            columns: [
                {
                    dataIndex: 'date',
                    header: 'Fecha',
                    width: 100,
                    align: 'left',
                },
                {
                    dataIndex: 'description',
                    header: 'Descripcion',
                    align: 'left',
                    width: 400,
                },

                {
                    dataIndex: 'amount',
                    header: 'Monto',
                    align: 'center',
                },
            ]
        }
        );
        gridexcel.export(tools.Util.getGenerateUUID() + 'Gasto');
        gridexcel.destroy();
    },
    onClickFiltrarFecha: function (e) {
        let data1 = tools.Util.getById('date1').getValue();
        let data2 = tools.Util.getById('date2').getValue();
        let date1 = Ext.Date.format(data1, 'Y-m-d');
        let date2 = Ext.Date.format(data2, 'Y-m-d'); 

        tools.Util.getById('dgvGasto').getStore().load({
            params : {
                date1: date1,
                date2: date2
            }
        });

    },


});
