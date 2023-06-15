import { useState, useEffect } from 'react';
const data = require('../data.json')

const QuoteGenerator = props => {
    const [quote, setQuote] = useState('5');
    const [author, setAuthor] = useState('');
    const [randomNum, setRandomNum] = useState(generateRandomNum());
    const [color, setColor] = useState('');

    useEffect(() => {
        generateQuote()
        document.title = 'Random Quote Generator'
    }, [])

    function generateRandomRGB() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

        return rgb;
    }



    function generateRandomNum() {
        return Math.floor(Math.random() * data.length);
    }

    const generateQuote = () => {
        const ranNum = generateRandomNum();
        const ranColor = generateRandomRGB();
        if (randomNum !== ranNum) {
            setRandomNum(ranNum);
            setColor(ranColor)
            setAuthor('anonymous');
            setQuote(data[ranNum]['quote']);
            if (data[ranNum]['author'] === '') {
                setAuthor('anonymous');
            } else {
                setAuthor(data[ranNum]['author']);
            }

            console.log(ranColor);
        } else {
            console.log(`same number==> ${ranNum}`);
        }
    };

    const containerStyle = {
        backgroundColor: color, 
        height: '100vh', 
        width: '100vw', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'
    }

    const boxStyle = {
        border: 'solid 1px white',
        width: '40vw',
        height: '15rem',
        padding: '1rem',
        backgroundColor: '#eeeeee',
        color: color
    }

    const ButtonStyle = {
        border: 'none',
        padding: '1rem 2rem',
        backgroundColor: '#61dafb',
        fontSize: '1.5rem',
        borderRadius: '5px',
        marginTop: '2rem'
    }


    return (
        <div style={containerStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
                <div style={boxStyle}>
                    <p style={{ fontSize: '1.5rem' }}>{author} once said:</p>
                    <p>{quote}</p>

                </div>
                <button onClick={generateQuote} style={ButtonStyle}>Generate</button>
            </div>

        </div>
    )

}

export default QuoteGenerator