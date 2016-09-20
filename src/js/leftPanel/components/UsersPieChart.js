'use strict';

var React = require('react');
var SimplePieChart = require("react-simple-pie-chart");
var _ = require('lodash');

var UsersPieChart = React.createClass({

    getSlices: function () {
        var slices = [];
        _.each(this.props.users, function (user) {
            if(user.enable) {
                var slice = {
                    color: user.color,
                    value: user.nbMessage
                };
                slices.push(slice);
            }
        });

        return slices;
    },

    render: function () {

        var slices = this.getSlices();

        return (<div className='pie-chart'>
            <SimplePieChart slices={slices}/>
        </div>);
    }
});

module.exports = UsersPieChart;
