import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import RootLayout from "./pages/Root.jsx";
import Error from "./pages/Error.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";

/* const routerDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
); */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { idex: true, element: <Home /> }, //path: ""
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductsDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
