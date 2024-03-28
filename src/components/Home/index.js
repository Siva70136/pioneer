import Menu from "../Menu"
import Cards from "../Cards"
import Graph from "../Graph"
import MenuSm from "../MenuSm"
import './index.css'

const Home = () => {

    return (
        <div className="home-container">
            <div className="menu"><Menu /></div>
            
            <div className="data-container">
                <div className="menusm">
                    <MenuSm />
                </div>
            
                <div className="top-header">
                    <div>
                        <p className="head">Hello,<span className="sub-head">Brooklyn Simmions</span></p>
                        <p className="head">Welcome,<span className="sub-head2">spot-trading!</span></p>
                    </div>
                    <div className="">
                        <button className="button">start trading</button>
                    </div>
                </div>
                <Graph />
                <Cards />
            </div>
        </div>
    )
}

export default Home;