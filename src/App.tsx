import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ErrorBoundary } from "react-error-boundary";

import { Landing } from "./pages/Landing";
import { TrackingHome } from "./pages/TrackingHome";
import { DetailedView } from "./pages/DetailedView";
import { TrackingMap } from "./pages/TrackingMap";
import { TrackingSearch } from "./pages/TrackingSearch";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { ErrorMessage } from "./shared/ErrorMessage";

export const App: React.FC = () => {
  return (
    <div className="container">
      <RecoilRoot>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <Suspense fallback={<div>loading...</div>}>
              <Header />
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/home" exact component={TrackingHome} />
                <Route path="/detailedView" exact component={DetailedView} />

                <Route path="/trackingMap" exact component={TrackingMap} />
                <Route
                  path="/trackingSearch"
                  exact
                  component={TrackingSearch}
                />
              </Switch>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};
