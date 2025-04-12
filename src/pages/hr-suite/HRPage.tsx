import React, { Suspense } from 'react';

// Dynamically import the HR Suite component using the correct remote name
const App = React.lazy(() => import('hr-suite/App'));

const HRPage: React.FC = () => {
  return (
    <div>
      <h1>HR Suite</h1>
      <Suspense fallback={<div>Loading HR Suite...</div>}>
        <App />
      </Suspense>
    </div>
  );
};

export default HRPage; 