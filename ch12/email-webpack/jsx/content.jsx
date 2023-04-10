import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    let emailAddress = useRef();
    let comments = useRef();
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  }
  render() {
    this.prompt = "Please enter your email to win a Sublime Text license";
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email:{" "}
          <input
            ref="emailAddress"
            className="form-control"
            type="text"
            placeholder="hi@azat.co"
          />
        </div>
        <div className="form-group">
          Comments:{" "}
          <textarea
            ref="comments"
            className="form-control"
            placeholder="I like your website!"
          />
        </div>
        <div className="form-group">
          <a className="btn btn-primary" onClick={this.submit}>
            Submit
          </a>
        </div>
      </div>
    );
  }
}

module.exports = Content;
