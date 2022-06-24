Ext.define('backoffice.view.inventario.DetalleReposicionController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.inventario-detallereposicion',
  onClickCerrarDetalleReposicion: function (b) {
    tools.Util.getById('panelAlmacenCentral')
      .getLayout()
      .setActiveItem(0);
  },
  onClickEnviarDetalleReposicion: function () {
    var me = this;
    Ext.Msg.confirm(Ext.manifest.AppName, '¿Desea enviar los datos?',
      function (btn) {
        let service = Ext.create('serviceinventario');
        var id = Ext.ComponentQuery.query('#idreplacementdetail')[1].getValue();
        if (btn === 'yes') {
          service.findAmountSend(id).then(function (content) {
            var contador = 0;
            for (var i = 0; i < content.data.count; i++) {
              if (content.data.data[i].amount_send == 0) {
                contador++;
              }
            }
            if (contador == 0) {
              service.EditStatusReplacement(id, 3).then(function (content) {
                me._reloadStoreReplacement();
                me._changeviewPanelAlmacenCentral();
                tools.Util.setToast("", Ext.manifest.msgOk, 0);
              });
            } else {
              tools.Util.setToast("", "Debe ingresar minimo una unidad para el envío.", 1);
            };
          });
        }
      }
    );
  },
  _reloadStoreReplacement: function () {
    let store = tools.Util.getStoreById('stReplacement')
    store = tools.Util.setHeaderAuth(store);
    store.getProxy().url = Ext.manifest.api + 'replacement';
    store.load();
  },
  _changeviewPanelAlmacenCentral: function () {
    tools.Util.getById('panelAlmacenCentral')
      .getLayout()
      .setActiveItem(0);
  },
});
