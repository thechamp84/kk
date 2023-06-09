import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { navLinks } from './Constants/NavLinks';
import BasicLayout from "./Layouts/BasicLayout/BasicLayout";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Aboutus from "./Pages/About-Us/Aboutus";
import Products from "./Pages/Products/Products";
import ContactUs from "./Pages/Contact-Us/ContactUs";
import Prodetail from "./Pages/ProDetail/Prodetail";



function App() {
  const storedActiveLink = localStorage.getItem('activeLink');
  const [activeLink, setActiveLink] = useState(storedActiveLink ? parseInt(storedActiveLink) :1);

  useEffect(() => {
    localStorage.setItem('activeLink', activeLink.toString());
  }, [activeLink]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  }

  return (
    <div className="App">
      <BasicLayout className="theLayout"  handleLinkClick={handleLinkClick} activeLink= {activeLink}>
        <Routes>

        <Route path="/kk" exact element={<Home handleLinkClick={handleLinkClick}/>} />
          <Route path="/aboutUs" exact element={<Aboutus/>} />
          <Route path='/products' exact element={<Products handleLinkClick={handleLinkClick}/>} />
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
    </div>
  );
}

export default App;
