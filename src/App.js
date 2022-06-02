import './App.css';
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
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/comment:Id" element={<Comment />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
