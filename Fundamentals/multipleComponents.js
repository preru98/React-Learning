function Button(props) {
  
      return (
        <button onClick = {props.message}>Increment</button>
      );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App(){
  const [counter, setCounter] = useState(5);
  
  const handler = () => {
      setCounter(counter*2);
  }
  
  return(
  <>
    <Button message = {handler}/>
    <Display message = {counter}/>
  </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);
