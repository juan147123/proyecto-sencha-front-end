Ext.define('backoffice.view.local.Listado',{
    extend: 'Ext.grid.Panel',
    xtype: 'listadolocales',
    cls: 'email-inbox-panel shadow',
    requires: [
        'Ext.util.Format',
        'backoffice.view.local.ListadoController',
        'backoffice.view.local.ListadoModel',
        
    ],

    controller: 'local-listado',
    viewModel: {
        type: 'local-listado'
    },
    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },
    headerBorders: true,
    rowLines: true,
    scrollable: false,
    tbar : [
          {
              xtype: 'textfield', 
              flex :1 ,
              emptyText : 'BUSCAR LOCAL'
          },{
              xtype : 'button',
              iconCls : 'fa fa-search'
          }
    ],
    columns: [
        {
            dataIndex: 'idsede',
            text: 'Id',
            width : 50,
            align : 'left'
        },
        {
            dataIndex: 'nombresede',
            text: 'Sede',
            flex: 1,
            align : 'left'
        },
        {
            dataIndex: 'direccion',
            text: 'Direccion',
            flex: 1,
            align : 'left'
        },
        {
            xtype: 'widgetcolumn',
            width : 50,
            widget: {
                xtype: 'button',
                iconCls : 'fa fa-pencil',
               handler : 'onClick_Editar'
            }
        },
        {
            xtype: 'widgetcolumn',
            width : 50,
            widget: {
                xtype: 'button',
                iconCls : 'fa fa-trash',
                handler : 'onClick_Eliminar'
            }
        }
    ],
    
    initComponent:function(){
        me = this;
       // let s  = Ext.create('backoffice.store.Sedes');
      //  me.store = s;
        me.callParent(arguments);
    }
});
