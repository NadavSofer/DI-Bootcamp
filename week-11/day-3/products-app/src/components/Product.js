import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link, useNavigate } from 'react-router-dom';



const Product = props => {
    const [product, setProduct] = useState([]);
    const[name, setName] = useState('');
    const[price, setPrice] = useState('');

    const params = useParams()
    const Navigate = useNavigate()

    useEffect(()=> {
        getProductInfo()
    },[])

    const getProductInfo = async () => {
        try {
            const res =  await fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${params.id}`);
            const data = await res.json()
            setProduct(data);

            setName(data[0].name)
            setPrice(data[0].price)
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = e => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${params.id}`,{
            method:'put',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({name,price})
        })
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    const deleteProduct = () => {

        fetch(`${process.env.REACT_APP_BASE_URL}/api/products/${params.id}`,{
            method:'delete',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        })
        Navigate('/')

    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Product: {params.id}</h1>

            {
                product.map(item=> {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }

            <form onSubmit={updateProduct} method='put'>
                Name: <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
                Price: <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <input type='submit' value='submit' />
            </form>

            <div>
                <button onClick={deleteProduct}>delete</button>
            </div>
        </div>
    )
}

export default Product