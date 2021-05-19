import React, { Component } from 'react';

import './SideBarLeft.css';

import UserSVG from './user-solid.svg';
import HomeSVG from './home-solid.svg'
import DiscoverSVG from './discover-solid.svg';
import ClockSVG from './clock-solid.svg';
import HeartSVG from './heart-solid.svg';
import SignOut from './sign-out-solid.svg';

class SideBarLeft extends Component {
    render(){
        function onUserAccountClick(){
            console.log('The users account was clicked');
        }
        return(
            <div id='barleftcontainer'>
                <div id='itemsContainer'>
                    <div onClick={onUserAccountClick} id='usercontainer'>
                        <img className='userIMG'alt='' src={UserSVG} />
                        <p id='userName'>William</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>Menu</p>
                    </div>
                    <div className='LeftTabButtonContainer LeftTabActive'>
                        <img className='LeftTabButtonIcon' alt='' src={HomeSVG}></img>
                        <p className='LeftTabTitle'>Home</p>
                    </div>
                    <div className='LeftTabButtonContainer'>
                        <img className='LeftTabButtonIcon' alt='' src={DiscoverSVG}></img>
                        <p className='LeftTabTitle'>Discover</p>
                    </div>
                    <div className='LeftTabButtonContainer'>
                        <img className='LeftTabButtonIcon' alt='' src={UserSVG}></img>
                        <p className='LeftTabTitle'>Celebs</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>Library</p>
                    </div>
                    <div className='LeftTabButtonContainer'>
                        <img className='LeftTabButtonIcon' alt='' src={ClockSVG}></img>
                        <p className='LeftTabTitle'>Recent</p>
                    </div>
                    <div className='LeftTabButtonContainer'>
                        <img className='LeftTabButtonIcon' alt='' src={HeartSVG}></img>
                        <p className='LeftTabTitle'>Saved</p>
                    </div>
                    <div className='TabTitleContainer'>
                        <p className='TabContainerTitle'>General</p>
                    </div>
                    <div className='LeftTabButtonContainer'>
                        <img className='LeftTabButtonIcon' alt='' src={SignOut}></img>
                        <p className='LeftTabTitle'>Sign Out</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBarLeft;