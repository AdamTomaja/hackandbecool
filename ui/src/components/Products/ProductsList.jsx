import {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { getProducts } from '../../services/ProductServices';

export const ProductsList = () => {

    const [productsData , setProductsData] = useState();
    const [toastVisibility, setToastVisibility] = useState(true);
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCaseText = e.target.value.toLowerCase();
        setInputText(lowerCaseText);
      };

      const filteredData = productsData?.filter((el) => {
        if (el?.code === '') {
            return el;
        }
        else {
            return el?.code?.toLowerCase().includes(inputText);
        };
    });

    useEffect(() => {
        getProducts().then((promise) => {
            if(promise.succeded && promise.requestStatus !== 200) {
                return;
            }  else if(promise.succeded && promise.requestStatus === 200)  {
                setProductsData(promise.data);
            } 
        })
        return () => {
            setToastVisibility(true);
        }
    }, [])
    const expirationDate = 7;

    const expirationDateDot = expirationDate >= 7 ? <div className='text-green-700 text-xl text-center'> · </div> 
    :  expirationDate >= 3 ? 
    <div className='text-yellow-700 text-xl text-center'> · </div> : <div className='text-red-700 text-xl text-center'> · </div>

    return (
<div>
  <div className="form-control py-2">
    <div className="input-group">
      <input type="text" placeholder="Szukaj…" className="input input-bordered" onChange={inputHandler} />
  </div>
</div>
        
<div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Nazwa</th>
        <th>Data ważności</th>
      </tr>
    </thead>
    <tbody>
    {
    filteredData?.map((el , index ) => {
      return (
    <tr className="hover" key={el?.id}>
        <td>  
              <div className="font-bold">{el?.name}</div>
        </td> 
        <td><div className="text-xs opacity-50">{el?.expirationDate}</div></td>
      <td>{expirationDateDot}</td>
    </tr>
      )
})
    } 
    </tbody>
  </table>
</div>
        </div>
    )
};

export default ProductsList;
