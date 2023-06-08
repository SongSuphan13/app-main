import Link from "next/link";

export default function AppHeader() {
  return (
    <>
      <header className="app-header">
        <Link href="/" className="app-header__logo">
          {process.env.APP_NAME}
        </Link>
        <a
          className="app-sidebar__toggle"
          href="#"
          data-toggle="sidebar"
          aria-label="Hide Sidebar"
        ></a>
        <ul className="app-nav">
          <li className="dropdown">
            <a
              className="app-nav__item"
              href="#"
              data-toggle="dropdown"
              aria-label="Open Profile Menu"
              style={{ textDecoration: "none" }}
            >
              <span className="app-nav-profile">
                Mr.Sathaphon Phiothongngam&nbsp;&nbsp;
              </span>
              <i className="fa fa-user fa-lg"></i>
            </a>
            <ul className="dropdown-menu settings-menu dropdown-menu-right">
              <li>
                <Link href="profile" className="dropdown-item">
                  <i className="fa fa-user fa-lg"></i> Profile
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="page-login.html">
                  <i className="fa fa-sign-out fa-lg"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul> 
      </header>
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
    </>
  );
}
