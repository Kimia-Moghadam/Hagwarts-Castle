import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import Loading from './Components/Loading';
import Dashboard from './Components/Dashboard';
import Chart from './Components/Chart';
import StoryAboutMap from './Components/Story';
import CreditPage from './Components/CreditPage';
import NotFound from './Components/NotFound';
import PrivateRoute from './Components/PrivateRoute'; // اطمینان حاصل کن که این فایل رو اضافه کرده‌ای
import LoginTimeout from './Components/LoginTimeOut';
import './app.css'
import Comments from './Components/Comments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} /> {/* گارد برای داشبورد */}
        <Route path="/chart/:chartName" element={<PrivateRoute component={Chart} />} />
        <Route path="/dashboard/Story" element={<PrivateRoute component={StoryAboutMap} />} />
        <Route path="/dashboard/Credit" element={<CreditPage />} />
        <Route path="/LoginTimeout" element={<LoginTimeout />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


export default App;
