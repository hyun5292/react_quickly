class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-primary" onclick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
}

class Link extends React.Component {
  render() {
    return (
      <a href="#" onClick={this.props.handleClick}>
        {this.props.label}
      </a>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img
        onclick={this.props.handleClick}
        width="40"
        src="logo.png"
        alt="로고"
      />
    );
  }
}
