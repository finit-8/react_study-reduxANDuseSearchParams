import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import IntroContainer from "../pages/intro/IntroContainer";
import HobbyContainer from "../pages/hobby/HobbyContainer";
import PostListContainer from "../pages/post/list/PostListContainer";
import PostReadContainer from "../pages/post/read/PostReadContainer";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import PostContainer from "../pages/post/PostContainer";
import PostContextList from "../pages/post/list/PostContextList";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",     
        element : <MainContainer />
      },
      {
        path : "/intro",
        element : <IntroContainer />
      },
      {
        path : "/posts",
        element : <PostListContainer />
      },
      {
        path : "/posts/read/:id",
        element : <PostReadContainer />
      },
      {
        path: "/community",
        element: <PostContainer />,
        children: [
          {
            // index : true
            path: "/community",
            element : <PostContextList />
          }
        ]
      }
    ]
  },
  {
    path : "/hobby",
    element : <HobbyContainer />,
    children : [
      {
        path : "/hobby/:hobbies",
        element : <HobbyContainer />,
        children : [ // 중첩 라우팅
          {
            path : "/hobby/:hobbies/:name",
            element : <HobbyContainer />,
          }
        ]
      }
    ]
  },
  {
    path : "/sign-up",
    element: <SignUp />
  },
  {
    path : "*",
    element : <NotFound />
  },
])

export default router;