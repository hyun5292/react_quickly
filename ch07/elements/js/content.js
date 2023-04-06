class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false,
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false,
      },
      selectedValue: "node",
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked;
    this.setState({ radioGroup: obj });
  }

  handleCheckbox(event) {
    let obj = this.state.checkboxGroup;
    obj[event.target.value] = event.target.checked; // true or false
    this.setState({ checkboxGroup: obj });
  }

  handleSelectChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleSubmit() {
    fetch(this.props["data-url"], {
      method: "POST",
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Submitted: ", data);
      });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "radio",
        name: "radioGroup",
        value: "Angular",
        checked: this.state.radioGroup["angular"],
        onChange: this.handleRadio,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "radio",
        name: "radioGroup",
        value: "React",
        checked: this.state.radioGroup["react"],
        onChange: this.handleRadio,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "radio",
        name: "radioGroup",
        value: "Polymer",
        checked: this.state.radioGroup["polymer"],
        onChange: this.handleRadio,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "checkbox",
        name: "checkboxGroup",
        value: "Node",
        checked: this.state.radioGroup["node"],
        onChange: this.handleCheckbox,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "checkbox",
        name: "checkboxGroup",
        value: "React",
        checked: this.state.radioGroup["react"],
        onChange: this.handleCheckbox,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "checkbox",
        name: "checkboxGroup",
        value: "Express",
        checked: this.state.radioGroup["express"],
        onChange: this.handleCheckbox,
      }),
      React.createElement("br", null),
      React.createElement("input", {
        type: "checkbox",
        name: "checkboxGroup",
        value: "MongoDB",
        checked: this.state.radioGroup["mongodb"],
        onChange: this.handleCheckbox,
      }),
      React.createElement("br", null),
      React.createElement(
        "select",
        {
          value: this.state.selectedValue,
          onChange: this.handleSelectChange,
        },
        React.createElement(
          "option",
          {
            value: "ruby",
          },
          "Ruby"
        ),
        React.createElement(
          "option",
          {
            value: "node",
          },
          "Node"
        ),
        React.createElement(
          "option",
          {
            value: "python",
          },
          "Python"
        )
      ),
      React.createElement("br", null),
      React.createElement("input", {
        type: "text",
        onChange: this.handleSelectChange,
        defaultValue: "hi@azat.co",
      }),
      React.createElement("br", null),
      React.createElement("input", {
        name: "firstName",
        onChange: this.handleFirstNameChange,
        type: "text",
      }),
      React.createElement("br", null),
      React.createElement(
        "button",
        {
          type: "button",
          onChange: this.handleSubmit,
        },
        "Submit"
      )
    );
  }
}
