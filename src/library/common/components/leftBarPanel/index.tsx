import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import styles from './styles.scss';
import Label from '../label';

interface ILeftBarPanel {
	items: Array<{
		icon: 'GUN' | 'MED_KIT' | 'MED_KIT_CAPSULES' | 'FOOD',
		count: number | string;
	}>;
}

const stylesForLabel: React.CSSProperties = {
	position: 'absolute',
	left: -4,
	bottom: -4,
};

const LeftBarPanel = ({
	items,
}: ILeftBarPanel) => (
	<aside className={styles.panel}>
		{
			items.map((item, i) => (
				<div className={styles.panel__item}>
					<p>
						{item.count}
						{' '}
						шт.
					</p>

					<SVG src={ICONS[item.icon]} />

					<Label style={stylesForLabel} value={i} />
				</div>
			))
		}
	</aside>
);

export default LeftBarPanel;
