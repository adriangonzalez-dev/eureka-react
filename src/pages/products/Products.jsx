import React, {  useState } from 'react'
import {CardProduct} from './components/CardProduct'
import {productos} from '../../static/images'
import { Search } from './components/Search';
import styles from './Products.module.css';
import Swal from 'sweetalert2'


export const Products = () => {
  const [products] = useState(productos);
  const [search, setSearch] = useState('');
  const [searchProducts, setSearchProducts] = useState([])

  const handleChange = (value) => {
    let newValue = value.trim().toLowerCase()
    setSearch(newValue);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const findProducts = productos.filter(producto=>producto.name.includes(search))
    setSearchProducts(findProducts)

    if(findProducts.length < 1){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `No hay resultados para ${search}`,
      })
      setSearch('')
    }
}
  return (
    <>
    <Search 
    handleChange={handleChange} 
    search={search}
    handleSubmit={handleSubmit}
    />
      {
        (searchProducts.length > 0)
        ? <article className={styles.productContainer}>
        {
          searchProducts.map((product, index)=><CardProduct
                                  name={product.name}
                                  image={product.image}
                                  price={product.price}
                                  category={product.category}
                                  key={product.name}/>
        )
        }
        </article>
        :
        <article className={styles.productContainer}>
          {
            products.map((product, index)=><CardProduct
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                    key={index + new Date()}/>
          )
          }
        </article>
      }
    </>
  )
}
