import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';

const Courses = () => {
  return (
    <div>
      <h1>
        I am the courses page!
      </h1>
    </div>
  )
}

const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/auth' element={<Authentication />} />
    </Route>
  </Routes>
  );
}

export default App;
