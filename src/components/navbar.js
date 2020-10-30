import React from 'react';

const Navbar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage('planets')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
            <button onClick={() => setPage('starships')}>Starships</button>
            <button onClick={() => setPage('vehicles')}>Vehicles</button>
            <button onClick={() => setPage('species')}>Species</button>
        </nav>
     );
}
 
export default Navbar;