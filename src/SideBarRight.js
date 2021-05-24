import React, { Component } from 'react';

import './SideBarRight.css';


class SideBarRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            'yo': 'Hello',
        }
    }
    
    render() {
        return(
            <div id='barRightContainer'>

            </div>
        )
    }
}

export default SideBarRight;