import React, { Component } from 'react';

import './MainTab.css';

import GenreSperatorSVG from './genre-seperator.svg';
import PlaySVG from './play-solid.svg';
import PlusSVG from './plus-solid.svg';

class MainTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionButtons: ['optionActive', 'optionNotActive'],
            currentActiveOption: 0,
        }
    }
    
    render(){
        const updateOptions = (sender) => {
            if(sender !== this.state.currentActiveOption){
                var tempOptionButtonsState = this.state.optionButtons;
                tempOptionButtonsState[this.state.currentActiveOption] = 'optionNotActive';
                tempOptionButtonsState[sender] = 'optionActive';
                this.setState({optionButtons: tempOptionButtonsState, currentActiveOption: sender})
            }
        }
        
        return(
            <div id='viewContainer'>
                <div id='topselectContainer'>
                    <p onClick={() => updateOptions(0)} className='movieOption' id={this.state.optionButtons[0]}>Movies</p>
                    <p onClick={() => updateOptions(1)} className='tvOption' id={this.state.optionButtons[1]}>TV Shows</p>
                </div>
                <div id='showcaseMovieContainer'>
                    <img id='showcasebackdrop' alt='' src='https://image.tmdb.org/t/p/original/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg'></img>
                    <div id='showcaseinfo'>
                        <p id='showcaseName'>The Wolf Of Wall Street</p>
                        <p id='showcaseReleaseYear'>2013</p>
                        <div id='showcaseGenreContainer'>
                            <p id='showcaseGenre'>Crime</p>
                            <img className='seperator' alt='' src={GenreSperatorSVG}></img>
                            <p id='showcaseGenre'>Drama</p>
                            <img className='seperator' alt='' src={GenreSperatorSVG}></img>
                            <p id='showcaseGenre'>Comedy</p>
                        </div>
                        <div id='showcaseBtnContainer'>
                            <button id='showcasePlayBtn'><img className='showcaseBtnIcon' alt='' src={PlaySVG}></img></button>
                            <button id='showcaseAddToListBtn'><img className='showcaseBtnIcon' alt='' src={PlusSVG}></img></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainTab;