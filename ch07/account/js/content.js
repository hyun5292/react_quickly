class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountNumber: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("Typed: ", event.target.value);
    this.setState({
      accountNumber: event.target.value.replace(/[^0-9]/gi, ""),
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      "Account Number: ",
      React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: "1234556",
        value: this.state.accountNumber,
      }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.state.accountNumber.length > 0
          ? "You entered: " + this.state.accountNumber
          : ""
      )
    );
  }
}
