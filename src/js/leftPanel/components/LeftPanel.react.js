'use strict';

// Lib
var React = require('react');

var LeftPanel = React.createClass({


    render: function(){
        return(
            <div className="filter-wrapper">
                {this.props.comments}
            </div>
        );
    }
});

module.exports = LeftPanel;
