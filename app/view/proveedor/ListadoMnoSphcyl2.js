
Ext.define('backoffice.view.proveedor.ListadoMnoSphcyl2',{
    extend: 'Ext.grid.Panel',
    xtype : 'proveedor-ListadoMonoSphCyl2',
    requires: [
        'backoffice.view.proveedor.ListadoMnoSphcyl2Controller',
        'backoffice.view.proveedor.ListadoMnoSphcyl2Model'
    ],

    controller: 'proveedor-listadomnosphcyl2',
    viewModel: {
        type: 'proveedor-listadomnosphcyl2'
    },
    height: 700,
    initComponent: function () {
        me = this;
        store  = tools.Util.getStoreById('stPedidoTerminadoMonosphCyl2').load();
        
        Ext.apply(me,{
            viewConfig: {
                preserveScrollOnRefresh: true,
                preserveScrollOnReload: true
            },
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            store : store,
            headerBorders: false,
            rowLines: true,
            sortableColumns: false,
            columns: this._columns()
        });
        me.callParent();
    },
    _columns:function(){
        return [
            {
                dataIndex: 'markets',
                header: '<div>SPH- CYL-</div>',
                width: 110,
                align: 'left',
            },
            {
                dataIndex: 'CYL025',
                header: '<div>CYL- 0.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL050',
                header: '<div>CYL- 0.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL075',
                header: '<div>CYL- 0.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL100',
                header: '<div>CYL- 1.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL125',
                header: '<div>CYL- 1.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL150',
                header: '<div>CYL- 1.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL175',
                header: '<div>CYL- 1.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL200',
                header: '<div>CYL- 2.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL225',
                header: '<div>CYL- 2.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL250',
                header: '<div>CYL- 2.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL275',
                header: '<div>CYL- 2.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL300',
                header: '<div>CYL- 3.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL325',
                header: '<div>CYL- 3.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL350',
                header: '<div>CYL- 3.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL375',
                header: '<div>CYL- 3.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL400',
                header: '<div>CYL- 4.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL425',
                header: '<div>CYL- 4.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL450',
                header: '<div>CYL- 4.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL475',
                header: '<div>CYL- 4.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL500',
                header: '<div>CYL- 5.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL525',
                header: '<div>CYL- 5.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },

             {
                dataIndex: 'CYL550',
                header: '<div>CYL- 5.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
             {
                dataIndex: 'CYL575',
                header: '<div>CYL- 5.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL600',
                header: '<div>CYL- 6.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL625',
                header: '<div>CYL- 6.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL650',
                header: '<div>CYL- 6.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL675',
                header: '<div>CYL- 6.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL700',
                header: '<div>CYL- 7.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL725',
                header: '<div>CYL- 7.25</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL750',
                header: '<div>CYL- 7.50</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL775',
                header: '<div>CYL- 7.75</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'CYL800',
                header: '<div>CYL- 8.00</div>',
                width: 100,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            
            {
                flex:1
            }
           

        ]
    }
});
