import React, { Component } from 'react';


class Form extends Component{

  state={
    body:""
  };

  change= e => {
    this.props.onChange({[e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit= e => {
    e.preventDefault();
    this.setState({
      body: ""
    });
    //if you want to clear after submitting use this
    // this.props.onChange()
  };

  render(){

  return (
    <form>
      <input
             name= "body"
             value={this.state.body}

             onChange = {e =>
               this.change(e)
             }
      />

      <button onClick={e => this.onSubmit(e)}>Submit</button>

    </form>
    );
  }
}


export default Form
