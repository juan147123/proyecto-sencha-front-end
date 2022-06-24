Ext.define('backoffice.view.contacto.ListadoClienteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-listadocliente',
    onClickNuevo:function(b){
      try {
          let view = tools.Util.getById('panelContacto').getLayout(); 
          let form   = tools.Util.getById('cliente-registro');
          form.getForm().reset();
          view.setActiveItem(1);
      } catch (error) {
          console.warn(error);  
      }
    },
    onClick_Editar:function(grid, rowIndex, colIndex){
      let record = grid.getStore().getAt(rowIndex);
      let form   = tools.Util.getById('cliente-registro');
      form.getForm().reset();
      form.loadRecord(record);
      let panel = tools.Util.getById('panelContacto');
      let view  = panel.getLayout();
      view.setActiveItem(1);
    },
    onKeyPressDocument:function(obj, e, eOpts){
      let dato = obj.getValue().trim();
      let store = tools.Util.getById('dgvClientes').getStore();
      if(e.getKey()==13 && obj.getValue().length>0){
          store.getProxy().url = Ext.manifest.api +  'client/document/'+ dato,
          store.load();
      }else if(e.getKey()==13 && obj.getValue().length==0){
          store.getProxy().url = Ext.manifest.api +  'client',
          store.load();
      }
    },
    onKeyPressName:function(obj, e, eOpts){
      let dato = obj.getValue().trim();
      let store = tools.Util.getById('dgvClientes').getStore();
      if(e.getKey()==13 && obj.getValue().length>0){
          store.getProxy().url = Ext.manifest.api +  'client/name/'+ dato,
          store.load();
      }else if(e.getKey()==13 && obj.getValue().length==0){
          store.getProxy().url = Ext.manifest.api +  'client',
          store.load();
      }
    },
    onClickExcel: function (b) {
      let store = tools.Util.getById('dgvClientes').getStore();
      let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
        store: store,
        renderTo: Ext.getBody(),
        columns: [
          {
            dataIndex: 'datos',
            header: 'Cliente',
            align: 'left',
        },
       
        {
            dataIndex: 'number_document',
            header: 'Documento',
            align: 'left',
            renderer: function (value, metadata, record) {
              if(record.get('type_document')){
                  return record.get('type_document').description;
              }   
              else{
                  return '';
              }
          }
        },
        {
            dataIndex: 'number_document',
            header: 'Documento',
            align: 'center',
        },
        {
            dataIndex: 'cell_phone',
            header: 'Telefono',
            align: 'center',
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'credit_line',
            header: 'Linea de Credito',
            align: 'right',
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'avaible_credit',
            header: 'Credito Actual',
            align: 'right',
        },

        {
            dataIndex: 'enabletext',
            header: 'Estado',
            align: 'right',
        },
        ]
      }
      );
      gridexcel.export(tools.Util.getGenerateUUID() + 'ListadoCliente');
      gridexcel.destroy();
    }

});
