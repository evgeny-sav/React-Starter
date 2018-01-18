import React from 'react';
import classNames from 'classnames';
import styles from './App.scss';

const cx = classNames.bind(styles);

const App = () => <h1 className={cx(styles.h1)}>Hello World!</h1>;

export default App;
