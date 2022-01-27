/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/admin/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/admin/mocks",
    icon: "TablesIcon",
    name: "Mocks Management",
  },
  {
    path: "/admin/forms",
    icon: "FormsIcon",
    name: "Forms",
  },
  {
    path: "/admin/cards",
    icon: "CardsIcon",
    name: "Cards",
  },
  {
    path: "/admin/charts",
    icon: "ChartsIcon",
    name: "Charts",
  },
  {
    path: "/admin/buttons",
    icon: "ButtonsIcon",
    name: "Buttons",
  },
  {
    path: "/admin/modals",
    icon: "ModalsIcon",
    name: "Modals",
  },
  {
    path: "/admin/tables",
    icon: "TablesIcon",
    name: "Tables",
  },

  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
