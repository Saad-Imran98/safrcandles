import "./NavBarStyles.css";
import logo from "../assets/1.svg";
import {AccountBox, Search, ShoppingBasket} from "@mui/icons-material";
export default function NavBar() {
    return (
        <div style={{
            height: "150px",
            color: "#020202",
            fontSize: "1.5em",
            // backgroundColor: "#c7ad95",
            backgroundColor: 'white',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <ul style={{display: "flex", flexDirection: "row", gap: "50px", }}>
                <a>Shop</a>
                <a>Subscription</a>
                <a>About</a>
                <div></div>
            </ul>
            <img src={logo} alt="logo" style={{width: "100%", height: "100%"}}/>
            <ul style={{display: "flex", flexDirection: "row", gap: "50px", marginRight: "50px"}}>
                <a>Sign In</a>
                <a><ShoppingBasket style={{width: "30px", height: "30px"}}/></a>
                <a><Search style={{width: "30px", height: "30px"}}/></a>
                <a><AccountBox style={{width: "30px", height: "30px"}}/></a>
            </ul>
        </div>
    );
}
