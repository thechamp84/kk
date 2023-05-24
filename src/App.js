import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { navLinks } from './Constants/NavLinks';
import BasicLayout from "./Layouts/BasicLayout/BasicLayout";



function App() {

  return (
    <div className="App">
      <BasicLayout className="theLayout">
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
