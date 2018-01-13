import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

export default function () {
    return (
        <div>
            <SearchBar />
            <WeatherList />
        </div>
    );
}
