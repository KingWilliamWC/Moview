import React, { Component } from 'react';

import './SideBarLeft.css';

import UserSVG from './user-solid.svg';
import HomeSVG from './home-solid.svg'
import DiscoverSVG from './discover-solid.svg';
import ClockSVG from './clock-solid.svg';
import HeartSVG from './heart-solid.svg';
import SignOut from './sign-out-solid.svg';

class SideBarLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonState: ['LeftTabButtonContainer LeftTabActive', 'LeftTabButtonContainer', 'LeftTabButtonContainer', 'LeftTabButtonContainer', 'LeftTabButtonContainer', 'LeftTabButtonContainer'],
            currentButton: 0
        }
    }

    componentDidMount(){

    }
    render(){
        const updateButtons = (sender) => {
            if(sender !== this.state.currentButton){
                var tempButtonState = this.state.buttonState;
                tempButtonState[this.state.currentButton] = 'LeftTabButtonContainer';
                tempButtonState[sender] = 'LeftTabButtonContainer LeftTabActive';
                this.setState({buttonState: tempButtonState, currentButton: sender});
            }
        }
        return(
            <div id='barleftcontainer'>
                <div id='itemsContainer'>
                    <div id='usercontainer'>
                        <img className='userIMG'alt='' src={UserSVG} />
                        <p id='userName'>William</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>Menu</p>
                    </div>
                    <div onClick={() => updateButtons(0)} className={this.state.buttonState[0]}>
                        <img className='LeftTabButtonIcon' alt='' src={HomeSVG}></img>
                        <p className='LeftTabTitle'>Home</p>
                    </div>
                    <div onClick={() => updateButtons(1)} className={this.state.buttonState[1]}>
                        <img className='LeftTabButtonIcon' alt='' src={DiscoverSVG}></img>
                        <p className='LeftTabTitle'>Discover</p>
                    </div>
                    <div onClick={() => updateButtons(2)} className={this.state.buttonState[2]}>
                        <img className='LeftTabButtonIcon' alt='' src={UserSVG}></img>
                        <p className='LeftTabTitle'>Celebs</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>Library</p>
                    </div>
                    <div onClick={() => updateButtons(3)} className={this.state.buttonState[3]}>
                        <img className='LeftTabButtonIcon' alt='' src={ClockSVG}></img>
                        <p className='LeftTabTitle'>Recent</p>
                    </div>
                    <div onClick={() => updateButtons(4)} className={this.state.buttonState[4]}>
                        <img className='LeftTabButtonIcon' alt='' src={HeartSVG}></img>
                        <p className='LeftTabTitle'>Saved</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>General</p>
                    </div>
                    <div onClick={() => updateButtons(5)} className={this.state.buttonState[5]}>
                        <img className='LeftTabButtonIcon' alt='' src={SignOut}></img>
                        <p className='LeftTabTitle'>Sign Out</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBarLeft;