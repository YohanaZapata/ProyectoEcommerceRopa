import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const section = location.pathname.includes('/women') ? 'women' : 'men';

  useEffect(() => {
    if (query) {
      fetch(`https://api.example.com/products?search=${query}&section=${section}`)
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [query, section]);

  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      {results.length > 0 ? (
        <ul>
          {results.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
