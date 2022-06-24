
Ext.define('backoffice.view.proveedor.ListadoMnoSph1',{
    extend: 'Ext.grid.Panel',
    xtype : 'proveedor-ListadoMonoSph1',
    requires: [
        'backoffice.view.proveedor.ListadoMnoSph1Controller',
        'backoffice.view.proveedor.ListadoMnoSph1Model'
    ],

    controller: 'proveedor-listadomnosph1',
    viewModel: {
        type: 'proveedor-listadomnosph1'
    },

    height: 700,
    initComponent: function () {
        me = this;
        store  = tools.Util.getStoreById('stPedidoTerminadoMonoSPH1').load();
        
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
                dataIndex: 'sph1',
                header: '<div>SPH+</div>',
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
