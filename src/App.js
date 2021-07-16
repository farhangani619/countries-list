import React, { Component } from "react";
import Tile from "./components/Tile.jsx";
import Form from "./components/Form.jsx";
import Details from "./components/Details.jsx";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import { actions } from "./store";

class App extends Component {
  componentDidMount() {
    this.props.onLandingPage();
  }

  formSubmitted(event) {
    event.preventDefault();
    this.props.onGetCountries(this.props.searchTerm);

    // this.setState({
    //   loading: true,
    //   countries: [],
    // });

    // API.search(this.state.searchTerm).then((data) => {
    //   this.setState({
    //     ...this.state,
    //     loading: false,
    //     countries: data,
    //   });
    // });
  }

  searchTermChanged(event) {
    console.log(event.target);
    this.props.onSearchTermChanged(event.target.value);
  }

  onSorted(sortType, sortBy) {
    this.props.onCountrySort(sortType, sortBy);
  }
  render() {
    const { title, searchTerm, loading, countries, sortType, sortBy } =
      this.props;
    const sorted = countries.sort((a, b) => {
      if (sortBy === "name") {
        const isReversed = sortType === "asc" ? 1 : -1;
        return isReversed * a.name.localeCompare(b.name);
      }

      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.callingCodes[0].localeCompare(b.callingCodes[0]);
    });
    return (
      <div>
        <h1>{title}</h1>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <Form
                    formSubmitted={this.formSubmitted.bind(this)}
                    searchTermChanged={this.props.onSearchTermChanged}
                    searchTerm={searchTerm}
                    onSorted={this.onSorted.bind(this)}
                  />

                  <section className="countries">
                    {sorted.map((country, index) => {
                      return (
                        <Tile
                          key={index}
                          name={country.name}
                          currency={country.currencies[0].symbol}
                          flag={country.flag}
                          data={country}
                        />
                      );
                    })}
                  </section>
                </div>
              );
            }}
          />
          <Route path="/details" exact component={Details} />
        </Switch>

        {loading ? (
          <img
            alt="Loading..."
            src="https://acegif.com/wp-content/gifs/globe-44.gif"
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    title: state.title,
    searchTerm: state.searchTerm,
    loading: state.loading,
    countries: state.countries,
    sortType: state.sortType,
    sortBy: state.sortBy,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm));
    },
    onGetCountries(searchTerm) {
      dispatch(actions.getCountries(searchTerm));
    },
    onLandingPage() {
      dispatch(actions.getLandingPage());
    },
    onCountrySort(sortType, sortBy) {
      dispatch(actions.countrySort(sortType, sortBy));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
