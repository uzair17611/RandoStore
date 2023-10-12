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
        <img src={props.banner} alt="" className="block w-[82%] mx-auto" />
  
        <div className="flex  justify-between items-center">
   
          <div className='ml-20 mt-5'>
            <p className="font-semibold">
          <span className="font-semibold" >showing 1-12</span>out of 1-36
          </p>
          </div>
  
          <div className='px-4 py-2 flex mr-10  border-1 border border-black rounded-full mt-5'>
            sort by <img src={drop_down_icon} alt="" className='w-[30px]' />
          </div>
        </div>
  
        <div className="grid grid-cols-4 row-gap-4 m-20  mx-170  gap-y-8  gap-4">
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

        <div className="flex justify-center items-center w-[233px] h-[69px] text-[18px] font-semibold bg-slate-100 m-auto  rounded-full mb-10">
  Explore More
</div>
      </div>
    );
  };
  
  export default CatagoryPage;
  
