import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default class Home extends React.Component {

  render() {
    return (
      <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        <div className="item"><h4>7</h4></div>
        <div className="item"><h4>8</h4></div>
        <div className="item"><h4>9</h4></div>
        <div className="item"><h4>10</h4></div>
        <div className="item"><h4>11</h4></div>
        <div className="item"><h4>12</h4></div>
      </OwlCarousel>
    );
  }
}
