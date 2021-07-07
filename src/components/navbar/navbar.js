
import { useState } from 'react';
import { useHistory } from 'react-router';
import './navbar.css'
function NavBar(props) {
    let history = useHistory();
    function search(event) {
        props.search(event.target[0].value);
    }
    function redirect() {
        history.push('/')
    }
    let [searchValue, setSearchValue] = useState("Search");
    return (
        <div className="navBarWrapper">
            <label onClick={redirect}>TELECT</label>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); search(e); }}  >
                    <input value={searchValue} onClick={() => { setSearchValue("") }} onChange={(e) => { setSearchValue(e.target.value) }}></input>
                </form>
            </div>
        </div>

    )
}

export default NavBar;