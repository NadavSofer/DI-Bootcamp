import { useState, useEffect } from 'react';
const data = require('../data.json')

const QuoteGenerator = props =>{
    const [quote, setQuote] = useState('5');
    const [author, setAuthor] = useState('');
    const [randomNum, setRandomNum] = useState(generateRandomNum());

    useEffect(()=> {
        generateQuote()
        document.title = 'Random Quote Generator'
    },[])


    function generateRandomNum()  {
        return Math.floor(Math.random() * data.length);
    }

    const generateQuote = () => {
        const ranNum = generateRandomNum();
        if (randomNum !== ranNum) {
            setRandomNum(ranNum);
            setAuthor('anonymous');
            setQuote(data[ranNum]['quote']);
            if (data[ranNum]['author'] === '') {
                setAuthor('anonymous');
            } else {
                setAuthor(data[ranNum]['author']);
            }
    
            console.log(data[ranNum]);
            console.log(quote);
            console.log(author);
        } else {
            console.log(`same number==> ${ranNum}`);
        }
    };
    
    const boxStyle = {
        border: 'solid 1px white', 
        width: '40vw', 
        height: '15rem', 
        padding: '1rem'}

    const ButtonStyle = {
        border: 'none', 
        padding: '1rem 2rem', 
        backgroundColor: '#61dafb', 
        fontSize: '1.5rem', 
        borderRadius: '5px',
    marginTop: '2rem'}

    return (
        <div>
            <div style={boxStyle}>
                <p style={{fontSize: '1.5rem'}}>{author} once said:</p>
                <p>{quote}</p>
                
            </div>
            <button onClick={generateQuote} style={ButtonStyle}>Generate</button>
        </div>
    )

}

export default QuoteGenerator