Ext.define('backoffice.view.dashboard.TotalViajesRealizados', {
    extend: 'Ext.panel.Panel',
    xtype: 'totalviajesrealizados',
    title: 'Orden de trabajo',
    ui: 'light',
  
    headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 150,
    layout: 'fit',

    items: [
        {
            xtype :'container',
            //width: 400,
           // height: 400,
            layout: {
                type : 'vbox',
                align: 'stretch'
            },
            style: {
                backgroundColor: '#E8F4F4',
                
            },
            padding : 10,
            items : [
                {
                    xtype : 'label',
                    text : '0',
                    padding : '50 0 50 0',
                    itemId : 'lblTotalViajes',
                    style: {
                     //   color: '#ffffff',
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
