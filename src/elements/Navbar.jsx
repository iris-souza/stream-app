import React, { useState } from "react";
import{Link, useNavigate} from "react-router-dom";
import "./navbar_estilo.css";

const Navbar=()=>{
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!search) return;
        navigate(`/search?q=${search}`, { replace: true});
        setSearch("");
    };

    return(
        <div id="navbar">
            <div>
                <h2 className="logo"><Link to ="/">STREAM</Link></h2>
            </div>
            <div className="nav_text">
                <p><Link to="/favoritos">Favoritos</Link></p> 
                <p><Link to="/suaLista">Sua lista</Link></p>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Pesquisar por..."
                    onChange={(e) => setSearch (e.target.value)}
                    value={search}
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
            
        </div>
    )
}

export default Navbar