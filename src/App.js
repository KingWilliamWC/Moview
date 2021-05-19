import React, { Component } from 'react';
import SideBarLeft from './SideBarLeft';
import './App.css'; // global styling and document structure

class App extends Component {
    render() {
        return(
            <div id="app">
                <SideBarLeft/>
            </div>    
        )
    }
}

export default App;