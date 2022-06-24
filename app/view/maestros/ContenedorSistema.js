Ext.define('backoffice.view.maestros.ContenedorSistema', {
    extend: 'Ext.panel.Panel',
    xtype: 'mantenimiento-sistema',
    requires: [
        'backoffice.view.maestros.ContenedorSistemaController',
        'backoffice.view.maestros.ContenedorSistemaModel',
        'backoffice.view.maestros.marca.ListadoMarca',
        'backoffice.view.maestros.categoria.ListadoCategoria',
        'backoffice.view.maestros.modelo.ListadoModelo',
        'backoffice.view.maestros.tipousuario.ListadoTipoUsuario',
        'backoffice.view.maestros.tipodocumento.ListadoTipoDocumento',
        'backoffice.view.maestros.tipoempresa.ListadoTipoEmpresa',
        'backoffice.view.maestros.tipocontacto.ListadoTipoContacto',
        'backoffice.view.maestros.tipomoneda.ListadoTipoMoneda',
        'backoffice.view.maestros.formapago.ListadoFormaPago',
        'backoffice.view.maestros.forma.ListadoForma',
        'backoffice.view.maestros.descuento.ListadoDescuento',
        'backoffice.view.maestros.color.ListadoColor',
        'backoffice.view.maestros.material.ListadoMaterial',
        //'backoffice.view.maestros.base.ListadoBase',
        //'backoffice.view.maestros.base.FormBase'
        

    ],
    controller: 'maestros-contenedorsistema',
    itemId: 'maestro-contenedor-sistema',
    viewModel: {
        type: 'maestros-contenedorsistema'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '10 10 10 10',
    initComponent: function () {
        me = this;
        Ext.apply(this, {
            items: [
                me._contenedor()
            ]
        });
        this.callParent();
    },
    _contenedor: function () {
        return {
            xtype: 'tabpanel',
            ui: 'tab-venta',
            flex: 1,
            plain: true,
            padding: 5,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                border: false
            },
            items: [
                {
                    xtype: 'container',
                    title: '<b>Tipo de Usuario</b>',
                    layout: 'card',
                    itemId: 'panelTipoUsuario',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-tipousuario'
                        },
                        ,
                        { xtype: 'form-tipousuario' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Tipo de Documento</b>',
                    layout: 'card',
                    itemId: 'panelTipoDocumento',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-tipodocumento'
                        },
                        {
                            xtype: 'form-tipodocumento'
                        }
                    ]
                },
               
               
                {
                    xtype: 'container',
                    title: '<b>Tipo de Contacto</b>',
                    layout: 'card',
                    itemId: 'panelTipoContacto',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-tipocontacto'
                        }, 
                        {
                            xtype: 'form-tipocontacto'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Forma de pago</b>',
                    layout: 'card',
                    itemId: 'panelFormaPago',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-formapago'
                        }, 
                        {
                            xtype: 'form-formapago'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Tipo de Empresa </b>',
                    layout: 'card',
                    itemId: 'panelTipoEmpresa',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-tipoempresa'
                        }, 
                        {
                            xtype: 'form-tipoempresa'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Tipo de Moneda </b>',
                    layout: 'card',
                    itemId: 'panelTipoMoneda',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-tipomoneda'
                        }, 
                        {
                            xtype: 'form-tipomoneda'
                        }
                    ]
                },
               
            ]
        }
    }

})