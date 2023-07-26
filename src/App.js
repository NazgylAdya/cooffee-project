import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Page/Main";
import CoffePage from "./Page/CoffePage";
import GoodsPage from "./Page/GoodsPage";
import CoffeeItemPage from "./Page/CoffeeItemPage";
import CoffeePageCatalogItem from "./components/CoffeePageCatalogItem";
import OneCoffeePage from "./components/OneCoffeePage";
import "./App.css";
import Wrapper from "./Page/Wrapper";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper></Wrapper>,
      children: [
        {
          index: true,
          element: <Main></Main>,
        },

        {
          path: "/goodsPage",
          element: <GoodsPage></GoodsPage>,
        },
        {
          path: "/coffeePage",
          element: <CoffePage></CoffePage>,
        },
        {
          path: "/coffePage/:id",
          element: <OneCoffeePage></OneCoffeePage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
