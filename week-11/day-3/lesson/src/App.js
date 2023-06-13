// import logo from './logo.svg';
import './App.css';
// import Parent from './Components/Parent';
// import Child from './Components/Child';
// import Counter from './Components/Counter';
// import ErrorBoundary from './ErrorBoundary';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('thing')

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form)

    //with form data 
    // fetch('some link/api', {method:form.method, body:formData})

    // with plain data
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson);
    fetch('some link/api', 
    { method:form.method, 
      body:{
        name: e.target.name.value,
        userName: e.target.userName.value
      }
      
    })
  }
  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit} method='post'>
          <label>
            name: <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)} />
          </label>

          <label>
            userName: <input type='text' name='userName'/>
          </label>

          <input type='submit' value="send"/>
        </form>

      </header>
    </div>
  );
}

export default App;


{/* <Parent username='admin'>
<Child/>
</Parent>

<ErrorBoundary>
<Counter/>
</ErrorBoundary>

<ErrorBoundary>
<Counter/>
</ErrorBoundary> */}