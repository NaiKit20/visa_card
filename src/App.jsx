import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccountPage from './pages/accountPage/accountPage';
import DetailPage from './pages/detailPage/detailPage';

const routers = createBrowserRouter([
  { path: "/", element: <AccountPage />, },
  { path: "/detail", element: <DetailPage />, }
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App
