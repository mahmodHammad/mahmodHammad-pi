import React from "react";
import Form from "./components/Form";
import joi from "joi-browser";
import "./index.css"

class Contact extends Form {
  state = {
    data: {
      username: "",
      phone: "",
      email: "",
        message:""
    },
    error: {}
  };

  schema = {
    username: joi
      .string()
      .required()
      .label("UserName"),
    email: joi
      .string()
      .required()
      .email()
      .label("Email"),
    phone: joi
      .number()
      .integer()
      .less(1600000000)
      .greater(900000000)
      .positive()
      .required(),
  };

  doSubmit = () => {
    // do server connection
    // post to Route events/_id
    console.log(this.state);
    console.log("submitted");
  };

  render() {
    return (
     <div className="shadow-lg  p-5 mb-5  rounded">
          <h1 className="mb-5">Contact US</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("username", "UserName")}
            {this.renderInput("email", "email", "email")}
            {this.renderInput("phone", "Phone Number", "phone")}
            {this.renderInput("Message", "Message", "Message")}
           
            {this.renderSubmitBtn("Submit")}
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;