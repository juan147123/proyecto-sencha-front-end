
Ext.define('backoffice.view.proveedor.ListadoTerminadoBifocal', {
    extend: 'Ext.grid.Panel',
    xtype: 'proveedor-ListadoTerminadoBifocal',
    requires: [
        'backoffice.view.proveedor.ListadoTerminadoBifocalController',
        'backoffice.view.proveedor.ListadoTerminadoBifocalModel'
    ],

    controller: 'proveedor-listadoterminadobifocal',
    viewModel: {
        type: 'proveedor-listadoterminadobifocal'
    },
    height: 700,
    initComponent: function () {
        me = this;
        store = tools.Util.getStoreById('stPedidoTerminadoBifocal').load();

        Ext.apply(me, {
            viewConfig: {
                preserveScrollOnRefresh: true,
                preserveScrollOnReload: true
            },
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            store: store,
            headerBorders: false,
            rowLines: true,
            sortableColumns: false,
            columns: this._columns()
        });
        me.callParent();
    },
    
    _columns: function () {
        return [
            {
                dataIndex: 'markets',
                header: '<div>MARKETS</div>',
                width: 90,
                align: 'center',
            },
            {
                dataIndex: 'C100',
                header: '<div>ADD+1.00</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C125',
                header: '<div>ADD+1.25</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C150',
                header: '<div>ADD+1.50</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C175',
                header: '<div>ADD+1.75</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C200',
                header: '<div>ADD+2.00</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C225',
                header: '<div>ADD+2.25</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C250',
                header: '<div>ADD+2.50</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C275',
                header: '<div>ADD+2.75</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C300',
                header: '<div>ADD+3.00</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C325',
                header: '<div>ADD+3.25</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C350',
                header: '<div>ADD+3.50</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C375',
                header: '<div>ADD+3.75</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },
            {
                dataIndex: 'C400',
                header: '<div>ADD+4.00</div>',
                width: 90,
                align: 'center',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 0,
                    maxValue: 1000
                }
            },

        ]
    },

});
