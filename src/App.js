import React, { Component } from 'react';
import SideBarLeft from './SideBarLeft';
import MainTab from './MainTab';
import SideBarRight from './SideBarRight';
import './App.css'; // global styling and document structure

class App extends Component {
    render() {
        return(
            <div id="app">
                <SideBarLeft/>
                <MainTab/>
                <SideBarRight/>
            </div>    
        )
    }
}

export default App;