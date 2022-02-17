import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import Registration from "./components/Registration";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <BrowserRouter>
      {/* <WarningSign text="Watch out again!" /> */}
      {/* <MyBadge text="NEW!!" color="info" /> */}
      {/* <SingleBook book={fantasyBooks[0]} /> */}
      <MyNavBar />

      <Routes>
        <Route path="/" element={<BookList books={fantasyBooks} />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
