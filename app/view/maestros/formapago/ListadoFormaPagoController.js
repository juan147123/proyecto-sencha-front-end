Ext.define('backoffice.view.maestros.formapago.ListadoFormaPagoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-formapago-listadoformapago',
    onClickNuevo: function (b) {
        /*obj = {
          animateTarget: b,
          title : 'Nuevo Cliente'
        };
        tools.Util.getWindowPopup('contacto.FormCliente',obj);*/
        let f = tools.Util.getById('form-formapago');
        f.getForm().reset();
        let me = tools.Util.getById('panelFormaPago').getLayout();
        me.setActiveItem(1);
    },
    onClickEditar:function(grid, rowIndex, colIndex){
      let record = grid.getStore().getAt(rowIndex);
      let f = tools.Util.getById('form-formapago');
      f.getForm().reset();
      f.loadRecord(record);
      let me = tools.Util.getById('panelFormaPago');
      let l  = me.getLayout();
      l.setActiveItem(1);   
    },
    onClickAnular: function(grid, rowIndex, colIndex) {
      me = this;
      Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
      function (btn) {
              if (btn === 'yes') {
                  let _record = grid.getStore().getAt(rowIndex);
                  let _url  = Ext.manifest.api+'methodpay/'+ _record.get('idmethodpay');
                  _record.set("enable",0);
                  let _resp = tools.Util.getAjaxOnlyToken(_record.data
                  ,_url,'DELETE',tools.Jwt.getBearer());
                  let _store  = tools.Util.getById('dgvFormaPago').getStore();
                  _store.load();
              }
          }
      );
  },
  onClickExcel: function (b) {
    let store = tools.Util.getById('dgvFormaPago').getStore();
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
    gridexcel.export(tools.Util.getGenerateUUID() + 'FormaPago');
    gridexcel.destroy();
  }

});
