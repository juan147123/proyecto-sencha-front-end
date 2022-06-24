
Ext.define('backoffice.view.proveedor.ListadoMontura',{
    extend: 'Ext.grid.Panel',
    xtype : 'proveedor-ListadoMontura',
    requires: [
        'backoffice.view.proveedor.ListadoMonturaController',
        'backoffice.view.proveedor.ListadoMonturaModel'
    ],

    controller: 'proveedor-listadomontura',
    viewModel: {
        type: 'proveedor-listadomontura'
    },

    height: 700,
    initComponent: function () {
        me = this;
        store  = tools.Util.getStoreById('stPedidoMontura').load();
        
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
                header: '<div>MARKETS</div>',
                width: 350,
                align: 'left',
            },
            {
                dataIndex: 'cantidad',
                header: '<div>Cantidad Qty</div>',
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
