import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount = () => {
    const img = this.imgRef.current;
    img.addEventListener('load', this.setSpans);
  };

  setSpans = () => {
    const img = this.imgRef.current;
    const height = img.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(spans);
    this.setState({ spans });
  };
  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} ref={this.imgRef} alt={description} />;
      </div>
    );
  }
}

export default ImageCard;
