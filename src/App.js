import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import Dialog from 'material-ui/Dialog';
import Example from './DatePicker';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleChange(selectedDate) {
    console.log(selectedDate)
  }
  render() {

    return (
      <MuiThemeProvider>
        <div className="App" >
        <Example />
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
