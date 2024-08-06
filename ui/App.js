import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import { BrowserRouter, Link } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <div className="min-h-screen w-screen bg-orange-100">
      <div className="content p-20">
        <div className="flex flex-col items-center justify-center border-b border-amber-600 pb-4">
          <Link to="/">
            <h1 className="font-mono text-6xl font-semibold text-amber-600">
              EVENTTO
            </h1>
          </Link>
          <p className="font-mono text-xl text-slate-400">
            Explore our different community events
          </p>
        </div>
        <div className="my-5">
          <AppRoutes />
        </div>
      </div>
    </div>
  </BrowserRouter>
);
