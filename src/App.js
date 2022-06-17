import Navbar from './components/Navbar';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost'
import CreatePost from './components/CreatePost';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
