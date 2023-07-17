import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions"




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


onLeaveFeedback = (add) => {
  this.setState((prevState) => ({
    [add]: prevState[add] + 1
  }));
}

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
}

countPositiveFeedbackPercentage = () => {
  const total = this.countTotalFeedback();
  const { good } = this.state;
  return total>0 ? Math.round((good/total)*100):0
} 

