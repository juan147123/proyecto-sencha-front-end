
Ext.define('backoffice.view.usuario.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype  :'usuario',
    requires: [
        'backoffice.view.usuario.ContenedorController',
        'backoffice.view.usuario.ContenedorModel',
        'backoffice.view.usuario.Listado',
        'backoffice.view.usuario.Registro',
        
    ],

    controller: 'usuario-contenedor',
    viewModel: {
        type: 'usuario-contenedor'
    },
    itemId : 'usuarioContainer',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '20 20 20 20',
    initComponent:function(){
        me = this;
        Ext.apply(this, {
            items: [
               me._buscador(),
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
                  xtype: 'button', // default for Toolbars
                  ui : 'button-sistema-sc',
                  tooltip: 'NUEVO',
                  iconCls : 'fa fa-user-plus',
                  handler :'onClick_CrearUsuario'
                },
                {
                    xtype: 'button', // default for Toolbars
                    tooltip: 'RECARGAR',
                    ui : 'button-sistema',
                    handler :'onClick_RecargarLista',
                    iconCls : 'fa fa-refresh'
                },
                '->',
                {
                    xtype : 'label',
                    text : 'Usuarios',
                    style: {
                      color: '#333333',
                      fontSize:'25px',
                      textAlign: 'center'
                      
                  },
                }
            ]
        };
    },
    _contenedor:function(){
        return   {
            xtype: 'container',
            itemId: 'contentPanelusuario',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
            items : [
                { xtype : 'listadousuario'  },
                { xtype : 'usuarioregistro' },
              
            ]
        };
    }
});
