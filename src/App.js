import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import BlogPost from './components/BlogPost/BlogPost.jsx';
import BlogList from './components/BlogList/BlogList.jsx';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <BlogList />
      
    </div>
  );
}

export default App;
