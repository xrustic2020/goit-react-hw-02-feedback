export default function leaveFeedback(type) {
  this.setState(prevState => {
    return { [type]: prevState[type] + 1 };
  });
}
