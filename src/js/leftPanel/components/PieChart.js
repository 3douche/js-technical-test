var React = require('react');

var GoogleLineChart = React.createClass({

    render: function(){
        return (<div id='pieChart' style={{height: "500px"}}>
        </div>);
    },
    componentDidMount: function(){
        this.drawCharts();
    },
    componentDidUpdate: function(){
        this.drawCharts();
    },
    drawCharts: function(){
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);

        var options = {
            title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(
            document.getElementById('pieChart')
        );
        chart.draw(data, options);
    }
});
