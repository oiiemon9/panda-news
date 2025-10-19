import { createBrowserRouter } from 'react-router';
import Home from '../components/Home/Home';
import Root from '../Layout/Root';
import NewsPost from '../components/Home/News/NewsPost';
import NavigateAllNews from '../components/Home/NavigateAllNews/NavigateAllNews';
import NewsInfoPage from '../components/NewsInfoPage/NewsInfoPage';
import Login from '../components/Authentication/Login';
import Registration from '../components/Authentication/Registration';
import PrivetRoute from '../PrivetRoute/PrivetRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        element: (
          <NavigateAllNews>
            <Home></Home>
          </NavigateAllNews>
        ),
        children: [
          {
            path: '/category/:id',
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
            Component: NewsPost,
          },
        ],
      },
      {
        path: '/news/:newsId',
        errorElement: <p>error khaisos </p>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/${params?.newsId}`
          ),
        element: (
          <PrivetRoute>
            <NewsInfoPage></NewsInfoPage>
          </PrivetRoute>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/registration',
        Component: Registration,
      },
      {
        path: '*',
        element: <p>error 404</p>,
      },
    ],
  },
]);
