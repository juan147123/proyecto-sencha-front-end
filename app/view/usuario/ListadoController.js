Ext.define('backoffice.view.usuario.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario-listado',
    
  onClickNuevo: function (b) {
    let f = tools.Util.getById('usuarioregistro');
    f.getForm().reset();
    let me = tools.Util.getById('contentPanelusuario').getLayout();
    me.setActiveItem(1);
},
onClickEditar:function(grid, rowIndex, colIndex){
  let record = grid.getStore().getAt(rowIndex);
  let f = tools.Util.getById('usuarioregistro');
  f.getForm().reset();
  f.loadRecord(record);
  let me = tools.Util.getById('contentPanelusuario');
  let l  = me.getLayout();
  l.setActiveItem(1);   
},
onClickAnular: function(grid, rowIndex, colIndex) {
  me = this;
  Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
  function (btn) {
          if (btn === 'yes') {
              let _record = grid.getStore().getAt(rowIndex);
              let _url  = Ext.manifest.api+'user/'+ _record.get('id');
              _record.set("enable",0);
              let _resp = tools.Util.getAjaxOnlyToken(_record.data
              ,_url,'DELETE',tools.Jwt.getBearer());
              let _store  = tools.Util.getById('dgvUsuario').getStore();
              _store.load();
          }
      }
  );
},

});
