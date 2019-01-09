import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.data.LocationText}
                </h2>
                <ul>
                    <li>
                        State: {this.props.data.State}
                    </li>
                    <li>
                        Location: ({this.props.data.Lat} , {this.props.data.Long})
                    </li>
                    <li>
                        Population Estimated: {this.props.data.EstimatedPopulation}
                    </li>
                    <li>
                        Total Wages: {this.props.data.TotalWages}
                    </li>
                
                </ul>
            </div>
        );
    }
}


export default Card;