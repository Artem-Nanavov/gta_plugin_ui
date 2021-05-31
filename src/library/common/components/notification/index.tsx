import React from 'react';
import ICONS from 'library/common/icons';
import SVG from 'react-inlinesvg';
import getNotificationTitle from 'library/utils/getNotificationTitle';
import styles from './styles.scss';

interface INotification {
	type: 'WARN' | 'ERROR' | 'SUCCESS';
	text: string;
}

const Notification = ({
	type,
	text,
}: INotification) => (
	<div className={styles.notification}>
		<div>
			<SVG src={ICONS[type]} />

			<div className={styles.notification__text}>
				<h4 className={styles.notification__title}>{getNotificationTitle(type)}</h4>

				<p className={styles.notification__text}>{text}</p>
			</div>
		</div>
	</div>
);

export default Notification;
