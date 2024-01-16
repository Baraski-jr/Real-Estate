import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import NoPage from "./pages/no_page";
import About from "./pages/about";
import Profile from "./pages/profile";
import SignIn from "./pages/sign/sign-in";
import SignUp from "./pages/sign/sign-up";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}

export default App