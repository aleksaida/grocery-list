import './App.css';
import image from './shop.jfif';
import imageTwo from './shoptwo.jfif';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={ image } width="200px" alt="shop" />
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>     
      <GroceryList />
      <div className='container'>
      <img src={ imageTwo } width="200px" alt="shoptwo" />
      </div>
    </div>
  );
}

export default App;
