'use strict';

// Lib
var React = require('react');

// Components
var Comment = require('./Comment.react');

var RightPanel = React.createClass({

    render: function(){

        var left = false;

        return(
            <div className="comment-wrapper">
                {this.props.comments.map(function(comment){
                    left = !left;
                    return (
                        <Comment comment={comment} left={left}/>
                    );
                })}
            </div>
        );
    }
});

module.exports = RightPanel;
