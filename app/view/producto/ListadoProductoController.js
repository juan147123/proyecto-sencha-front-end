Ext.define('backoffice.view.producto.ListadoProductoController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.listado-producto',

  onClickNuevo: function (b) {
    let f = tools.Util.getById('form-producto');
    f.getForm().reset();
    let me = tools.Util.getById('panelProducto').getLayout();
    me.setActiveItem(1);
  },
  onClickEditar: function (grid, rowIndex, colIndex) {
    let record = grid.getStore().getAt(rowIndex);
    let f = tools.Util.getById('form-producto');
    f.getForm().reset();
    f.loadRecord(record);
    let me = tools.Util.getById('panelProducto');
    let l = me.getLayout();
    l.setActiveItem(1);
  },
  onClickAnular: function (grid, rowIndex, colIndex) {
    me = this;
    Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
      function (btn) {
        if (btn === 'yes') {
          let _record = grid.getStore().getAt(rowIndex);
          console.log(_record);
          let _url = Ext.manifest.api + 'product/' + _record.get('idproduct');
          _record.set("enable", 1);
          tools.Util.getAjaxOnly({"enable":1}
            , _url, 'DELETE');
          let _store = tools.Util.getById('dgvProducto').getStore();
          _store.load();
        }
      }
    );
  },
});
