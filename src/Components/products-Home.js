import "../CSS/products-home.css";
import productsImg from "../images/products (3).png";
import { useState } from "react";
function ProductsHome() {
    
    const [hovered, setHovered] = useState(false);
    const [access, setAccess] = useState(false);
    const [topHanger, setTopHanger] = useState(false);
    const [bottomHanger, setBottomHanger] = useState(false);
    const [jacketSuit, setJacketSuit] = useState(false);
    const [kIDSWEAR, setKIDSWEAR] = useState(false);
    const [bABYWEARHangers, setBABYWEARHangers] = useState(false);

    return(
        <div className="products-home">
            <img src= {productsImg} alt="products-img"/>
            <div className="container">
                <p className={`p-hangers ${hovered ? "hovered" : ""}`}
                    onMouseEnter={() => {
                    setTopHanger(true)
                    }}
                    onMouseLeave={() => {
                    setTopHanger(false)
                    }}>
                    top hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                        setBottomHanger(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        setBottomHanger(false);
                    }}
                >
                    bOTTOM hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                        setJacketSuit(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        setJacketSuit(false);
                    }}
                >JACKET & SUIT hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                        setKIDSWEAR(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        setKIDSWEAR(false);
                    }}
                >KIDSWEAR hangers</p>
                <p className="p-one"
                    onMouseEnter={() => {
                        setHovered(true);
                        setBABYWEARHangers(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        setBABYWEARHangers(false);
                    }}
                >BABYWEAR hangers</p>
                <p className="p-one p-access"
                    onMouseEnter={() => {
                        setHovered(true);
                        setAccess(true);
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        setAccess(false);
                    }}
                >aCCESSORIES</p>
            </div>
            <div className={`top-Hangers ${topHanger ? "topHanger" : ""}`}>
                <p>top hanger</p>
                <p>top hanger</p>
                <p>top hanger</p>
                <p>top hanger</p>
                <p>top hanger</p>
                <p>top hanger</p>
            </div>
            <div className={`bottom-Hangers ${bottomHanger ? "bottomHanger" : ""}`}>
                <p>bottom hanger</p>
                <p>bottom hanger</p>
                <p>bottom hanger</p>
                <p>bottom hanger</p>
                <p>bottom hanger</p>
                <p>bottom hanger</p>
            </div>
            <div className={`JACKET-SUIT ${jacketSuit ? "jacketSuit" : ""}`}>
                <p>JACKET & SUIT</p>
                <p>JACKET & SUIT</p>
                <p>JACKET & SUIT</p>
                <p>JACKET & SUIT</p>
                <p>JACKET & SUIT</p>
                <p>JACKET & SUIT</p>
            </div>
            <div className={`kIDSWEAR-Hangers ${kIDSWEAR ? "kIDSWEAR" : ""}`}>
                <p>KIDSWEAR hangers</p>
                <p>KIDSWEAR hangers</p>
                <p>KIDSWEAR hangers</p>
                <p>KIDSWEAR hangers</p>
                <p>KIDSWEAR hangers</p>
                <p>KIDSWEAR hangers</p>
            </div>
            <div className={`bABYWEAR-Hangers ${bABYWEARHangers ? "bABYWEAR" : ""}`}>
                <p>BABYWEAR hangers</p>
                <p>BABYWEAR hangers</p>
                <p>BABYWEAR hangers</p>
                <p>BABYWEAR hangers</p>
                <p>BABYWEAR hangers</p>
                <p>BABYWEAR hangers</p>
            </div>
            <div className= {`all-Accessories ${access ? "access" : ""}`}>
                <p>butterfly finger</p>
                <p>butterfly palm</p>
                <p>plastic bac hook</p>
                <p>clips</p>
                <p>clips sc</p>
                <p>clip</p>
            </div>
        </div>
    )
}
export default ProductsHome;