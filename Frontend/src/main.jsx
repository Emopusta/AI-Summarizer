import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store, persistor} from './services/store.js'
import App from "./App.jsx";
import { PersistGate } from 'redux-persist/integration/react'

//Pages
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<PrivateRoute/>}>

    <Route path="/profile" element={<Profile/>}></Route>
    </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
  </React.StrictMode>
);

