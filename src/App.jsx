import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

/* const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
); */

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <ProductsPage /> },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
