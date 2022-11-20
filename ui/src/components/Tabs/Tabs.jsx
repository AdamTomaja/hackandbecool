import {useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getProductsInStock, getProductsNeedToBuy, getProductsOutOfStock } from '../../services/ProductServices';
import ProductForm from '../ProductForm/ProductForm';

const AllTabs = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const [productsDataNeedToBuy , setProductsDataNeedToBuy] = useState();
  const [productsDataOutOfStock , setProductsDataOutOfStock] = useState();
  const [productsDataInStock , setProductsDataInStock] = useState();
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    let lowerCaseText = e.target.value.toLowerCase();
    setInputText(lowerCaseText);
  };

  let currentTab = (index) => {
    switch(index) {
      case 0: 
       return productsDataNeedToBuy;

      case 1:
        return productsDataOutOfStock;
     
      case 2:
        return productsDataInStock;
      
      // case 3:
      //   return "habits";

      default:
        break;
    }
  }
  console.log(currentTab);


  let filteredData = currentTab(tabIndex)?.filter((el) => {
    if (el?.name === '') {
        return el;
    }
    else {
        return el?.name?.toLowerCase().includes(inputText);
    };
});
  
  useEffect(() => {
    getProductsNeedToBuy().then((promise) => {
          if(promise.succeded && promise.requestStatus !== 200) {
              return;
          }  else if(promise.succeded && promise.requestStatus === 200)  {
            setProductsDataNeedToBuy(promise.data);
          } 
      })
  }, [])

  useEffect(() => {
    getProductsOutOfStock().then((promise) => {
          if(promise.succeded && promise.requestStatus !== 200) {
              return;
          }  else if(promise.succeded && promise.requestStatus === 200)  {
            setProductsDataOutOfStock(promise.data);
          } 
      })
  }, [])

  useEffect(() => {
    getProductsInStock().then((promise) => {
          if(promise.succeded && promise.requestStatus !== 200) {
              return;
          }  else if(promise.succeded && promise.requestStatus === 200)  {
            setProductsDataInStock(promise.data);
          } 
      })
  }, [])

  console.log(tabIndex);

  const ProductsList = () => {
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

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Shopping List</Tab>
          <Tab>My Food</Tab>
          <Tab>Historical</Tab>
          <Tab>Zero-waste habits</Tab>
        </TabList>
    
        <TabPanel>
            <ProductsList />
        </TabPanel>

        <TabPanel>
            <ProductForm />
            <ProductsList />
        </TabPanel>
        <TabPanel>
          <ProductsList />
        </TabPanel>
        <TabPanel>
          <p>
            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
            characterized by their variety of colors.
          </p>
          <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    )
};

export default AllTabs;