import { Route } from 'react-router-dom';

function DefaultLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
            HEADER
            <Component {...other} {...routeProps} />
            FOOTER
          </>
        )
      }}
    />
  );
}

export default DefaultLayout;
