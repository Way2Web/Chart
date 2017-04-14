(function(Charts) {
    'use strict';

    /**
     * Add charts to the page with ajax.
     */

    // Object with the elements for the charts.
    Charts.elements = {
        chart: '.js-chart'
    };

    // Object where you can store the chart config.
    Charts.config = {};

    // The charts will be stored in this object.
    Charts.items = {};

    // Search for the charts.
    Charts.init = function() {
        $(Charts.elements.chart).each(Charts.find);
    };

    // Attach the chart core to the elements.
    Charts.find = function() {
        var item = new Chart($(this), Way2web.Charts.config);

        item.init();
        Charts.items[item.settings.id] = item;
    };
})(window.Way2web.Charts = window.Way2web.Charts || {});
