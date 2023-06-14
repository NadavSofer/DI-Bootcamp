import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = props => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const[name, setName] = useState('')
    const[price, setPrice] = useState('')

    useEffect(() => {
        all()
    }, [])

    const all = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const searchProduct = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/search?name=${search}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
                console.log(`${process.env.REACT_APP_BASE_URL}/api/search?name=${search}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addProduct = e => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/api/products`,{
            method:'post',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({name,price})
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                all()
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h1>shop</h1>
            <div>
                <input type='text' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchProduct}>search</button>
            </div>

            <div>
                <form onSubmit={addProduct} method='post'>
                    <h3>name: <input onChange={(e)=>setName(e.target.value)} /></h3>
                    <h3>price: <input onChange={(e)=>setPrice(e.target.value)} /></h3>
                    <input type='submit' value='submit' />
                </form>
            </div>

            {
                products.map(item => {
                    return (
                        <div key={item.id} style={{
                            display: 'inline-block',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid #fff',
                        }}>
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                            <Link to={`/${item.id}`}>Shop now!</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products