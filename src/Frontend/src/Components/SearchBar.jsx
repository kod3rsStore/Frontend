import React, { useState} from 'react';
import '../Styles/components/SearchBar.css';
import { Link } from 'react-router-dom';


const SearchBar = () => {
    const [text, setText] = useState("");
    
    function handleChange(event){
        setText(event.target.value)
    }

    return (
        <div className="Search-by-name">
            <div className="SearchInput"><input  onChange={handleChange} type="text" className="input" placeholder="Buscar" /></div>
            <Link to={{
                        pathname: '/products2',
                        word: 'name?s='+text,
                    }}>
                <div className="SearchBtn">
                <img id="glass" src="/img/glass.png" alt="Search into our store"/>
                </div>
            </Link>
        </div>
    )
}
export default SearchBar;