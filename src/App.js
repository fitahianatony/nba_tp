function App(props) {
  return (
    <div className="App">
      <div className="team">
      {props.team}
        <h3>{props.score}</h3>
      </div>
      <div className="team">
        {props.team}
        <h3>{props.score}</h3>
      </div>
    </div>    
  );
}

export default App;
