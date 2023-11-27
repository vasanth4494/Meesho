import "./App.css";
import Boxproducts from "./Products/Boxproducts";
import Products from "./Products/Products";
import TopCategory from "./Products/Topcatagory"

function MainApp() {
  const styles = {
    nav1: {
        width: "100%",
        height: "50px",
        borderBottom: "1px solid blueviolet",
        paddingLeft:'70px',
        paddingTop:'10px',
        paddingBottom:'10px'
      },
  };
  return (
    <div>
      <div className="nav-2">
        <nav style={styles.nav1}>
          <ul>
            <li className="nav2" >Women Ethnic</li>
            <li className="nav2" >Women Western</li>
            <li className="nav2" >Men</li>
            <li className="nav2" >kids</li>
            <li className="nav2" >Home & Kitchen</li>
            <li className="nav2" >Beauty & Health</li>
            <li className="nav2" >Jewellery & Accessories</li>
            <li className="nav2" >Bags & Fottwear</li>
            <li className="nav2" >Electronics</li>
          </ul>
        </nav>
      </div>

      <div className="common">
        <Boxproducts />

        <TopCategory />
        

      </div>

      <Products />
      
    </div>
  );
}

export default MainApp;
