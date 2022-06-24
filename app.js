Ext.require('Ext.chart.CartesianChart');
Ext.require('Ext.chart.axis.Category');
Ext.require('Ext.chart.axis.Numeric');
Ext.require('Ext.chart.series.Line');
Ext.require('Ext.chart.interactions.PanZoom');
Ext.require('Ext.chart.interactions.ItemHighlight');

Ext.application({
    name: 'backoffice',
    extend: 'backoffice.Application',
    requires: [
        'backoffice.view.main.Main'
    ],
});
