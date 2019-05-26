import React, { Component } from "react";
import "./App.css";
import ReactLoading from "react-loading";
import axios from "axios";

import Form from "./components/Form.jsx";
import Meteors from "./components/Meteors.jsx";

class App extends Component {
  state = {
    meteors: [],
    limit: 1000,
    loading: true,
    resultsFound: 0,
    resultsPerPage: 10,
    searchBox: "",
    searchTerm: ""
  };

  fetchMeteors = () => {
    axios
      .get(
        `https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=${
          this.state.limit
        }&$where=UPPER(name)%20like'%25${this.state.searchTerm.toUpperCase()}%25'`
      )
      .then(res =>
        this.setState({
          meteors: res.data,
          loading: false,
          resultsFound: res.data.length
        })
      )
      .then(err => console.error(err))
      .then(() => {
        console.log(this.state.meteors);
      });
  };

  getMeteors = e => {
    e.preventDefault();
    const meteorName = e.target.elements.meteorName.value;
    this.setState(
      {
        data: [],
        loading: true,
        offset: 0,
        resultsFound: 0,
        searchTerm: meteorName
      },
      () => this.fetchMeteors()
    );
  };

  

  componentDidMount = () => {
    this.fetchMeteors();
  };

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meteorite Explorer</h1>
        </header>
        <Form getMeteors={this.getMeteors} />
        {!this.state.loading ? (
          <Meteors loading={this.state.loading} data={this.state.meteors} resultsFound={this.state.resultsFound}/>
        ) : (
          <ReactLoading
            className="loading"
            type={"bars"}
            height={"20%"}
            width={"20%"}
          />
        )}

        
      </div>
    );
  }
}

export default App;
