'use strict';

// Lib
var React = require('react');
var _ = require('lodash');

// Components
var Comment = require('./Comment.react');

var RightPanel = React.createClass({

    render: function(){

        var left = false;

        return(
            <div className="comment-wrapper">
                {this.props.comments.map(function(comment, i){
                    var user = _.find(this.props.users, {'login': comment.user.login});

                    if(user && user.enable) {
                        left = !left;
                        return (
                            <Comment comment={comment} left={left} key={i}/>
                        );
                    }
                }, this)}
            </div>
        );
    }
});

module.exports = RightPanel;
