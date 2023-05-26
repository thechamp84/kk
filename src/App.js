import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { navLinks } from './Constants/NavLinks';
import BasicLayout from "./Layouts/BasicLayout/BasicLayout";
import { useState } from "react";



function App() {

  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  }

  return (
    <div className="App">
      <BasicLayout className="theLayout"  handleLinkClick={handleLinkClick} activeLink= {activeLink}>
        <Routes>
          {navLinks?.map((item) => {
            return (
              <Route
                path={item?.path}
                exact={item?.exact}
                element={item?.element}
              />
            );
          })}
        </Routes>
      </BasicLayout>
    </div>
  );
}

export default App;
