import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name= cityData.city.name;
        let tempsK = cityData.list.map(weather => weather.main.temp);
        const temps = _.map(tempsK, (temp) => temp * (9/5) - 459.67);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;

        //console.log(temps);
        //console.log(humidities);
        //console.log(pressures);

        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="red" height="40" width="90" units="F" />
                </td>
                <td>
                    <Chart data={humidities} color="blue" height="40" width="90" units="hPa" />
                </td>
                <td>
                    <Chart data={pressures} color="green" height="40" width="90" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (&deg;F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather }; // === {weather: weather }
}

export default connect(mapStateToProps)(WeatherList);