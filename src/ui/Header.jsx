import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
function Header() {
    return (
        <div>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <p>Your one-stop shop for delicious pizza!</p>
        </div>
    )
}

export default Header
