
Ext.define('backoffice.view.contacto.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype : 'contacto',
    requires: [
        'backoffice.view.contacto.ContenedorController',
        'backoffice.view.contacto.ContenedorModel',
        'backoffice.view.contacto.FormCliente',
        'backoffice.view.contacto.FormProveedor',
        'backoffice.view.contacto.FormPersonal',
        'backoffice.view.contacto.ListadoCliente',
        'backoffice.view.contacto.ListadoProveedor',
        'backoffice.view.contacto.ListadoPersonal'
    ],

    controller: 'contacto-contenedor',
    viewModel: {
        type: 'contacto-contenedor'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '10 10 10 10',
    initComponent:function(){
        me = this;
        Ext.apply(this, {
            items: [
               me._contenedor()
              
            ]
        });
        this.callParent();
    },
    _buscador:function(){
        return  {
            xtype : 'toolbar',
            margin: '0 20 10 0',
            items : [
                {
                    xtype : 'label',
                    text : 'Usuarios',
                    style: {
                      color: '#333333',
                      fontSize:'25px',
                      textAlign: 'center'
                      
                  },
                },
                '->',
                {
                  xtype: 'button', // default for Toolbars
                  ui: 'amber',
                  tooltip: 'NUEVO',
                  iconCls : 'fa fa-user-plus',
                  handler :'onClick_CrearUsuario'
                },
                {
                    xtype: 'button', // default for Toolbars
                    tooltip: 'RECARGAR',
                    ui: 'amber',
                    handler :'onClick_RecargarLista',
                    iconCls : 'fa fa-refresh'
                },
               
          
            ]
        };
    },
    _contenedor:function(){
        return {
            xtype: 'tabpanel',
            ui : 'tab-venta',
            flex: 1,
            plain: true,
            padding:5,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                border: false
            },
                items: [
                {
                    xtype : 'container',
                    title: '<b>Clientes</b>',
                    itemId: 'panelContacto',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items  :[
                        {xtype :'cliente-listado'},
                        {xtype :'cliente-registro'}
                    ]
                }, {
                    title: '<b>Proveedores</b>',
                    itemId: 'panelProveedor',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items  :[
                        {xtype :'listado-proveedor'},
                        {xtype :'proveedor-registro'}
                    ]
                },
                {
                    title: '<b>Personal</b>',
                    itemId: 'panelPersonal',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items  :[
                        {xtype :'personal-listado'},
                        {xtype :'personal-registro'}
                    ]
                }
            ]
        };
    }
});
