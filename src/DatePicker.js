import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';  
import Card from 'material-ui/Card';
import './DatePicker.css';
import TextField from 'material-ui/TextField'
import { getFormatter, getCursorPositioner } from './formatter'
const template = '**/**/****';
export const formatPhoneNumberInput = getFormatter(template)

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRawChange = this.handleRawChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  handleRawChange(e) {
    if(e.which!==8) {
      if(e.target.value.length==2 || e.target.value.length==5) {
        e.target.value = e.target.value+'/';
      }
      this.setState({
        startDate: moment(formatPhoneNumberInput(e.target.value)),
      })
    }
  }
  

  render() {
    return (
      
        <div className = 'wrapper-datepicker'>
          <DatePicker
            customInput={<TextField style={{fontSize: '24px'}} />}
            {...this.props}
            selected={this.state.startDate}
            onChange= {this.handleChange}
            onChangeRaw={this.handleRawChange}
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