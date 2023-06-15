import { useState, useEffect } from 'react'
const data = require('../data.json')
const Main = props => {
    const [characters, setCharacters] = useState(data);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        shuffle()
    }, [])


    function shuffle() {
        const shuffled = [...characters]
        let currentIndex = shuffled.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffled[currentIndex], shuffled[randomIndex]] = [
                shuffled[randomIndex], shuffled[currentIndex]];
        }
        setCharacters(shuffled);
        console.log(characters);
    }


    const scoring = (itemName) => {
        setScore(score + 1);
        const updatedChecked = [...checked, itemName];
        setChecked(updatedChecked);
        const count = updatedChecked.filter((x) => x === itemName).length;
        console.log(updatedChecked);
        console.log(count);
        if (count > 1) {
            setChecked([])
            setScore(0)
            if (score > bestScore) {
                setBestScore(score);
            }
        if (score === 12) {
            alert('you win!!!')
            setChecked([])
            setScore(0)
            if (score > bestScore) {
                setBestScore(score);
            }
        }
        }

    };


    const handleClick = (itemName) => {
        shuffle()
        scoring(itemName)
    }

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70vw'
    }

    return (
        <div>
            <div className='score' style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', }}>
                <h2>score: {score}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
            <div className='game-container' style={containerStyle}>
                {
                    characters.map((item, i) => {
                        return (
                            <div className='heroBox' style={{ height: '25rem', width: '12.5rem' }} key={i} onClick={() => handleClick(item.name)}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '80%' }} />
                                <p style={{ fontSize: '1rem' }}>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Main