import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductAddForm from '../ProductForm/ProductAddForm';
import ProductForm from '../ProductForm/ProductForm';
import ProductsList from '../Products/ProductsList';
import ProductsDataNeedToBuy from './ProductsNeedToBuy';
import ProductsOutOfStock from './ProductsOutOfStock';
import HabitsList from "../Habits/HabitsList";

const AllTabsContainer = () => {

  const [tabIndex, setTabIndex] = useState(0);

  let currentTab = tabIndex;
  if(currentTab === 0) {

  } else if(currentTab === 1) {
    
  }

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex items-center justify-center border-2 border-t-0 border-solid border-black">
          <Tab>Shopping List</Tab>
          <Tab>My Food</Tab>
          <Tab>Historical</Tab>
          <Tab>Zero-waste habits</Tab>
        </TabList>
    
        <TabPanel className="flex items-center justify-center" >
          <ProductForm />
          <ProductsDataNeedToBuy />
        </TabPanel>

        <TabPanel className="flex items-center justify-center" >
            <ProductAddForm />
            <ProductsList />
        </TabPanel>
        <TabPanel>
          <ProductsOutOfStock />
        </TabPanel>
        <TabPanel>
          <HabitsList />
        </TabPanel>
      </Tabs>
    )
};

export default AllTabsContainer;