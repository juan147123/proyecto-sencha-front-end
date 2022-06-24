
Ext.define('backoffice.view.proveedor.ListadoMnoCyl1',{
    extend: 'Ext.grid.Panel',
    xtype : 'proveedor-ListadoMonoCyl1',
    requires: [
        'backoffice.view.proveedor.ListadoMnoCyl1Controller',
        'backoffice.view.proveedor.ListadoMnoCyl1Model'
    ],

    controller: 'proveedor-listadomnocyl1',
    viewModel: {
        type: 'proveedor-listadomnocyl1'
    },

    height: 700,
    initComponent: function () {
        me = this;
        store  = tools.Util.getStoreById('stPedidoTerminadoMonoCYL1').load();
        
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
                dataIndex: 'cyl',
                header: '<div>CYL-</div>',
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
