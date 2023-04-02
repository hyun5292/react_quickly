class SliderValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0,
    };
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(event) {
    this.setState({ sliderValue: event.detail.ui.value });
  }

  componentDidMount() {
    window.addEventListener("slide", this.handleSlide);
  }

  componentWillUnmount() {
    window.removeEventListener("slide", this.handleSlide);
  }

  render() {
    return <div className="">Value: {this.state.sliderValue}</div>;
  }
}
