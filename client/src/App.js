import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Redirect,
  Routes,
  Navigate
} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'

function App() {
  // return "Hi"
  return (
  <Router>
    <Routes>
      <Route path="/" exact element={<Navigate to={`/documents/${uuidV4()}` } />} />
        {/* <Navigate to={`/documents/${uuidV4()}` } /> */}
      {/* </Route> */}
      <Route path="/documents/:id" exact element={<TextEditor />} />
        {/* <TextEditor />
      </Route> */}
    </Routes>
  </Router>)
}

export default App;
