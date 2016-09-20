'use strict';

// Lib
var React = require('react');

// Components
var UsersPieChart = require('./UsersPieChart');

// Actions
var IssueActions = require('../../issue/actions/IssueActions');

var LeftPanel = React.createClass({


    render: function () {

        return (
            <div className="filter-wrapper">
                <UsersPieChart users={this.props.users}/>
                <div className='users-wrapper'>
                    {this.props.users.map(function (user, i) {
                        var css = "user-wrapper";
                        if(!user.enable){
                            css += " user-disable";
                        }

                        var filterUser = this._filterUser.bind(this, user);
                        return (
                            <div className={css} key={i} onClick={filterUser}>
                                <div className='user-color' style={{backgroundColor: user.color}}/>
                                <div className='user-login'>{user.login}</div>
                                <img className='user-avatar' src={user.avatar}/>
                            </div>
                        );
                    }, this)}
                </div>
            </div>
        );
    },

    _filterUser: function(user){
        IssueActions.filterUser(user);
    }
});

module.exports = LeftPanel;
