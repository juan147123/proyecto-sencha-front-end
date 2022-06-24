Ext.define('backoffice.view.dashboard.TotalViajesCursoTuristico', {
    extend: 'Ext.panel.Panel',
    xtype: 'totalviajescursoturistico',
    title: 'Total Viajes Turistico',
    ui: 'light',
    headerPosition: 'bottom',
    cls: 'quick-graph-panel shadow',
    height: 200,
    layout: 'fit',

    items: [
        {
            xtype :'container',
            layout: {
                type : 'vbox',
                align: 'stretch'
            },
            style: {
                backgroundColor: '#32404E',
                
            },
            padding : 10,
            items : [
                {
                    xtype : 'label',
                    text : '0',
                    padding : '50 0 50 0',
                    itemId : 'lblTotalViajesCursoTuristico',
                    style: {
                        color: '#ffffff',
                        fontSize:'60px',
                        textAlign: 'center'
                        
                    },
                },
              
            ]
        }
   
    ],
    /*tools: [
        {
            xtype: 'tool',
            cls: 'quick-graph-panel-tool x-fa fa-ellipsis-v'
        }
    ]*/
});
