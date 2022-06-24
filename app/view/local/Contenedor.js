
Ext.define('backoffice.view.local.Contenedor',{
    extend: 'Ext.container.Container',
    xtype : 'locales',
    requires: [
        'backoffice.view.local.ContenedorController',
        'backoffice.view.local.ContenedorModel',
        'backoffice.view.local.Registro',
        'backoffice.view.local.Listado'
    ],
    itemId: 'localContainer',
    controller: 'local-contenedor',
    viewModel: {
        type: 'local-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    margin: '20 0 0 20',
    initComponent:function(){
        me = this;
        Ext.apply(this, {
            items: [
                {
                    xtype : 'toolbar',
                    margin: '0 20 10 0',
                    items : [
                      {
                          xtype: 'button', // default for Toolbars
                          text: 'NUEVO',
                          ui: 'blue',
                          handler :'onClickNuevoLocal'
                      },
                      {
                          xtype: 'button', // default for Toolbars
                          text: 'RERCARGAR',
                          ui: 'blue',
                          handler : 'onClick_Reload'
                      }
                    ]
                },
               
              /*{
                  xtype: 'container',
                  itemId: 'navigationPanel',
                  layout: {
                      type: 'vbox',
                      align: 'stretch'
                  },
                  width: '20%',
                  minWidth: 180,
                  maxWidth: 240,
                  defaults: {
                      cls: 'navigation-email',
                      margin: '0 20 20 0'
                  },
                  items: [
                      {
                          xtype: 'localmenu',
                          listeners: {
                              click: 'onMenuClick'
                          }
                      },
                     // {
                     //     xtype: 'listadolocales'
                     // }
                  ]
              },*/
              /*{
                  xtype: 'container',
                  itemId: 'contentPanel',
                  margin: '0 20 20 0',
                  flex: 1,
                  layout: {
                      type : 'anchor',
                      anchor : '100%'
                  }
              }*/
              {
                  xtype: 'container',
                  itemId: 'contentPanelLocal',
                  margin: '0 20 20 0',
                  flex: 1,
                  layout: {
                      type : 'card',
                      anchor : '100%',
                      deferredRender: true,
                  },
                  items : [
                      { xtype : 'listadolocales',itemId : 'listSedes'},
                      { xtype : 'localregistro'},
                     
                  ]
              }
          ]
        });
        this.callParent();
    }
   
});
