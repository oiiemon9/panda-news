import { createBrowserRouter } from 'react-router';
import Home from '../components/Home/Home';
import Root from '../Layout/Root';
import NewsPost from '../components/Home/News/NewsPost';
import NavigateAllNews from '../components/Home/NavigateAllNews/NavigateAllNews';

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
    ],
  },
]);
