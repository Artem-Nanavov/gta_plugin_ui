import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import cn from 'classnames';
import Label from 'library/common/components/label';
import addDotBetweenNumbers from 'library/utils/addDotBetweenNumbers';
import styles from './styles.scss';

interface IUserBalance {
	cash: string | number;
	card: string | number;
	microTriggerBtn: string | number;
	isMicroMuted: boolean;
}

const microLabelStyles: React.CSSProperties = {
	position: 'absolute',
	right: -13,
	top: -1,
};

const UserBalance = ({
	cash,
	card,
	microTriggerBtn,
	isMicroMuted,
}: IUserBalance) => (
	<div className={styles.info}>
		<div className={styles.info__header}>
			<div className={styles.info__block}>
				<div className={cn(styles.info__icon, styles.info__cash_icon)}>
					<SVG src={ICONS.$} />
				</div>

				<p className={styles.info__mony}>
					$
					{addDotBetweenNumbers(cash)}
				</p>
			</div>

			<div className={styles.info__micro}>
				<SVG src={ICONS[isMicroMuted ? 'OFF_MICRO' : 'ON_MICRO']} />

				<Label value={microTriggerBtn} style={microLabelStyles} />
			</div>
		</div>

		<div className={styles.info__block}>
			<div className={cn(styles.info__icon, styles.info__safe_icon)}>
				<SVG src={ICONS.$} />
			</div>

			<p className={styles.info__mony}>
				$
				{addDotBetweenNumbers(card)}
			</p>
		</div>
	</div>
);

export default UserBalance;
