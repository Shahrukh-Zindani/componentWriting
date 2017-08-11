import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';  
import Card from 'material-ui/Card';
import './DatePicker.css';
import TextField from 'material-ui/TextField'


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }
  

  render() {
    return (
      
        <div className = 'wrapper-datepicker'>
          <DatePicker
            customInput={<TextField />}
            {...this.props}
            selected={this.state.startDate}
            showMonthDropdown
            showYearDropdown
            disabled={false}
            excludeDates={[moment(), moment().subtract(1, 'days')]}
          />
        </div>
      
    )
  }
}

export default Example