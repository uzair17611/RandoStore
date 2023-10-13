import React ,{useEffect,useState}from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"
import axiosRequest from '../../Utilis/axiosRequest';
const BreadCrums = (props) => {

  
    const [newProduct, setNewProduct] = useState({});

    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axiosRequest.get("/items");
          console.log(response);
          setNewProduct(response.data ?? {});
        } catch (error) {
          console.error('Error fetching product:', error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, []);
 
    

    

    return (
        <div className="flex items-center m-auto mt-10 mb-10 justify-center gap-10">
            home <img src={arrow_icon} alt="" />  shop <img src={arrow_icon} alt="" /> Mens <img src={arrow_icon} alt="" /> {newProduct?.name}
        </div>
    )
}

export default BreadCrums