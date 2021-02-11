export default function Statistics({ data }) {
  const { good, neutral, bad } = data;
  return (
    <div>
      <h3>Statistics</h3>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
}
