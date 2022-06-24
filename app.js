
/*Ext.Loader.setConfig({
    enabled: false,
    paths: {
        "tools":"tools"
    }
});*/
/*
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux': ''
    }
});*/
//TODO: ini

Ext.require('Ext.chart.CartesianChart');
Ext.require('Ext.chart.axis.Category');
Ext.require('Ext.chart.axis.Numeric');
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.interactions.PanZoom');
Ext.require('Ext.chart.interactions.ItemHighlight');
Ext.require('Ext.ux.ExportableGrid');

Ext.application({
    name: 'backoffice',
    extend: 'backoffice.Application',
    requires: [
        'backoffice.view.main.Main',
        'backoffice.view.dashboard.Dashboard'
    ],
  //  mainView: 'backoffice.view.main.Main'
});
