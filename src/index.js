import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            states : {},
            zips : [],
        }
        this.handlePress = this.handlePress.bind(this);

    }

    handlePress(event){
        if(event.keyCode === 13) {
            let api = "http://ctp-zip-api.herokuapp.com/city/";
            api += event.target.value.toUpperCase();
            axios.get(api)
                .then( (response) => {

                    this.setState({zips: response.data});
                }).then(() => {
                    for (let zip of this.state.zips) {
                        let api2 = "http://ctp-zip-api.herokuapp.com/zip/";
                        api2 += zip;
                        axios.get(api2)
                            .then( (response) => {
                                let statename = response.data[0].State;
                                if (statename in this.state.states) {
                                    let tmp = {}
                                    tmp[statename] = this.state.states[statename];
                                    tmp[statename].push(zip);
                                    this.setState({states: tmp});
                                } else {
                                    let tmp = {};
                                    tmp[statename] = [zip];
                                    this.setState({states: tmp});
                                }
                            })
                    }})
        }
    }


    render () {
        let statenames = this.state.states ? Object.keys(this.state.states) : [];
        return (
            <div>
                <h1>City Code Search</h1>
                <label>City Name</label>
                <input placeholder="Try NYC" onKeyDown={ (e) => this.handlePress(e)}></input>
                {
                    statenames.map( (statename) =>
                        (<Card statename={statename} zips={this.state.states[statename]}/>)
                        )
                }
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
