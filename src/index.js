import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            info : [],
        }
        this.handlePress = this.handlePress.bind(this);
    
    }

    handlePress(event){
        console.log(event.keyCode);
        if(event.keyCode === 13) {
            let api = "http://ctp-zip-api.herokuapp.com/zip/";
            api += event.target.value;
            axios.get(api)
                .then( (response) => {
                    this.setState({info: response.data});
                })


        }
    }


    render () {
        console.log(this.state.info)
        return (
            <div>
                <h1>Zip Code Search</h1>
                <label>Zip Code</label>
                <input placeholder="Try 10016" onKeyDown={ (e) => this.handlePress(e)}></input>            
                {
                    this.state.info.map( 
                        (item)=> 
                            (<Card data={item}/>)
                        )
                    
                }
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));