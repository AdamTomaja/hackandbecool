import {useState, useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { getProductsOutOfStock } from '../../services/ProductServices';

export const ProductsOutOfStock = () => {

    const [productsDataInStock , setProductsDataInStock] = useState();
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCaseText = e.target.value.toLowerCase();
        setInputText(lowerCaseText);
      };

      const filteredData = productsDataInStock?.filter((el) => {
        if (el?.name === '') {
            return el;
        }
        else {
            return el?.name?.toLowerCase().includes(inputText);
        };
    });

    useEffect(() => {
        getProductsOutOfStock().then((promise) => {
              if(promise.succeded && promise.requestStatus !== 200) {
                  return;
              }  else if(promise.succeded && promise.requestStatus === 200)  {
                setProductsDataInStock(promise.data);
              } 
          })
      }, [])

    return (
<div>
  <div className="form-control py-2">
    <div className="input-group">
      <input type="text" placeholder="Search…" className="input input-bordered" onChange={inputHandler} />
  </div>
</div>
        
<div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Expiration date</th>
      </tr>
    </thead>
    <tbody>
    {
    filteredData?.map((el , index ) => {
      return (
    <tr className="hover" key={el?.id}>
        <td className=''>  
            <div className="font-bold flex justify-start items-center">
                {el?.name} 
                <div className='pb-2 ml-1'>
                {el?.expirationDate >= 7 ? <div className='text-green-700 text-6xl'> · </div>   :
                el?.expirationDate >= 3 ?  
                <div className='text-yellow-700 text-6xl'> · </div> : 
                <div className='text-red-700 text-6xl'> · </div>}
                </div> 

            </div>         
        </td> 
        <td><div className="text-xs opacity-70">{el?.expirationDate}</div></td>
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

export default ProductsOutOfStock;
