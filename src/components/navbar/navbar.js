
import { useState } from 'react';
import './navbar.css'
function NavBar(props) {
    function search(event) {
        props.search(event.target[0].value);
    }
    let [searchValue, setSearchValue] = useState("Search");
    return (
        <div className="navBarWrapper">
            <label>TELECT</label>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); search(e); }}  >
                    <input value={searchValue} onClick={() => { setSearchValue("") }} onChange={(e) => { setSearchValue(e.target.value) }}></input>
                </form>
            </div>
        </div>

    )
}

export default NavBar;