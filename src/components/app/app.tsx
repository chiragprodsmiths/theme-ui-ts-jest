import React from 'react';
import { style } from 'typestyle';

const className = style({ color: 'blue', background: 'red', height: '500px', textAlign: 'center', fontSize: 50 });

export type Props = {};

export const App: React.FC<Props> = ({}) => {
	return <div className={className}>Hello world</div>;
};
