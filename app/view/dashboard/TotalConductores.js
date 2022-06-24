Ext.define('backoffice.view.dashboard.TotalConductores', {
    extend: 'Ext.panel.Panel',
    xtype: 'totalconductores',
    //title: 'Ingreso Diario',
    ui: 'light',
  
    //headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 150,
    layout: 'fit',
    total:0,
    items: [
        {
            xtype :'container',
            //width: 400,
           // height: 400,
            layout: {
                type : 'hbox',
                align: 'stretch'
            },
            style: {
                backgroundColor: '#F7F9D4',
                
            },
            padding : 10,
            items : [
                {
                    xtype : 'container',
                    layout: {
                        type : 'vbox',
                        align: 'stretch'
                    },
                    items :[
                        {
                            xtype : 'container',
                            html : '<h1>Ingreso Diario S/.</h1>',
                            flex: 1,
                        },
                        {
                            xtype : 'container',
                            html : '<i class="fa fa-money fa-5x" aria-hidden="true"></i>',
                            flex: 1,
                            style: {
                                 textAlign: 'center'
                                 
                             },
                        }
                    ]
                },
                
                {
                    xtype : 'label',
                    text : '0',
                    padding : '50 0 50 0',
                    itemId : 'lblTotalConductores',
                    flex: 1,
                    style: {
                       // color: '#ffffff',
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
