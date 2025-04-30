import React from 'react'

class ComponentToViewDataBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      subject:''
    };
  }

  handleChange = event => {
    this.setState({
        subject: event.target.value
    })
}
  render() {
    return (
      <div>
        <input type="text" placeholder='Enter Subject' onChange={this.handleChange}/>
        <p><b>{this.state.subject}</b> Tutorial</p>
      </div>
    )
    }
}
export default ComponentToViewDataBinding;
