import React from 'react';

import { Suspense } from "react";
import {  Route, Routes, useNavigate } from "react-router-dom";
import routes from '../routes';


function Appcontent() {
  const navigate = useNavigate();



  return (
    <div>
      <Suspense>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route?.element && (
                <Route
                  key={idx}
                  path={route.path}
                //   exact={route.exact}
                //   name={route.name}
                  element={<route.element/>}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default Appcontent;
