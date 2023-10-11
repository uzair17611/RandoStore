import React from 'react';
import new_collection from '../Assets/new_collections';
import Items from '../Items/Items';

const NewCollection = () => {
  return (
    <div className="flex flex-col flex-wrap items-center">
      <h1 className="text-3xl font-bold mb-4">New Collection</h1>
      <hr className="w-1/4 mb-4" />
      <div className="grid grid-cols-4 gap-4">
        {new_collection.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection