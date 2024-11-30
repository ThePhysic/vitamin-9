import React, { useState } from 'react';

function App() {
    const [quote, setQuote] = useState('');

    const fetchQuote = () => {
        fetch('https://vitamin-9-t2yj.onrender.com/quote') // Replace with your Flask backend URL
            .then((response) => response.json())
            .then((data) => setQuote(data.quote))
            .catch((error) => console.error('Error fetching the quote:', error));
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Quote of the Day</h1>
            <button
                onClick={fetchQuote}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    backgroundColor: '#f5f5f5',
                }}
            >
                Get Quote
            </button>
            <p style={{ marginTop: '20px', fontSize: '1.2rem', fontStyle: 'italic' }}>{quote}</p>
        </div>
    );
}

export default App;
