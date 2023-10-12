import React, { useContext } from 'react'
import { ItemsContext } from '../Component/ItemsContext/ItemsContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Component/BreadCrums/BreadCrums'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'

const Products = () => {
    const { all_Product } = useContext(ItemsContext)

    console.log(all_Product)
    const { productId } = useParams()

    console.log("productId" ,productId)
    const product = all_Product.find((e) => e.id === Number(productId))
    console.log("Produts of Produts" ,product)

    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product}/>
        </div>
    )
}

export default Products
