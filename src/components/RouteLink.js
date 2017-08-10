import React, { PropTypes} from 'react';
import { Link,
         Route } from 'react-router-dom';

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
export const RouteLink = ({
  to,
  exact,
  strict,
  location,
  activeClassName,
  className,
  activeStyle,
  style,
  isActive: getIsActive,
  ariaCurrent,
  ...rest
}) => (
  <Route
    path={typeof to === 'object' ? to.pathname : to}
    exact={exact}
    strict={strict}
    location={location}
    children={({ location, match }) => {
      const isActive = !!(getIsActive ? getIsActive(match, location) : match)
        return (
          <li style={isActive ? { ...style, ...activeStyle } : style} className={isActive ? [ className, activeClassName ].filter(i => i).join(' ') : className}>
            <Link
              to={to}

              aria-current={isActive && ariaCurrent}
              {...rest}
                    />
         </li>
      )
    }}

  />
)

RouteLink.propTypes = {
  to: Link.propTypes.to,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  location: PropTypes.object,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  isActive: PropTypes.func,
  ariaCurrent: PropTypes.oneOf(['page', 'step', 'location', 'true'])
}

RouteLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
}
