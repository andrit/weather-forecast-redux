import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
        <div>
            <header className="app-name-header page-header">
                <h1>Weather Checker App</h1>
            </header>
          <SearchBar />
          <WeatherList />
        </div>
    );
  }
}
