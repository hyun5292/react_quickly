class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }

  render() {
    return (
      <div>
        <ClickCounterButton
          counter={this.state.counter}
          handler={this.handleClick}
        />
      </div>
    );
  }
}
