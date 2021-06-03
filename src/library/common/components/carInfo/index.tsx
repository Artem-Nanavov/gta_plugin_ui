import React from 'react';
import cn from 'classnames';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import styles from './styles.scss';

interface ICarInfo {
  speed: number;
  maxSpeed: number;
  lock: boolean;
  fuel: number | string;
  mileage: string | number;
  turnSignal: 'right' | 'left';
}

const CarInfo = ({
	speed,
	maxSpeed,
	lock,
	fuel,
	mileage,
	turnSignal,
}: ICarInfo) => {
	const filling = React.useMemo(() => {
		const presentOfSpeed = (100 * speed) / maxSpeed;
		const _filling = 0.7 * presentOfSpeed;

		return _filling;
	}, [maxSpeed, speed]);

	return (
		<div className={styles.carInfo}>
			<div className={styles.sp}>
				<div className={styles.carInfo__speedInfo}>
					<div className={styles.speed}>
						<img src={ICONS.SPEED} alt="" />

						<svg viewBox="0 0 36 36" className={cn(styles.speed__active, styles.circularChart)}>
							<path
								className={styles.circleBg}
								d="M18 2.0845
						a 15.9155 15.9155 0 0 1 0 31.831
						a 15.9155 15.9155 0 0 1 0 -31.831"
							/>
							<path
								className={styles.circle}
								strokeDasharray={`${filling}, 100`}
								d="M18 2.0845
						a 15.9155 15.9155 0 0 1 0 31.831
						a 15.9155 15.9155 0 0 1 0 -31.831"
							/>
						</svg>
					</div>

					<div className={styles.carInfo__speedInfo_info}>
						<p>
							{speed}
							{' '}
							км/ч.
						</p>

						<div>
							<SVG stroke={turnSignal === 'left' ? '#5BFF0E' : ''} src={ICONS.LEFT} />
							<SVG src={ICONS.LIGHT} />
							<SVG stroke={turnSignal === 'right' ? '#5BFF0E' : ''} src={ICONS.RIGHT} />
						</div>
					</div>
				</div>

				<div className={styles.mileage}>
					<p>ПРОБЕГ</p>

					<p>{mileage}</p>
				</div>
			</div>

			<div className={styles.carInfo__car}>
				<div className={styles.carInfo__head}>
					<div className={styles.carInfo__item}>
						<p>LOCK</p>

						<SVG src={ICONS[lock ? 'LOCK' : 'UN_LOCK']} />
					</div>

					<div className={styles.carInfo__item}>
						<p>ENGINE</p>

						<SVG src={ICONS.ENGINE} />
					</div>
				</div>

				<div style={{marginTop: 20}} className={styles.carInfo__item}>
					<p>FUEL</p>

					<div className={styles.carInfo__fuel}>
						<SVG src={ICONS.FUEL} />

						<p>
							{fuel}
							л.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarInfo;
