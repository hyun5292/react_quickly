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
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadio(event) {
    let obj = {};
    obj[event.target.value] = event.target.checked;
    this.setState({ radioGroup: obj });
  }

  handleCheckbox(event) {
    let obj = Object.assign(this.state.checkboxGroup);
    obj[event.target.value] = event.target.checked;
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
    return (
      <form action="#">
        <input
          type="radio"
          name="radioGroup"
          value="Angular"
          checked={this.state.radioGroup["angular"]}
          onChange={this.handleRadio}
        />
        <br />
        <input
          type="radio"
          name="radioGroup"
          value="React"
          checked={this.state.radioGroup["react"]}
          onChange={this.handleRadio}
        />
        <br />
        <input
          type="radio"
          name="radioGroup"
          value="Polymer"
          checked={this.state.radioGroup["polymer"]}
          onChange={this.handleRadio}
        />
        <br />
        <input
          type="checkbox"
          name="checkboxGroup"
          value="node"
          checked={this.state.checkboxGroup["node"]}
          onChange={this.handleCheckbox}
        />
        <br />
        <input
          type="checkbox"
          name="checkboxGroup"
          value="React"
          checked={this.state.checkboxGroup["react"]}
          onChange={this.handleCheckbox}
        />
        <br />
        <input
          type="checkbox"
          name="checkboxGroup"
          value="Express"
          checked={this.state.checkboxGroup["express"]}
          onChange={this.handleCheckbox}
        />
        <br />
        <input
          type="checkbox"
          name="checkboxGroup"
          value="MongoDB"
          checked={this.state.checkboxGroup["mongodb"]}
          onChange={this.handleCheckbox}
        />
        <br />
        <select
          value={this.state.selectedValue}
          onChange={this.handleSelectChange}
        >
          <option value="ruby">Ruby</option>
          <option value="node">Node</option>
          <option value="python">Python</option>
        </select>
        <input
          type="text"
          onChange={this.handleChange}
          defaultValue="hi@azat.co"
        />
        <input
          name="firstName"
          onChange={this.handleFirstNameChange}
          type="text"
        />
        <input type="button" onClick={this.handleSubmit} value="Submit" />
      </form>
    );
  }
}
