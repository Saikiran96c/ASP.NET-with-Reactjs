import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Contact from "./components/Contact";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
    },
    {
        path: '/contact',
        element: <Contact />
    },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
