Ext.define('backoffice.view.inventario.GuiaEntradaAlmacenLocalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventario-guiaentradaalmacenlocal',
    onClickCerrarGuiaEntrada: function (b) {
        tools.Util.getById('panelReposicionStock')
            .getLayout()
            .setActiveItem(0);
    },

    onClickGuardarGuiaEntrada: function (b) {
        this._updateStatusReplacement();
    },

    onEditAmountReceived: function (grid, rowIndex) {
        let record = tools.Util.getById('dgvReplacementStockReceive').getStore().getAt(rowIndex.rowIdx);
        let service = Ext.create('serviceinventario');
        let id = record.data.id;
        let data = {
            'amount_recibed': record.data.amount_recibed,
            'id': record.data.id,
        };
        service.editDataReplacement(id, data);
    },

    _updateStatusReplacement: function () {
        var record = tools.Util.getById('dgvReplacementStockReceive').getStore();
        var service = Ext.create('serviceinventario');
        var me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, '¿Desea adicionar al stock la cantidad recibida?',
            function (btn) {
                if (btn === 'yes') {
                    me._AddStockProducts(record, service);
                    me._changeStateReplacement(service);
                }
            }
        );
    },

    _AddStockProducts: function (record, service) {
        if (record) {
            for (var i = 0; i < record.data.items.length; i++) {
                let data = {
                    "idproduct": record.data.items[i].data.idproduct,
                    "amount_recibed": record.data.items[i].data.amount_recibed
                };
                service.addStockProduct(data).then(function (content) { });
            }
        }
    },

    _changeStateReplacement(service) {
        let id = tools.Util.getById('idreplacementUPDATE').getValue();
        let idstatus = tools.Util.getById('idinventory_statusUPDATE').getValue();
        var me = this;
        if (idstatus == 3) {
            service.EditStatusReplacement(id, 4).then(function (content) {
                tools.Util.getById('panelReposicionStock')
                    .getLayout()
                    .setActiveItem(0);
                tools.Util.setToast("", Ext.manifest.msgPedidoIngresadoAlmacenLocal, 0);
                me. _loadStoreReplacement();
            });
        }
    },
    _loadStoreReplacement: function () {
        let store = tools.Util.getStoreById('stReplacement')
        store = tools.Util.setHeaderAuth(store);
        store.getProxy().url = Ext.manifest.api + 'replacement/store/' + tools.Jwt.getStore().toString(),
            store.load();
    }
});
