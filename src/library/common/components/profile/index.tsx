import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import styles from './styles.scss';
import Label from '../label';

interface IUserProfile {
	username: string;
	user_id: string | number;
	online: number | string;
	date: string;
	time: string;
}

const labelStyle: React.CSSProperties = {
	position: 'absolute',
	top: -7,
	right: -1,
};

const UserProfile = ({
	username,
	user_id,
	online,
	date,
	time,
}: IUserProfile) => (
	<div className={styles.userProfile}>
		{/* <Label value="RP" />

		<SVG src={ICONS.LOGO} /> */}

		<div className={styles.userProfile__header}>
			<div className={styles.userProfile__username}>
				<p>{username}</p>

				<Label style={labelStyle} value="RP" />
			</div>

			<div className={styles.userProfile__id}>
				<p>
					ID:
					{' '}
					{user_id}
				</p>
			</div>
		</div>

		<div className={styles.userProfile__footer}>
			<div className={styles.userProfile__online}>
				<div className={styles.userProfile__online_icon} />

				<p className={styles.userProfile__online_count}>{online}</p>
			</div>

			<div className={styles.userProfile__timeWrap}>
				<SVG src={ICONS.CLOCK} />

				<div className={styles.userProfile__time}>
					<p className={styles.userProfile__time_time}>{time}</p>

					<p className={styles.userProfile__time_date}>{date}</p>
				</div>
			</div>

			<SVG style={{zIndex: 10}} src={ICONS.LOGO} />
		</div>
	</div>
);

export default UserProfile;
