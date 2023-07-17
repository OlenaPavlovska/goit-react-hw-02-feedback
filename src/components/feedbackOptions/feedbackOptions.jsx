// import css from './data.module.css'
import PropTypes from 'prop-types'
import { Component } from "react";


export class FeedbackOptions extends Component {
    
    render() {
        const { onLeaveFeedback } = this.props
        return (
            <div>
                <button type='button' onClick={() => onLeaveFeedback('good')}>Good</button>
                <button type='button' onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
                <button type='button' onClick={() => onLeaveFeedback('bad')}>Bad</button>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}











   
    
    
 


    

 
