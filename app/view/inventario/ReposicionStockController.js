Ext.define('backoffice.view.inventario.ReposicionStockController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.inventario-reposicionstock',

  onClickIngresaPedidoAlamacen: function (grid, rowIndex) {
    let record = grid.getStore().getAt(rowIndex);
    tools.Util.getById('idreplacementUPDATE').setValue(record.data.idreplacement);
    tools.Util.getById('idinventory_statusUPDATE').setValue(record.data.inventory_status.idinventory_status);
    this._loadReplacementDetails(record);
    tools.Util.getById('panelReposicionStock')
      .getLayout()
      .setActiveItem(2);
  },
  onClickStock: function (b) {
    /**********************************************
     * Cargar los productos por tienda del usuario
     **********************************************/
    var view = tools.Util.getById('reposicion-stock');
    view.mask('....cargando');
    let grid = tools.Util.getById('dgvGeneraReposicionProductos');
    let store = grid.getStore();
    store.removeAll();
    let service = Ext.create('serviceinventario');
    service.CargarProductosTienda().then(function (content) {
      if (content.data.data) {
        view.unmask();
        Ext.each(content.data.data, function (reg) {
          let _registro = {
            idproduct: reg.idproduct,
            description: reg.description,
            stockmin: reg.stockmin,
            stockactual: reg.stockactual,
            request: 0,
          };
          store.add(_registro);
        });
      };

      tools.Util.getById('panelReposicionStock')
        .getLayout()
        .setActiveItem(1);
    });
  },
  onSelectEstado: function (combo, record, eOpts) {
    store.getProxy().url = Ext.manifest.api + 'replacement/status/' + parseInt(combo.getValue()),
      store.load();
  },
  onKeyPressNroPedido: function (obj, e, eOpts) {
    let dato = obj.getValue().trim();
    let store = tools.Util.getById('dgvReposicion').getStore();
    if (e.getKey() == 13 && obj.getValue().length > 0) {
      store.getProxy().url = Ext.manifest.api + 'replacement/' + parseInt(dato),
        store.load();
    } else if (e.getKey() == 13 && obj.getValue().length == 0) {
      store.getProxy().url = Ext.manifest.api + 'replacement',
        store.load();
    }

  },
  _loadReplacementDetails: function (record) {
    let status = record.data.inventory_status.idinventory_status;
    if (status != 3) {
      tools.Util.getById('btnGuardarReplacement').setHidden(true);
    } else {
      tools.Util.getById('btnGuardarReplacement').setHidden(false);
    }
    tools.Util.getById('dgvReplacementStockReceive').getStore().load({
      params: {
        idreplacement: record.data.idreplacement
      },
    });
  },

});
