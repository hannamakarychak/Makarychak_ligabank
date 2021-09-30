import classNames from 'classnames';

import './heading.scss';

const Heading = ({ secondary, children, inverted, className }) => {
  return secondary ? (
    <h2 className={classNames('heading--secondary', { 'heading--inverted': inverted }, className)}>
      {children}
    </h2>
  ) : (
    <h1 className={classNames('heading', { 'heading--inverted': inverted }, className)}>
      {children}
    </h1>
  );
};
export default Heading;
