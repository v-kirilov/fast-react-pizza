import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
    return (
        <header className="bg-yellow-500 uppercase">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
            <SearchOrder />
            <p>Your one-stop shop for delicious pizza!</p>
            <Username />
        </header>
    )
}

export default Header
