Ext.define('backoffice.view.maestros.tipo.ListadoTipoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-tipo-listadotipo',

    onClickNuevo: function (b) {
        let f = tools.Util.getById('form-tipo');
        f.getForm().reset();
        let me = tools.Util.getById('panelTipo').getLayout();
        me.setActiveItem(1);
    },

    onClickEditar:function(grid, rowIndex, colIndex){
       
        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('form-tipo');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('panelTipo');
        let l  = me.getLayout();
        l.setActiveItem(1);   

    },

    onClickAnular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'type/'+ _record.get('idtype');
                    _record.set("enable",0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                    ,_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvType').getStore();
                    _store.load();
                }
            }
        );
    },
    onClickExcel: function (b) {
        let store = tools.Util.getById('dgvType').getStore();
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
        gridexcel.export(tools.Util.getGenerateUUID() + 'Tipo');
        gridexcel.destroy();
      }

});
