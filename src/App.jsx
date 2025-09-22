import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body  from "./Body"
import Login from "./Login"
import Test from "./Test"
import { Provider } from "react-redux"
import appStore from "./utils/appStore";


function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
           <Route path ="/" element ={<Body />}>
           <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
             <Route path="/test" element={<Test />} />
           </Route>
          
        </Routes>
      </BrowserRouter>
  </Provider>
    </>
  )
}

export default App
