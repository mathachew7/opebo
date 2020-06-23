import React, { Fragment, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../core/components/ScrollToTop";

import Spinner from "../core/components/Spinner";
import Error from "../pages/ErrorPage";

// Pages Routes-----------------------------------
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Cart from "../pages/Cart";
// import CheckoutAddress from "../pages/CheckoutAddress";

// import Services from "../pages/Services";
// import SubService from "../pages/SubService";
// import SubServiceDetails from "../pages/SubServiceDetails";
// import User from "../pages/User";
// import Disclaimer from "../pages/Disclaimer";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import TermsAndConditions from "../pages/TermsAndConditions";
// import CookiesPolicy from "../pages/CookiesPolicy";
// import ReturnRefundPolicy from "../pages/ReturnRefundPolicy";
// import EndUserLicense from "../pages/EndUserLicense";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Services = React.lazy(() => import("../pages/Services"));
const SubService = React.lazy(() => import("../pages/SubService"));
const SubServiceDetails = React.lazy(() =>
  import("../pages/SubServiceDetails")
);
const SubServiceLocation = React.lazy(() =>
  import("../pages/SubServiceLocation")
);

const User = React.lazy(() => import("../pages/User"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Cart = React.lazy(() => import("../pages/Cart"));
const CheckoutAddress = React.lazy(() => import("../pages/CheckoutAddress"));
const Disclaimer = React.lazy(() => import("../pages/Disclaimer"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() =>
  import("../pages/TermsAndConditions")
);
const CookiesPolicy = React.lazy(() => import("../pages/CookiesPolicy"));
const ReturnRefundPolicy = React.lazy(() =>
  import("../pages/ReturnRefundPolicy")
);
const EndUserLicense = React.lazy(() => import("../pages/EndUserLicense"));

// User Routes--------------------------------------
// import Signup from "../user/Signup";
// import Signin from "../user/Signin";
// import UserDashboard from "../user/UserDashboard";
// import ProfileUpdate from "../user/ProfileUpdate";
// import SigninPhone from "../user/SigninPhone";
// import OtpPhone from "../user/optPage";
// import Verify from "../user/verify";

// import PrivateRoute from "../auth/PrivateRoute";

const Signup = React.lazy(() => import("../user/Signup"));
const Signin = React.lazy(() => import("../user/Signin"));
const UserDashboard = React.lazy(() => import("../user/UserDashboard"));
const UserBookings = React.lazy(() => import("../user/UserBookings"));
const UserAddresses = React.lazy(() => import("../user/UserAddresses"));
const ProfileUpdate = React.lazy(() => import("../user/ProfileUpdate"));
const SigninPhone = React.lazy(() => import("../user/SigninPhone"));
const OtpPhone = React.lazy(() => import("../user/optPage"));
const Verify = React.lazy(() => import("../user/verify"));

const PrivateRoute = React.lazy(() => import("../auth/PrivateRoute"));

// import ProcessPayment from "../core/components/Cart/Payment";
const ProcessPayment = React.lazy(() =>
  import("../core/components/Cart/Payment")
);

// Admin Routes------------------------------------
// import AdminSignup from "../admin/AdminSignup";
// import AdminSignin from "../admin/AdminSignin";
// import AdminRoute from "../admin/adminAuth/AdminRoute";
// import AdminDashboard from "../admin/AdminDashboard";
// import AddCategory from "../admin/AddCategory";
// import AddService from "../admin/AddService";
// import AddSubService from "../admin/AddSubService";
// import ManageCategories from "../admin/ManageCategories";
// import UpdateCategory from "../admin/UpdateCategory";
// import ManageServices from "../admin/ManageServices";
// import UpdateService from "../admin/UpdateService";
// import ManageSubServices from "../admin/ManageSubServices";
// import UpdateSubService from "../admin/UpdateSubService";

const AdminSignup = React.lazy(() => import("../admin/AdminSignup"));
const AdminSignin = React.lazy(() => import("../admin/AdminSignin"));
const AdminRoute = React.lazy(() => import("../admin/adminAuth/AdminRoute"));
const AdminDashboard = React.lazy(() => import("../admin/AdminDashboard"));
const AddCategory = React.lazy(() => import("../admin/AddCategory"));
const AddService = React.lazy(() => import("../admin/AddService"));
const AddSubService = React.lazy(() => import("../admin/AddSubService"));
const ManageCategories = React.lazy(() => import("../admin/ManageCategories"));
const UpdateCategory = React.lazy(() => import("../admin/UpdateCategory"));
const ManageServices = React.lazy(() => import("../admin/ManageServices"));
const UpdateService = React.lazy(() => import("../admin/UpdateService"));
const ManageSubServices = React.lazy(() =>
  import("../admin/ManageSubServices")
);
const UpdateSubService = React.lazy(() => import("../admin/UpdateSubService"));
const ViewOrders = React.lazy(() => import("../admin/ViewOrders"));

// Other components----------------------------------
// const Error = React.lazy(() => import("../pages/ErrorPage"));

function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTop />
        <Switch>
          {/* Pages Routes */}
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about/' component={About} />

            <Route exact path='/services/:categoryId'>
              <Services />
            </Route>
            <Route exact path='/sub-services/:serviceId'>
              <SubService />
            </Route>
            <Route
              exact
              path='/sub-services/details/:subServiceId'
              component={SubServiceDetails}
            />
            <Route
              exact
              path='/sub-service/:serviceId/:location'
              component={SubServiceLocation}
            />
            <Route exact path='/user/' component={User} />

            <Route exact path='/cart' component={Cart} />
            <Route exact path='/contact/' component={Contact} />
            <Route exact path='/checkout-address' component={CheckoutAddress} />
            <Route exact path='/privacypolicy/' component={PrivacyPolicy} />
            <Route
              exact
              path='/termsandconditions/'
              component={TermsAndConditions}
            />
            <Route exact path='/cookiespolicy/' component={CookiesPolicy} />
            <Route
              exact
              path='/returnrefundpolicy/'
              component={ReturnRefundPolicy}
            />
            <Route exact path='/enduserlicense/' component={EndUserLicense} />
            <Route exact path='/disclaimer/' component={Disclaimer} />

            {/* User Routes */}
            <Route exact path='/signup/' component={Signup} />
            <Route exact path='/signin-email/' component={Signin} />

            <Route exact path='/userVerify/' component={Verify} />
            <Route exact path='/payment/' component={ProcessPayment} />

            <Route exact path='/signin/' component={SigninPhone} />
            <Route exact path='/verifyOtp/' component={OtpPhone} />

            <PrivateRoute
              path='/user/dashboard/:userId'
              exact
              component={UserDashboard}
            />
            <PrivateRoute
              path='/user/bookings/:userId'
              exact
              component={UserBookings}
            />
            <PrivateRoute
              path='/user/locations/:userId'
              exact
              component={UserAddresses}
            />
            <PrivateRoute
              path='/profileupdate/:userId'
              exact
              component={ProfileUpdate}
            />

            {/* Admin Routes */}
            <Route exact path='/admin/signup' component={AdminSignup} />
            <Route exact path='/admin/signin' component={AdminSignin} />
            <AdminRoute
              path='/admin/dashboard'
              exact
              component={AdminDashboard}
            />
            <AdminRoute path='/create/category' exact component={AddCategory} />
            <AdminRoute path='/create/service' exact component={AddService} />
            <AdminRoute
              path='/create/sub-service'
              exact
              component={AddSubService}
            />
            <AdminRoute
              path='/admin/categories'
              exact
              component={ManageCategories}
            />
            <AdminRoute
              path='/admin/category/update/:categoryId'
              exact
              component={UpdateCategory}
            />
            <AdminRoute
              path='/admin/services'
              exact
              component={ManageServices}
            />
            <AdminRoute
              path='/admin/service/update/:serviceId'
              exact
              component={UpdateService}
            />

            <AdminRoute
              path='/admin/subServices'
              exact
              component={ManageSubServices}
            />
            <AdminRoute
              path='/admin/subService/update/:subServiceId'
              exact
              component={UpdateSubService}
            />
            <AdminRoute path='/admin/viewOrders' exact component={ViewOrders} />

            {/* Other component */}
          </Suspense>
          <Route component={Error} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default Routes;
