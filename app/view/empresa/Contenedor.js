
Ext.define('backoffice.view.empresa.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype : 'empresa',
    requires: [
        'backoffice.view.empresa.ContenedorController',
        'backoffice.view.empresa.ContenedorModel',
        'backoffice.view.empresa.Registro',
        'backoffice.view.empresa.Documento',
        'backoffice.view.empresa.Tienda',
        'backoffice.view.empresa.TiendaDocumento',
        'backoffice.view.empresa.TiendaRegistro',
        'backoffice.view.empresa.Series',
        'backoffice.view.empresa.SeriesRegistro',
        'backoffice.view.empresa.TiendaSerieRegistro'
    ],

    controller: 'empresa-contenedor',
    viewModel: {
        type: 'empresa-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '10 10 10 10',
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                me._contenedor()
            ]
        });
        me.callParent();
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
        return   {
            xtype: 'container',
            itemId: 'contentPanelEmpresa',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
            items : [
                { 
                    xtype : 'empresa-registro',
                },
                { 
                    xtype : 'empresa-tienda',
                },
                { 
                    xtype : 'empresa-tienda-registro',
                },
                { 
                    xtype : 'empresa-tienda-documento'
                },
                {
                    xtype: 'empresa-series'
                },
                {
                    xtype: 'empresa-series-registro'
                },
                {
                    xtype: 'empresa-tienda-series-registro'
                }

                
        
              
            ]
        };
    }
});
