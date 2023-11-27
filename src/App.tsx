import React, { Suspense } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components/Header/Header";
import "./App.css";

const queryClient = new QueryClient();

// lazy load our pages to increase performance
const PostListPage = React.lazy(() => import("./pages/PostListPage"));
const PostDetailPage = React.lazy(() => import("./pages/PostDetailPage"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header LinkComponent={Link} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PostListPage />} />
            <Route path="/post/:postId" element={<PostDetailPage />} />
            <Route path="/post/:postId/:slug" element={<PostDetailPage />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
