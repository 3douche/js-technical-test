var React = require('react');

var Comment = React.createClass({

    getLeftComment: function(){
        return (
            <div className="comment-left">
                <img className="comment-avatar" src={this.props.comment.user.avatar_url} />
                <span className="comment-left-arrow">◀</span>
                <div className="comment-left-comment">{this.props.comment.body}</div>
            </div>
        );
    },

    getRightComment: function(){
        return (
            <div className="comment-right">
                <div className="comment-right-comment">{this.props.comment.body}</div>
                <span className="comment-right-arrow">▶</span>
                <img className="comment-avatar" src={this.props.comment.user.avatar_url} />
            </div>
        );
    },

    render: function(){
        if(this.props.left){
            return this.getLeftComment();
        }else{
            return this.getRightComment();
        }
    }

});

module.exports = Comment;