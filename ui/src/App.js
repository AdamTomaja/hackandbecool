import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm';
import ProductsList from './components/Products/ProductsList';

function App() {
  return (
    <div className="App">
      <ProductForm />
      <ProductsList />
    </div>
  );
}

export default App;
