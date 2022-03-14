import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout';

const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={ <Layout /> }></Route>
    </Routes>
  );
};
export default AppRouter;