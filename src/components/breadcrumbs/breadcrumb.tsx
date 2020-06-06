import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

export type Param = {
  name: string;
  value: string;
};

export type Fragment = {
  path: string;
  name: string;
  params?: Param[];
};

type PropTypes = {
  fragments: Fragment[];
  root?: boolean;
};

export const BreadCrumb: React.FC<PropTypes> = (props: PropTypes) => {
  const routeParams = useParams();
  return (
    <>
      {!props.root && (
        <span>
          <Link to="/">Home</Link> {' > '}
        </span>
      )}
      {props.fragments.map((fragment: Fragment, index: number) => {
        const { path, name } = fragment;
        let to = path;
        let displayName = name;
        if (routeParams && fragment.params) {
          fragment.params.map((param: Param) => {
            to = to.replace(`:${param.name}`, routeParams[param.name]);
            displayName = routeParams[param.name];
            return routeParams[param.name];
          });
        }
        return (
          <span key={to}>
            <Link to={to} state={{ name: displayName }}>
              {displayName}
            </Link>
            {index !== props.fragments.length - 1 && ' > '}
          </span>
        );
      })}
    </>
  );
};

BreadCrumb.defaultProps = {
  root: false,
};
