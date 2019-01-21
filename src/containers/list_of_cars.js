import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListOfCars extends Component {

    listOfCars = ({cars}) => {
        if(cars){
            return cars.map(car => {
                return (
                    <div key={`${car.id}`} className="car-item">
                        {car.model}
                    </div>
                )
            })
        }
    }



    render() {
        return (
            <div>
                {this.listOfCars(this.props)}
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        cars: state.cars
    }
}
export default connect(mapStateToProps,null)(ListOfCars);