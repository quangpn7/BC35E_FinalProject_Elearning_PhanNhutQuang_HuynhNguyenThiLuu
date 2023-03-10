import ReactDOM from "react-dom/client";
import "./assets/sass/main.scss";
import {
  // eslint-disable-next-line
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login/Login";

import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import PageNotFound from "./pages/404/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import AdminTemplate from "./templates/AdminTemplate";
import UserManagement from "./pages/UserManagement/UserManagement";
import CourseManagement from "./pages/CourseManagement/CourseManagement";
import { Toaster } from "react-hot-toast";
import ModalHOC from "./hoc/ModalHOC/ModalHOC";
// V-DOM react
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//Config history
export const history: any = createBrowserHistory();
//Config router
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      {/* USER UI */}
      <Toaster />
      <ModalHOC />
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />

          <Route path="search" element={<Search />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          {/* 404 */}
          <Route path="page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to={"/page-not-found"} />} />
        </Route>
        {/* FORM REGISTER-LOGIN UI */}
        <Route path="register" element={<Login formType="register" />} />
        <Route path="login" element={<Login formType="login" />} />
        {/* ADMIN UI */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<UserManagement />} />

          <Route path="course-management" element={<CourseManagement />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
