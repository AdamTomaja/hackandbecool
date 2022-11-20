import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductAddForm from '../ProductForm/ProductAddForm';
import ProductForm from '../ProductForm/ProductForm';
import ProductsList from '../Products/ProductsList';
import ProductsDataNeedToBuy from './ProductsNeedToBuy';
import ProductsOutOfStock from './ProductsOutOfStock';

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
        </TabPanel>
      </Tabs>
    )
};

export default AllTabsContainer;