import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.statename}
                </h2>
                <ul>
                    {this.props.zips.map( (zip) => {
                        return (<li> {zip} </li>);
                    })}
                </ul>
            </div>
        );
    }
}


export default Card;
