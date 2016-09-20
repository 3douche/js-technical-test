'use strict';

// Lib
var React = require('react');

// Components
var UsersPieChart = require('./UsersPieChart');

var LeftPanel = React.createClass({


    render: function(){
		
		var chartName = "PieChart";
		
        return(
            <div className="filter-wrapper">
				<UsersPieChart users={this.props.users}/>
				<div className='users-wrapper'>
                {this.props.users.map(function(user, i){
                    return(
                        <div className='user-wrapper' key={i}>
							<div className='user-color' style={{backgroundColor: user.color}} />
							<div className='user-login'>{user.login}</div>
							<img className='user-avatar' src={user.avatar} />
						</div>
                    );
                })}
				</div>
            </div>
        );
    }
});

module.exports = LeftPanel;
