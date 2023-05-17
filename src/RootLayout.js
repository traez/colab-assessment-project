import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <main>
      <header>
        <aside id="aside-bio">
          <h1>Trae Zeeofor</h1>
          <NavLink to="/">
            <img src="./images/bio-icon.png" id="bio-icon" alt="" />
          </NavLink>
        </aside>
        <aside id="aside-api">
          <h1>API</h1>
          <NavLink to="api">
            <img src="./images/api-icon.png" id="api-icon" alt="" />
          </NavLink>
        </aside>
      </header>
      <>
        <Outlet />
      </>
      <footer>
        <hr />
        <h5>
          ©2023 Designed by Trae Zeeofor
          <a
            href="https://github.com/traez/colab-assessment-project"
            target="_blank"
          >
            (Co-Lab Assessment Project)
          </a>
        </h5>
      </footer>
    </main>
  );
}

/* 
  const indexActive =
*/
