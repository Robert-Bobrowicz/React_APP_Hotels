import { useEffect, useLayoutEffect, useState } from "react";

const quotes = [
    '“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide',
    '“Remember that happiness is a way of travel – not a destination.” – Roy M. Goodman',
    '“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta',
    '“We travel, some of us forever, to seek other states, other lives, other souls.” – Anais Nin',
    '“A journey of a thousand miles must begin with a single step.” – Lao Tzu'
];

const style = {
    position: 'absolute',
    top: '210px',
    left: '0',
    right: '0',
    textAlign: 'center',
    color: '#ffe6f0',
    fontSize: '1.2rem',
    fontStyle: 'italic'
}

function InspiringQuote(props) {
    const [quote, setQuote] = useState('Quote is loading ...');
    const [loadQuote, setLoadQuote] = useState(true);

    useEffect(() => {

        setLoadQuote(false);
    }, []);

    useLayoutEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [loadQuote]);

    return (
        <div style={style}>
            {quote}
        </div>
    )
}

export default InspiringQuote;