let helloWorldReactElement = <h1>Hello World!</h1>;

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {helloWorldReactElement}
        {helloWorldReactElement}
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("content"));
