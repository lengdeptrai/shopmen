import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publishRouters } from "~/routes";
import { DefaultLayout } from "~/components/Layout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRouters.map((route, index) =>{
            const Layout = route.layout === null ? Fragment : DefaultLayout
            const Page = route.componet
            return (
              <Route 
                key={index} 
                path={route.path} 
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
