import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";
import DetectPage from "./pages/DetectPage";
import ConsolPage from "./pages/ConsolPage";
import GamePage from "./pages/GamePage";
import SchoolVideo from "./pages/SchoolVideo";
import SchoolQuiz from "./pages/SchoolQuiz";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/schoolpage":
        title = "";
        metaDescription = "";
        break;
      case "/detectpage":
        title = "";
        metaDescription = "";
        break;
      case "/consolpage":
        title = "";
        metaDescription = "";
        break;
      case "/gamepage":
        title = "";
        metaDescription = "";
        break;
      case "/schoolvideo":
        title = "";
        metaDescription = "";
        break;
      case "/schoolquiz":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/schoolpage" element={<SchoolPage />} />
      <Route path="/detectpage" element={<DetectPage />} />
      <Route path="/consolpage" element={<ConsolPage />} />
      <Route path="/gamepage" element={<GamePage />} />
      {/* <Route path="/schoolvideo" element={<SchoolVideo />} /> */}
      <Route path="/schoolvideo/:topic" element={<SchoolVideo />} />
      <Route path="/schoolquiz/:topic" element={<SchoolQuiz />} />
      {/* <Route path="/schoolquiz" element={<SchoolQuiz />} /> */}
    </Routes>
  );
}
export default App;
