Ext.define('backoffice.view.dashboard.ConductoresServicio', {
    extend: 'Ext.panel.Panel',
    xtype: 'conductoresservicio',
    //title: 'Clientes',
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
                backgroundColor: '#EEF1FC',
                
            },
            padding : 10,
            items : [
                {
                    xtype : 'label',
                    text : '0',
                    padding : '50 0 50 0',
                    itemId : 'lblConducoresServicio',
                    style: {
                      //s  color: '#ffffff',
                        fontSize:'60px',
                        textAlign: 'center'
                        
                    },
                },
              
            ]
        }
   
    ],
  /*  tools: [
        {
            xtype: 'tool',
            cls: 'quick-graph-panel-tool x-fa fa-ellipsis-v'
        }
    ]*/
});
