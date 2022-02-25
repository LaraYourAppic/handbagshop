import React from 'react';
import './App.css';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Button from "./Components/Button";
import Product from "./Components/Product";
import Tile from "./Components/Tile";

function App() {
  return (
<>
        <h1>Handbags & Purses</h1>
      <nav>
          <Button
              typeOfButton="button"
              clickHandler={() => console.log("to the collection")}
              toggleDisabled={false}
              buttonName="to the collection"
          />
          <Button
              typeOfButton="button"
              clickHandler={() => console.log("shop all bags")}
              toggleDisabled={false}
              buttonName="shop all bags"
          />
          <Button
              typeOfButton="button"
              clickHandler={() => console.log("pre order")}
              toggleDisabled={true}
              buttonName="pre order"
          />

      </nav>
    <main>
        <Product
        category="Best Seller"
        image={bag_1}
        description= "The handy bag"
        price="€400"
        />
        <Product
            category="Best Seller"
            image={bag_2}
            description= "The stylish bag"
            price="€250"
        />
        <Product
            category="New Collection"
            image={bag_3}
            description= "The simple bag"
            price="€300"
        />
        <Product
            category="New Collection"
            image={bag_4}
            description= "The trendy bag"
            price="€150"
        />
    </main>
    <footer>
        <Tile
            title= "The Brand"
            children= "lorem Ipsum"
        />
        <Tile
            image={brand}
        />
        <Tile
            image={our_story}
        />
        <Tile
            title="Our Story"
            children= "lorem ipsum"
        />
    </footer>
    </>
  );
}
export default App;



