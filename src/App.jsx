import React, { Component } from 'react';
import "./sass/app.css";

import axios from 'axios';

import TopSection from './components/top/index';
import BottomSection from "./components/bottom/index";

const WEATHER_KEY = "2d0709b54c9e47d3bc462748190508";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Kiyev",
      forcastDays: 5,
      isloading: true
    }
  }

  componentDidMount() {
    const { cityName, forcastDays } = this.state;

    const URL = `https://api.apixu.com/v1/current.json?key=${WEATHER_KEY}&q=${cityName}`;
    axios.get(URL).then((res) => {
      return res.data;
    }).then((data) => {
      this.setState({
        isLoading: false,
        temp_c: data.current.temp_c,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon
      });
    })
      .catch((err) => {
        if (err)
          console.error("Cannot fetch Weather Data from API, ", err);
      });
  }

  render() {

    const { isLoading, cityName, temp_c, isDay, text, iconURL } = this.state;

    return <div className="app-container">
      <div className="maine-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading &&
          < div className="top-section">
            <TopSection
              location={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text={text}
              iconURL={iconURL}
            />
          </div>}
        <div className="bottom-section">
          <BottomSection />
        </div>
      </div>
    </div >
  }
}
export default App;
