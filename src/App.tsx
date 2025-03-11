import { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import DefaultLayout from './layout/DefaultLayout';

import Login from './pages/Authentication/login';
import Register from './pages/Authentication/register';
import Landing from './pages/landingPage/Landing';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
   <HashRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
          {/* <Route path="/" element={<Login />}/> */}
          <Route path="/" element={<Landing/>}/>
          <Route path="/auth/signin" element={<Login/>}/>
          <Route path="/auth/signup" element={<Register/>}/>
          {/* <Route path="/auth/signup" element={<SignUp />}/>          
          <Route path="/auth/signin" element={<SignIn />}/> */}
          <Route path="*" element={<DefaultLayout />}/>
          {/* <Route index element={<ECommerce />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="chart" element={<Chart />} />
          <Route path="form/elements" element={<FormElements />} />
          <Route path="form/layout" element={<FormLayout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tables" element={<Tables />} />
          <Route path="ui/alerts" element={<Alerts />} />
          <Route path="ui/buttons" element={<Buttons />} />    */}
      </Routes>
    </Suspense>
   </HashRouter>
  );
}

export default App;
