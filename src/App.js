import React,{useState} from 'react'
import Products from './Products';
import "./App.css"

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "a1bfd81e";
  const YOUR_APP_KEY ="a49415c9e0f0e673e29163ddf3248b84";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="search-container card">
      <center>
        <h1>Food Recipe App</h1>
        <form onSubmit={submitHandler} className="search-form">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
            className="search-input"
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <br></br>
       <div><p><b>Ex:</b> pizza, biryani, sushi....etc</p></div> 
        {data.length >= 1 && <Products data={data} />}
      </center>
    </div>
  )
}

export default App
