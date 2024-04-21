import { Suspense, lazy } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { ROUTER } from './constants/router';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Faq = lazy(() => import('./pages/faq'));
const Favorite = lazy(() => import('./pages/favorite'));
const Articles = lazy(() => import('./pages/articles'));
const ArticleCreate = lazy(() => import('./pages/articles/create'));
const ArticleDetail = lazy(() => import('./pages/articles/detail'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    >
      <Routes>
        <Route path={ROUTER.HOME} element={<Home />} />
        <Route path={ROUTER.ABOUT} element={<About />} />
        <Route path={ROUTER.FAQ} element={<Faq />} />
        <Route path={ROUTER.FAVORITE} element={<Favorite />} />
        <Route path={ROUTER.ARTICLES} element={<Articles />} />
        <Route path={ROUTER.CREATE_ARTICLE} element={<ArticleCreate />} />
        <Route path={ROUTER.ARTICLES + '/:id'} element={<ArticleDetail />} />
        <Route path={ROUTER.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
