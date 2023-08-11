import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { navLinks } from './Constants/NavLinks';
import BasicLayout from "./Layouts/BasicLayout/BasicLayout";
import { createContext, useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/About-Us/Aboutus";
import Products from "./Pages/Products/Products";
import ContactUs from "./Pages/Contact-Us/ContactUs";
import Prodetail from "./Pages/ProDetail/Prodetail";


export const LinkContext = createContext();



function App() {
  // const storedActiveLink = localStorage.getItem('activeLink');
  // const [activeLink, setActiveLink] = useState(storedActiveLink ? parseInt(storedActiveLink) :1);
  const [activeLink, setActiveLink] = useState(1);


  // useEffect(() => {
  //   localStorage.setItem('activeLink', activeLink.toString());
  //   console.log("activeLink is", activeLink);


  //   // this is the cleanup function that is not working right now but will look for solution
  //   // return() => {
  //   //   localStorage.setItem('activeLink', 1);
  //   // };
  // }, [activeLink]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  }

  return (
    <div className="App">
    <LinkContext.Provider value={{activeLink, handleLinkClick}}>
      <BasicLayout className="theLayout" >
        <Routes>

        <Route path="/" exact element={<Home />} />
          <Route path="/aboutUs" exact element={<Aboutus/>} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/contactUs' exact element={<ContactUs/>} />
          <Route path='/productDetail' exact element={<Prodetail/>} />

          {/* {navLinks?.map((item) => {
            return (
              <Route
                path={item?.path}
                exact={item?.exact}
                element={item?.element}
              />
            );
          })} */}
        </Routes>
      </BasicLayout>
      </LinkContext.Provider>
    </div>
  );
}

export default App;
