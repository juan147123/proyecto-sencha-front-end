Ext.define('backoffice.view.dashboard.TotalViajesCurso', {
    extend: 'Ext.panel.Panel',
    xtype: 'totalviajescurso',
    title: 'Total Viajes Curso',
    ui: 'light',
  
    headerPosition: 'bottom',

    cls: 'quick-graph-panel shadow',
    height: 200,
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
                backgroundColor: '#A39B91',
                
            },
            padding : 10,
            items : [
                {
                    xtype : 'label',
                    text : '0',
                    padding : '50 0 50 0',
                    itemId : 'lblTotalViajesCursoRegular',
                    style: {
                        //color: '#ffffff',
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
