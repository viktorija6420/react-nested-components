import React, { Component } from 'react';


class Form extends Component{

  // constructor (props){
  //   super(props)
  //   this.state = {
  //     body: ""
  //   }
  // };

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
    // this.props.onSubmit(this.state);
    this.setState({
      body: ""
    })
  }

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
    //input field
    //submit button callback onSubmit
    );
  }
}


export default Form
