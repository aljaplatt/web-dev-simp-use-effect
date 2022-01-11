import { useState, useEffect } from "react";
import "./App.css";

/* useEffect allows us to perform side effects on a functional component.
In class components, you could use lifecycle methods - but these do not work 
for fn components 

These would allow you to run a piece of code when a lifecycle event occurred, 
such as when it mounts/unmounts, renders/re-renders, receives new props.

 */

function App() {
  const [resourceType, setResourceType] = useState("posts");
  console.log("render");
  /* Example 1 - this will print 'render' in the console every time the browser 
  re-renders  - can be useful, but more likely we want to do something when a specific 
  resource changes - see example 2*/
  // useEffect(() => {
  //   console.log("render");
  // });

  /* Example 2 - Here we pass in an array as the second parameter.
  Whatever you pass into this array, are values that will trigger 
  your useEffect code to run - in this example 'resourceType is passed 
  in. Whenever the resourceType changes, the code will run - simply, 
  by clicking on the same button - nothing happens, click on a diff button, 
  render is shown*/
  // useEffect(() => {
  //   console.log("resource type changed");
  // }, [resourceType]);

  /* If we were to pass in an empty array, the hook will only run on mount 
  - the first time. The empty array never actually changes*/

  // useEffect(() => {
  //   console.log("onMount");
  // }, []);

  // we want to query the api below - call a specific resource type. 6:20
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <div className="App">
      <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
