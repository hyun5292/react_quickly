class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event);
  }

  render() {
    return <button onClick={this.handleSave.bind(this)}>Save</button>;
  }
}
