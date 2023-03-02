import { NavLink, Route, Routes } from "react-router-dom";
import { NotFound } from "../components/Content";

/**
 * @typedef {object} NestedNavView
 */

/**
 *
 * @param {string} path Relative path for the view. This will be combined with a `routePrefix` for `Link`'s
 * @param {any} element The item to be displated, e.g. `<NotFound />`
 * @param {string} [title] Optional title used for left nav. If `nil` then the route is registered but no link is displayed. Useful for nested/hidden routes.
 * @returns {NestedNavView}
 */
export const toView = (path, element, title) => ({ path, element, title });

/**
 *
 * @param {object} props
 * @param {string} props.routePrefix
 * @param {NestedNavView[]} props.views
 * @returns
 */
const LeftNavLayout = ({ routePrefix, views }) => {
  return (
    <div className="row">
      <div className="col-3">
        <nav className="nav nav-pills flex-column">
          {views
            .filter((v) => !!v.title)
            .map(({ path, title }) => (
              <NavLink
                className="nav-link"
                to={`${routePrefix}${path}`}
                key={path}
              >
                {title}
              </NavLink>
            ))}
        </nav>
        <div className="bar"></div>
      </div>
      <div className="col-9 ps-3 border-start" style={{ minHeight: "50vh" }}>
        <Routes>
          <Route path="/" element="" />
          {views.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default LeftNavLayout;
