'use strict';

// Lib
var React = require('react');

// Components
var PieChart = require('./PieChart');

var LeftPanel = React.createClass({


    render: function(){
        return(
            <div className="filter-wrapper">
                {this.props.users.map(function(user){
                    return(
                        <div>{user.login} - {user.nbMessage}</div>
                    );
                })}
            </div>
        );
    }
});

module.exports = LeftPanel;
