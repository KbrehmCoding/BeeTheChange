import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./coverPic.scss";

class Slider extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        index: 0,
        direction: null,
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
      const { index, direction } = this.state;

      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1501261942928-5f1a1aec5fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="capOne">
              <h3>Save The Bees</h3>
              <p>Bee the Change allows you to help the dwindeling bee population</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
              alt="second slide"
            />
            <Carousel.Caption className="capTwo">
              <h3>Sponser A Farmer</h3>
              <p>Donate money to a local farmer to help care for the bees.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1548365329-c628c7005461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Third slide"
            />
            <Carousel.Caption className="capThree">
              <h3>Be A Sponser</h3>
              <p>
                Sponsering farmers and hives will allow you to unlock rewards.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

  export default Slider;
