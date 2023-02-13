import { Suspense } from 'react';
import routes from '~react-pages';

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main>{useRoutes(routes)}</main>
    </Suspense>
  );
}

export default App;
