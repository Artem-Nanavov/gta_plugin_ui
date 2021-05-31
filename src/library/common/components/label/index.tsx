import React from 'react';
import styles from './styles.scss';

interface ILabel {
	value: string;
	style?: React.CSSProperties,
}

const Label = ({
	value,
	style = {},
}: ILabel) => (
	<div style={style} className={styles.label}>
		{value}
	</div>
);

export default Label;
