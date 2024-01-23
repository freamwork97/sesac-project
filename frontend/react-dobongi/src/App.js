import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";
import Nav from "./components/NavBar.js";
import ChatRoom from "./components/ChatRoom.js";
function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <ChatRoom></ChatRoom>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
