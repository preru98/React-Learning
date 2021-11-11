function Button(props) {
      return (
        <button onClick = {props.message}>+{props.display}</button>
      );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App(){
  const [counter, setCounter] = useState(5);
  
  const handler = (incrementValue) => {
      setCounter(counter+incrementValue);
  }
  
  return(
  <>
      {
        [...Array(3).keys()].map(i => {
          return <Button message = {() => {handler(Math.pow(10, i))} } display = {Math.pow(10, i)}  />
        })
      }
    <Display message = {counter}/>
  </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);
