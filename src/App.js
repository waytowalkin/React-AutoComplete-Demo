import React, { Component } from 'react';
import { WhetherData, renderCountryTitle } from './whether-data';
import Autocomplete from 'react-autocomplete';
import './App.css';
/**
 * This app component is used to process the whether data and
 * expose the country list.
 */
class App extends Component {

  state = { val: '' };

  render() {
    return (
      <div className="autocomplete-wrapper">
        <h3>React Autocomplete Demo</h3>
        <Autocomplete
          value={this.state.val}
          items={WhetherData().list}
          getItemValue={item => item.name}
          shouldItemRender={renderCountryTitle}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.name}
            </div>
          }
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => this.setState({ val })}
        />
      </div>
    );
  }
}

export default App;