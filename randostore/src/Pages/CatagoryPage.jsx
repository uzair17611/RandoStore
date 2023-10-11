import React, { useContext } from 'react'
import { ItemsContext } from '../Component/ItemsContext/ItemsContext'
import drop_down_icon  from "../Component/Assets/dropdown_icon.png"
import Items from '../Component/Items/Items'


// CatagoryPage component
const CatagoryPage = (props) => {
    const { all_Product } = useContext(ItemsContext);

    console.log("props",props.catagory)
  
 
  
    return (
      <div>
        <img src={props.banner} alt="" />
  
        <div>
          <span>showing 1-12</span>out of 1-36
  
          <div>
            sort by <img src={drop_down_icon} alt="" />
          </div>
        </div>
  
        <div>
          {all_Product.map((item, i) => {
            if (props.catagory === item.category) {
              return <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  };
  
  export default CatagoryPage;
  
