
Ext.define('backoffice.view.inventario.GeneraReposicionStock',{
    extend: 'Ext.panel.Panel',
    xtype :'genera-reposicion-stock',
    requires: [
        'backoffice.view.inventario.GeneraReposicionStockController',
        'backoffice.view.inventario.GeneraReposicionStockModel',
        'Ext.grid.*',
    ],

    controller: 'inventario-generareposicionstock',
    viewModel: {
        type: 'inventario-generareposicionstock'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent:function(){
        me = this;
        Ext.apply(me, {
            items:[
                me._titulo(),
                me._botones(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _titulo:function(){
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Listado de Productos</div><p><p>Se muestra los productos con stock actual, mostrando los productos para su envio al almacen central y solicitar stock.'
          
            
        }
    },
    _botones:function(){
        return  {
            xtype : 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                '->',
                {
                    ui : 'button-sistema',
                    text : 'ATRAS',
                    listeners : {
                        click : 'onClickAtras'
                    }
                },
                {
                    //ui : 'button-sistema',
                    ui : 'button-sistema-sc',
                    text : 'GENERAR SOLICITUD',
                    listeners : {
                        click : 'onClickGeneraReposicion'
                    }
                },
                /*{
                    ui : 'button-sistema',
                    text : 'Enviar Pedido',
                    itemId : 'btnEnviarPedido',
                    tooltip : 'Envia pedido de reposición almacen central',
                    listeners : {
                        click : 'onClickEnviaPedido'
                    }
                },*/
                {
                    
                    ui : 'button-sistema',
                    iconCls : 'fa fa-cloud-download',
                    tooltip : 'Generar reporte pdf del stock actual'
                }/*,{
                    ui : 'button-sistema',
                    iconCls : 'fa fa-file-excel-o',
                    tooltip : 'Genera reporte en excel'
                },*/
            ]

        };
    },
    _buscarFechas:function(){
        return  {
            xtype : 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                '->',
                {
                    xtype : 'datefield',
                    ui : 'datefield-sistema',
                    tooltip : 'Desde',
                    value : new Date(),
                    editable :false
                },{
                    xtype : 'datefield',
                    ui : 'datefield-sistema',
                    tooltip : 'Hasta',
                    value : new Date(),
                    editable :false
                }
            ]

        };
    },
    _buscarNro:function(){
        return  {
            xtype : 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    flex: 1,
                    emptyText : 'NRO.',
                    padding: 2
                }
            ]

        };
    },
    _buscarDni:function(){
        return  {
            xtype : 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    flex: 1,
                    emptyText : 'BUSCAR RUC / DNI',
                    padding: 2
                }
            ]

        };
    },
    _buscarDatos:function(){
        return  {
            xtype : 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    flex: 1,
                    emptyText : 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2
                }
            ]

        };
    },
    _buscarPlaca:function(){
        return  {
            xtype : 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    flex: 1,
                    emptyText : 'PLACA',
                    padding: 2,
                    enableKeyEvents :true,
                    listeners :{
                        keypress : 'onKeyPressPlaca'
                    }
                }/*,{
                    xtype : 'button',
                    iconCls : 'fa fa-search'
                },*/
            ]

        };
    },
    _grilla: function () {
        
        let store = tools.Util.getStoreById('stReplacementDetail');
      
        return {
            xtype : 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable : true,
            height: Ext.manifest.gridHeightAll,
            items:[
                {
                    xtype: 'grid',
                    itemId: 'dgvGeneraReposicionProductos',
                    flex : 1,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    headerBorders: false,
                    rowLines: true,
                    scrollable: true,
                    sortableColumns :false,
                    store : store,
                    //bbar: me._paginacion(),
                   // columnLines: true,
                    selModel: {
                        type: 'checkboxmodel',
                        checkOnly: true
                    },

                    columns: [
                        {
                            dataIndex: 'description',
                            header: '<div>Producto</div>',
                            width:500,
                            align : 'left',
                            renderer:function(v, m){ 
                                m.style = 'color:#3073a6;font-size:15px;';
                                m.tdAttr = Ext.String.format('data-qtip="{0}"', v);
                                return v;
                            }
                           
                        },
                        {
                            xtype : 'numbercolumn',
                            dataIndex: 'stockmin',
                            header: '<div>Stock</div><div>Minimo</div>',
                            width:100,
                            align : 'center',
                        },
                        {
                            xtype : 'numbercolumn',
                            dataIndex: 'stockactual',
                            header: '<div>Stock</div><div>Actual</div>',
                            width:200,
                            align : 'center',
                            renderer: function (value, metadata, record) {
                                let stock = record.get('stockactual');
                                let stockminimo = record.get('stockmin');
                                let calculo = stock - stockminimo;
                                
                                if(calculo <= 0) {
                                    metadata.style = 'background-color:#AB1717;color:white;';
                                    return value ;
                                }
                                if(calculo <= 5) {
                                    metadata.style = 'background-color:#dab00e;color:white;';
                                    return value ;
                                }
                                if(calculo >= 5) {
                                    metadata.style = 'background-color:#085614;color:white;';
                                    return value ;    
                                }
                                
                              }
                        },
                        {
                            xtype : 'numbercolumn',
                            format:'0',
                            dataIndex: 'request',
                            header: '<div>Requerimiento</div>',
                            width:200,
                            align : 'center',
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false,
                                minValue: 0,
                                maxValue: 100
                            }
                        },
                        { flex: 1}          
                    ]
        
                }
              
            ]
        };
    },
    _paginacion:function(){
        return {
            
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "Sin elementos a mostrar",
            
        }
    }
});
