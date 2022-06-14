import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Comment from './components/Comment'
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
        <Route path="/comment/:id" element={<Comment />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
