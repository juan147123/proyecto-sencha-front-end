
Ext.define('backoffice.view.empresa.TiendaDocumento',{
    extend: 'Ext.form.Panel',
    xtype :'empresa-tienda-documento',
    requires: [
        'backoffice.view.empresa.TiendaDocumentoController',
        'backoffice.view.empresa.TiendaDocumentoModel'
    ],

    controller: 'empresa-tiendadocumento',
    viewModel: {
        type: 'empresa-tiendadocumento'
    },
    height:300,
    title : 'Documentos',
    autoShow : true,
    html: 'Hello, World!!'
});
