import React, { Component } from 'react';

class Review extends Component {

  render() {
    // const { review } = this.props

    return (
      <div>
        <li>
         <p> Review Text</p> {this.props.review.text}
    
          </li>

        <button onClick={() => this.props.delete(this.props.review.id)}> X </button>
        
      </div>
    );
  }

};

export default Review;
