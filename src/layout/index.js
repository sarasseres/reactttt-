import react from "react";
import "./style.css";
import Header from "../components/header/"
import SideBar from "../components/sidebar"
import Main from "../components/main"



function Layout() {
    return (
      <div className="header">
          <Header />
          <SideBar/>
          <Main />
       
      </div>
    );
  }

  
  export default Layout;