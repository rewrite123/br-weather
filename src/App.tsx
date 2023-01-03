import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import Radar from './views/Radar/Radar';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="brw-app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  {/*
                    You can use this area in the <Layout /> component for
                    any elements that are to be shared across all routes. E.g. <Header />
                    https://reactrouter.com/docs/en/v6/getting-started/concepts#layout-routes
                  */}
                </Layout>
              }
            >
              {['/', '/:city'].map((path) => (
                <Route index path={path} element={<Home />} key={path} />
              ))}
              <Route path=":city/radar" element={<Radar />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
};
export default App;
