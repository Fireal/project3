import React, { Component } from "react";
import { 
    Route,
    Routes,
    NavLink,
    HashRouter 
} 
from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

class Main extends Component {
    constructor (props) {
        super (props);
        this.state = {
            alert: 'Begin Typing To Start The Clock.',
            userInput: '',
            wpm: 0.0,
            typingStarted: false          
        };
        // Get Text & Word Count
        this.page1Text='The dog trotted onto the frozen pond to fetch an errant stick. That is how I picture it, at least. The boy trudging along the snow packed shore. The arc of the stick against crystalline sky. The dog tracking its path, eager paws scrambling. The bounce of the stick—once, twice—spinning and spinning. The dog’s oblivious disregard of depth and strength and gravity. I picture the boy’s measured steps forward, hands outstretched like the blind. Imagine the plunge into needle-fingered cold. Heavy boots. Heavy coat. Later, the dog came back alone. Sodden and shivering, fracturing our lives like ice.';
        this.page1WordCount= 98;
        this.page2Text='There are bees trapped into the walls of an abandoned home. There are ghosts trapped in the attic, swaying to their hum. There are flies trapped on a glue strip, beating their wings in anger. There’s a girl in the kitchen, trying to release them. She pulls the flies’ transparent wings—they come off in her fingers. She kicks open the attic door—the ghosts fade to the corners. She takes a hammer to the drywall—bees thicken the air, swirling towards the attic, sticking in the glue. The girl reaches through wall, touches her fingers to her lips.';
        this.page2WordCount= 96;
        this.page3Text='How easily the runner could have crushed it. The inchworm’s camouflage, which conceals it from predators, makes the inchworm vulnerable to the human jogging along neighborhood sidewalks, the human who does not intend the inchworm harm. Pounding the pavement and enduring the earth’s return punches is the human’s attempt to postpone death. If the runner hadn’t seen the inchworm, if the inchworm had gotten caught between these punches, the runner probably wouldn’t have felt anything more than the usual heaviness and the usual fight to keep going. But the runner did see the inchworm. She felt lightness as she leapt.';
        this.page3WordCount= 100;
        this.getText = this.getText.bind(this);
        this.timerTick = this.timerTick.bind(this);
    }

    // Word Count
    timerTick() {
        console.log(window.location.href);
        if ( window.location.href.endsWith('#/') ) {
            this.matchedText = this.page1Text;
            this.numWords = this.page1WordCount;
        }
        if ( window.location.href.endsWith('#/Two') ) {
            this.matchedText = this.page2Text;
            this.numWords = this.page2WordCount;
        }
        if ( window.location.href.endsWith('#/Three') ) {
            this.matchedText = this.page3Text;
            this.numWords = this.page3WordCount;
        }
        if ( this.state.userInput === this.matchedText )
        {
            this.setState({
                alert: 'Input Matches Text'
            });
            clearInterval(this.typingTimer);
            this.setState({
                wpm: (Math.round( ( ( this.numWords / this.props.countValue ) * 60.0 ) * 10) / 10)
            });
        }
        else
        {
            this.setState({
                alert: 'Input Does Not Match'
            });
        }
        this.props.increaseCount();
    }

    getText(e) {
        if ( this.state.typingStarted === false) {
            this.typingTimer = setInterval(this.timerTick, 1000);
            this.setState({
                typingStarted: true
            });
            this.setState({
                alert: 'Typing...'
            });
        }

        this.setState ({
                userInput:e.target.value
        });
    }

    
    shouldComponentUpdate(newProps, newState) {
            console.log("shouldComponentUpdate: Should component update?")
            return true;
    }
    componentDidUpdate(currentProps, currentState) {
            console.log("componentDidUpdate: Component just updated!");
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        clearInterval(this.typingTimer);
    }
   
    render() {
        var self = this;
        return (
            <HashRouter>
            <div>
                <h1>Typing Tutor</h1>
                <h3>Choose A Short Story To Type From</h3>
                <ul className="header">
                    <li><NavLink exact="true" to="/">Story One</NavLink></li>
                    <li><NavLink to="/Two">Story Two</NavLink></li>
                    <li><NavLink to="/Three">Story Three</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                    <Route exact path="/" element={<One matchString={this.page1Text} />}/>
                    <Route path="/Two" element={<Two matchString={this.page2Text} />}/>
                    <Route path="/Three" element={<Three matchString={this.page3Text} />}/>
                    </Routes>
                </div>
            </div>
            
            <form>
            <textarea name="ttarea" onChange={this.getText}
            ref={
                function(el){
                    self._input = el;
                }
            }
            
            placeholder="Begin Typing Here..." rows="6" cols="163" required="required">
            </textarea>
            </form>
            <h2 className="message">{this.state.alert}</h2>
            <h2 className="center">Time: {this.props.countValue}</h2>
            <h2 className="center">Typing Speed: {this.state.wpm}  words per minute</h2>
            </HashRouter>
        );
    }
}
export default Main;