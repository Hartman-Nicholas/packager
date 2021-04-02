import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./Landing";
import { TrackingHome } from "./TrackingHome";
import { DetailedView } from "./DetailedView";
import { TrackingMap } from "./TrackingMap";
import { TrackingSearch } from "./TrackingSearch";
import { ContactUs } from "./ContactUs";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";

export const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={TrackingHome} />
          <Route path="/detailedView" exact component={DetailedView} />
          <Route path="/trackingMap" exact component={TrackingMap} />
          <Route path="/trackingSearch" exact component={TrackingSearch} />
          <Route path="/contactus" exact component={ContactUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
