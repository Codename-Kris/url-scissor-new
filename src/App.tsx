import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import UpdatedDesign from './pages/UpdatedDesign';
import GetAQuote from './pages/GetAQuote';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = 'Home';
        metaDescription = 'Welcome to our website';
        break;
      case '/get-a-quote':
        title = 'Get a Quote';
        metaDescription = 'Get a quote for our services';
        break;
      case '/login':
        title = 'Login';
        metaDescription = 'Login to access your account';
        break;
      case '/sign-up':
        title = 'Sign Up';
        metaDescription = 'Create a new account';
        break;
      default:
        title = '404 Not Found';
        metaDescription = 'Page not found';
        break;
    }

    document.title = title;

    const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UpdatedDesign />} />
      <Route path="/get-a-quote" element={<GetAQuote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;



// import {
//   Routes,
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";
// import UpdatedDesign from "./pages/UpdatedDesign";
// import GetAQuote from "./pages/GetAQuote";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import React, { useEffect } from 'react';


// function App() {
//   const action = useNavigationType();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "";
//         metaDescription = "";
//         break;
//       case "/get-a-quote":
//         title = "";
//         metaDescription = "";
//         break;
//       case "/login":
//         title = "";
//         metaDescription = "";
//         break;
//       case "/sign-up":
//         title = "";
//         metaDescription = "";
//         break;
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
//         'head > meta[name="description"]'
//       );
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <Routes>
//       <Route path="/" element={<UpdatedDesign />} />
//       <Route path="/get-a-quote" element={<GetAQuote />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/sign-up" element={<SignUp />} />
//     </Routes>
//   );
// }
// export default App;
