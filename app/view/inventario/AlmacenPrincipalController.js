Ext.define('backoffice.view.inventario.AlmacenPrincipalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventario-almacenprincipal',
    onClickSalidaDePedido: function (b) {
        //  tools.Util.getById('btnEnviarPedido').setHidden(false);
        tools.Util.getById('panelAlmacenCentral')
            .getLayout()
            .setActiveItem(1);
    },
    onClickDetalleReposicion: function (grid, rowIndex) {
        let record = grid.getStore().getAt(rowIndex);
        this._validateStatusHideButton(record.data.inventory_status.idinventory_status);
        this._updateStatusReplacement(record.data.idreplacement, record.data.inventory_status.idinventory_status);
        this._loadReplacementDetails(record.data.idreplacement);
        this._loadstatusDetails(record.data.idreplacement);
        this._changeviewPanelAlmacenCentral();
        this._cargarDatosUsuarios(record.data.useradd);
        this._cargarDatosDetalleReplacement(record);
        this._reloadStoreReplacement();

    },

    _loadReplacementDetails: function (idreplacement) {
        Ext.ComponentQuery.query('#dgvDetalleProductosReplacement')[1].getStore().load({
            params: {
                idreplacement: idreplacement
            },
        });
    },
    _loadstatusDetails: function (idreplacement) {

        let store = tools.Util.getStoreById('stStateReplacement');
        store = tools.Util.setHeaderAuth(store);
        store.load({
            params: {
                idreplacement: idreplacement
            },
        });
    },

    _changeviewPanelAlmacenCentral: function () {
        tools.Util.getById('panelAlmacenCentral')
            .getLayout()
            .setActiveItem(2);
    },

    _cargarDatosUsuarios: function (iduser) {
        let service = Ext.create('serviceinventario');
        service.CargarDatosUsuario(iduser).then(function (content) {
            if (content.data[0].name != null) {
                Ext.ComponentQuery.query('#replaceuser')[1].setValue(content.data[0].name + '' + content.data[0].lastname);
            } else {
                Ext.ComponentQuery.query('#replaceuser')[1].setValue(content.data[0].businessname);
            }
            Ext.ComponentQuery.query('#replacemail')[1].setValue(content.data[0].email);
            Ext.ComponentQuery.query('#replacephone')[1].setValue(content.data[0].cell_phone);
        });
    },
    _cargarDatosDetalleReplacement: function (record) {
        Ext.ComponentQuery.query('#replacementdate')[1].setValue(record.data.date);
        Ext.ComponentQuery.query('#idreplacementdetail')[1].setValue(record.data.idreplacement);
        Ext.ComponentQuery.query('#replaceAddressStore')[1].setValue(record.data.store.address);
    },

    _updateStatusReplacement: function (id, data) {
        if (data == 1) {
            let service = Ext.create('serviceinventario');
            service.EditStatusReplacement(id, 2).then(function (content) {
            });
        }
    },

    _reloadStoreReplacement: function () {
        let store = tools.Util.getStoreById('stReplacement')
        store = tools.Util.setHeaderAuth(store);
        store.getProxy().url = Ext.manifest.api + 'replacement';
        store.load();
    },
    _validateStatusHideButton(status) {
        //pendiente a pulir
        let grid = tools.Util.getById('dgvDetalleProductosReplacement').getPlugin('roweditingIdreplacement');
        if (status == 3 || status == 4) {
            Ext.ComponentQuery.query('#btnsenddetails')[1].setHidden(true);
        /*     grid.disabled(); */
        } else {
            Ext.ComponentQuery.query('#btnsenddetails')[1].setHidden(false);
          /*   grid.enabled(); */
        }
       /*  console.log(); */
    }
});
