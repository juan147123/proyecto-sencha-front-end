Ext.define('backoffice.view.maestros.Contenedor', {
    extend: 'Ext.panel.Panel',
    xtype: 'mantenimiento',
    requires: [
        'backoffice.view.maestros.ContenedorController',
        'backoffice.view.maestros.marca.ListadoMarca',
        'backoffice.view.maestros.categoria.ListadoCategoria',
        'backoffice.view.maestros.modelo.ListadoModelo',
        'backoffice.view.maestros.tipousuario.ListadoTipoUsuario',
       /*  'backoffice.view.maestros.tipodocumento.ListadoTipoDocumento', */
        'backoffice.view.maestros.tipocontacto.ListadoTipoContacto',
        'backoffice.view.maestros.formapago.ListadoFormaPago',
        'backoffice.view.maestros.forma.ListadoForma',
        'backoffice.view.maestros.color.ListadoColor',
        'backoffice.view.maestros.material.ListadoMaterial',
        'backoffice.view.maestros.base.ListadoBase',
        'backoffice.view.maestros.base.FormBase',
        'backoffice.view.maestros.usomontura.ListadoUsoMontura',
        'backoffice.view.maestros.usomontura.FormUsoMontura',
        'backoffice.view.maestros.index.ListadoIndex',
        'backoffice.view.maestros.index.FormIndex',
        'backoffice.view.maestros.size.ListadoSize',
        'backoffice.view.maestros.size.FormSize',
        'backoffice.view.maestros.side.ListadoSide',
        'backoffice.view.maestros.side.FormSide',
        'backoffice.view.maestros.tipo.ListadoTipo',
        'backoffice.view.maestros.tipo.FormTipo',
        'backoffice.view.maestros.descuento.ListadoDescuento',
        'backoffice.view.maestros.descuento.FormDescuento',

    ],
    controller: 'maestro-contenedor',
    itemId: 'maestro-contenedor',
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
                    title: '<b>Marca</b>',
                    layout: 'card',
                    itemId: 'panelMarca',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'marca-listadoMarca'
                        },
                        { xtype: 'form-marca' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Categoria</b>',
                    layout: 'card',
                    itemId: 'panelCategoria',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-categoria'
                        },
                        { xtype: 'form-categoria' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Color</b>',
                    layout: 'card',
                    itemId: 'panelColor',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-color'
                        },
                        {
                            xtype: 'form-color'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Material</b>',
                    layout: 'card',
                    itemId: 'panelMaterial',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-material'
                        },
                        {
                            xtype: 'form-material'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Base</b>',
                    layout: 'card',
                    itemId: 'panelBase',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'listado-base'
                        },
                        { xtype: 'form-base' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Uso Montura</b>',
                    layout: 'card',
                    itemId: 'panelUsoMontura',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-uso-mountura' },
                        { xtype: 'form-uso-montura' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Indice</b>',
                    layout: 'card',
                    itemId: 'panelIndice',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-index' },
                        { xtype: 'form-index' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Talla</b>',
                    layout: 'card',
                    itemId: 'panelTalla',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-size' },
                        { xtype: 'form-size' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Lado</b>',
                    layout: 'card',
                    itemId: 'panelLado',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-side' },
                        { xtype: 'form-side' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Tipo</b>',
                    layout: 'card',
                    itemId: 'panelTipo',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-tipo' },
                        { xtype: 'form-tipo' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Tratamiento</b>',
                    layout: 'card',
                    itemId: 'panelTratamiento',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-tratamiento' },
                        { xtype: 'form-tratamiento' }
                    ]
                },
                {
                    xtype: 'container',
                    title: '<b>Descuento</b>',
                    layout: 'card',
                    itemId: 'panelDescuento',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {xtype: 'listado-descuento'},
                        { xtype: 'form-descuento' }
                    ]
                },
               
            ]
        }
    }

})