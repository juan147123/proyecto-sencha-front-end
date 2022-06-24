Ext.define('backoffice.view.contacto.ListadoProveedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-listadoproveedor',
    onClickNuevo:function(){
        let me = tools.Util.getById('panelProveedor').getLayout(); 
        me.setActiveItem(1);
    },
    onClick_Editar:function(grid, rowIndex, colIndex){
        let record = grid.getStore().getAt(rowIndex);
        let form   = tools.Util.getById('proveedor-registro');
        form.getForm().reset();
        form.loadRecord(record);
        let panel = tools.Util.getById('panelProveedor');
        let view  = panel.getLayout();
        view.setActiveItem(1);
      },
      onKeyPressDocument:function(obj, e, eOpts){
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvProveedor').getStore();
        if(e.getKey()==13 && obj.getValue().length>0){
            store.getProxy().url = Ext.manifest.api +  'supplier/document/'+ dato ,
            store.load();
        }else if(e.getKey()==13 && obj.getValue().length==0){
            store.getProxy().url = Ext.manifest.api +  'supplier',
            store.load();
        }
      },
      onKeyPressName:function(obj, e, eOpts){
        let dato = obj.getValue().trim();
        let store = tools.Util.getById('dgvProveedor').getStore();
        if(e.getKey()==13 && obj.getValue().length>0){
            store.getProxy().url = Ext.manifest.api +  'supplier/name/'+ dato ,
            store.load();
        }else if(e.getKey()==13 && obj.getValue().length==0){
            store.getProxy().url = Ext.manifest.api +  'supplier',
            store.load();
        }
      },
      onClickExcel: function (b) {
        let store = tools.Util.getById('dgvProveedor').getStore();
        let gridexcel = Ext.create('Ext.ux.ExportableGrid', {
          store: store,
          renderTo: Ext.getBody(),
          columns: [
            {
                dataIndex: 'business_name',
                header: 'Razon Social',
                width:250,
                align : 'left',
               
            },
            
            {
                dataIndex: 'number_document',
                header: 'Documento',
                align: 'left',
            },
            
            {
                dataIndex: 'number_document',
                header: 'Nro Documento',
                width:150,
                align : 'center'
            },
            {
                dataIndex: 'phone1',
                header: 'Telefono',
                align : 'center'  
            },
            {
                dataIndex: 'created_at',
                header: 'Fecha',
                width:250,
                align : 'center'    
            },
            {
                dataIndex: 'enabletext',
                header: 'Estado',
                align: 'left',
            },
          ]
        }
        );
        gridexcel.export(tools.Util.getGenerateUUID() + 'ListadoProveedor');
        gridexcel.destroy();
      }
});
