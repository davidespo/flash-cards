import Header from "./layout/Header";

import AppRoutes from "./layout/AppRoutes";

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="pt-4 px-3">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
