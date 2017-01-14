import React from 'react'
import {Link} from 'react-router'

var TopActionsComponent = React.createClass({
    render: function () {
        return (
            <div className="add" onClick={() => this.props.changeAppMode('create')}>
                <span >
                <Link to="content.php"
                      className='btn btn-primary'
                >Adauga un joc nou</Link>
                </span>
            </div>
        );
    }
});

export default TopActionsComponent