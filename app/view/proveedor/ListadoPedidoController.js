Ext.define('backoffice.view.proveedor.ListadoPedidoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.proveedor-listadopedido',
    onClickNuevo: function () {
        try {
            let me = tools.Util.getById('contentPanelPedidoProveedor');
            let buttonExcel = tools.Util.getById('buttonExcel');
            let buttonExcelBifo = tools.Util.getById('buttonExcelBifo');
            let buttonExcelMono = tools.Util.getById('buttonExcelMono');
            let buttonExcelMont = tools.Util.getById('buttonExcelMont');
            buttonExcel.hide();
            buttonExcelBifo.hide();
            buttonExcelMono.hide();
            buttonExcelMont.hide();

            console.log(buttonExcel);
            let l = me.getLayout();
            l.setActiveItem(1);


        } catch (error) {
            console.warn('ERROR EN CREAR Pedido proveedor');
        }
    },
    onClickEditar: function (grid, rowIndex, colIndex) {
        var view = tools.Util.getById('contentPanelPedidoProveedor');
        let buttonExcel = tools.Util.getById('buttonExcel');
        let buttonExcelBifo = tools.Util.getById('buttonExcelBifo');
        let buttonExcelMono = tools.Util.getById('buttonExcelMono');
        let buttonExcelMont = tools.Util.getById('buttonExcelMont');
        buttonExcel.show();
        buttonExcelBifo.show();
        buttonExcelMono.show();
        buttonExcelMont.show();
        console.log(buttonExcel);
        view.mask('Cargando...');
        var record = grid.getStore().getAt(rowIndex);
        var store1 = tools.Util.getById('proveedor-ListadoTerminadoBifocal').getStore();
        var store2 = tools.Util.getById('proveedor-ListadoMonoSph1').getStore();
        var store3 = tools.Util.getById('proveedor-ListadoMonoSph2').getStore();
        var store4 = tools.Util.getById('proveedor-ListadoMonoCyl1').getStore();
        var store5 = tools.Util.getById('proveedor-ListadoMonoSphCyl1').getStore();
        var store6 = tools.Util.getById('proveedor-ListadoMonoSphCyl2').getStore();
        var store7 = tools.Util.getById('proveedor-ListadoMontura').getStore();
        var servicio = Ext.create('servicePedido');

        servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailbifo/findbyorder/' + record.data.idorder).then((resultado) => {
            store1.getProxy().data = resultado.data;
        });
        servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmonosphplus/findbyorder/' + record.data.idorder).then((resultado) => {
            store2.getProxy().data = resultado.data;
        });
        store3.getProxy().data = servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmonosphless/findbyorder/' + record.data.idorder).then((resultado) => {
            store3.getProxy().data = resultado.data;
        });
        store4.getProxy().data = servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmonocylless/findbyorder/' + record.data.idorder).then((resultado) => {
            store4.getProxy().data = resultado.data;
        });
        store5.getProxy().data = servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmonosphpluscylless/findbyorder/' + record.data.idorder).then((resultado) => {
            store5.getProxy().data = resultado.data;
        });
        store6.getProxy().data = servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmonosphlesscylless/findbyorder/' + record.data.idorder).then((resultado) => {
            store6.getProxy().data = resultado.data;
        });
        store7.getProxy().data = servicio.listarTablasPedido(Ext.manifest.api + 'orderdetailmount/findbyorder/' + record.data.idorder).then((resultado) => {
            store7.getProxy().data = resultado.data;
            let store = []
            store.push(store1, store2, store3, store4, store5, store6, store7);
            tools.Util.setHeaderAuthArray(store);

            view.unmask();

        });
        let f = tools.Util.getById('formcolumn');
        let f2 = tools.Util.getById('formcolumn2');
        f.getForm().reset();
        f2.getForm().reset();
        f.loadRecord(record);
        f2.loadRecord(record);
        let l = view.getLayout();
        l.setActiveItem(1);
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        var me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _idorder = _record.get('idorder');
                    let _url = Ext.manifest.api + 'order/' + _idorder;
                    let _resp = tools.Util.getAjaxOnlyToken({ enable: 0 }
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    if (_resp) {
                        let store = tools.Util.getById('dgvOrder').getStore();
                        store.load();

                    }
                }
            }
        );
    },
    onKeyPressName: function (obj, e, eOpts) {
        me = this;
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvOrder').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'order/name/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'order',
                store.load();
        }
    },
    onKeyPressDocument: function (obj, e, eOpts) {
        me = this;
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvOrder').getStore();
        if (e.getKey() == 13 && obj.getValue().length > 0) {
            store.getProxy().url = Ext.manifest.api + 'order/document/' + dato,
                store.load();
        } else if (e.getKey() == 13 && obj.getValue().length == 0) {
            store.getProxy().url = Ext.manifest.api + 'order',
                store.load();
        }
    },
    onClickFiltrarFecha: function (e) {
        me = this;
        let data1 = tools.Util.getById('date1').getValue();
        let data2 = tools.Util.getById('date2').getValue();
        let date1 = Ext.Date.format(data1, 'Y-m-d');
        let date2 = Ext.Date.format(data2, 'Y-m-d');

        let store = tools.Util.getById('dgvOrder').getStore();
        store.getProxy().url = Ext.manifest.api + 'orderdate/';
        store.load({
            params: {
                date1: date1,
                date2: date2
            },

        });


    },

});
