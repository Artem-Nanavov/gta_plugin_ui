import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import styles from './styles.scss';

interface IPanelWithHints {
	items: Array<{
		icon: 'MAP' | 'PHONE' | 'SETTINGS' | 'CART' | 'I',
		value: string;
	}>;
}

const PanelWithHints = ({
	items,
}: IPanelWithHints) => (
	<ul className={styles.panel}>
		{
			items.map((item) => (
				<li className={styles.panel__item} key={Math.random()}>
					<div>
						<p>{item.value}</p>
					</div>

					<div>
						<SVG src={ICONS[item.icon]} />
					</div>
				</li>
			))
		}
	</ul>
);

export default PanelWithHints;
