import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import cn from 'classnames';
import styles from './styles.scss';

interface IInfoPanel {
	food: {
		active: number;
		maxField: number;
	};
	water: {
		active: number;
		maxField: number;
	};
	coordinates: string;
}

const InfoPanel = ({
	food,
	water,
	coordinates,
}: IInfoPanel) => (
	<div className={styles.info}>
		<div className={styles.item}>
			<div className={styles.item__icon}>
				<SVG src={ICONS.FOOD2} />
			</div>

			<ul className={styles.item__list}>
				{
					Array.from(Array(food.active).keys()).map(() => (
						<li className={cn(styles.food__active)} key={Math.random()} />
					))
				}

				{
					Array.from(Array(food.maxField - food.active).keys()).map(() => (
						<li className={styles.item__disabled} key={Math.random()} />
					))
				}
			</ul>
		</div>

		<div className={styles.item}>
			<div className={styles.item__icon}>
				<SVG src={ICONS.WATER} />
			</div>

			<ul className={styles.item__list}>
				{
					Array.from(Array(water.active).keys()).map(() => (
						<li className={styles.water__active} key={Math.random()} />
					))
				}

				{
					Array.from(Array(water.maxField - water.active).keys()).map(() => (
						<li className={styles.item__disabled} key={Math.random()} />
					))
				}
			</ul>
		</div>

		<div className={styles.coordinates}>
			<SVG src={ICONS.MAP2} />

			<p>{coordinates}</p>
		</div>
	</div>
);

export default InfoPanel;
