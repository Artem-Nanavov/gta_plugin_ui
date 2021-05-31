import React from 'react';
import Notification from 'library/common/components/notification';
import UserProfile from 'library/common/components/profile';
import styles from './styles.scss';

const HomePage = () => (
	<div className={styles.home}>
		<div className={styles.home__notifications}>
			<Notification
				text="Через 5 минут будет рестарт сервера!"
				type="WARN"
			/>

			<Notification
				text="Вы закрыли автомобиль"
				type="SUCCESS"
			/>

			<Notification
				text="Что-то пошло не так, но мне...."
				type="ERROR"
			/>
		</div>

		<header className={styles.header}>
			<UserProfile
				user_id={0}
				username="NAME"
				date="07.05.2021"
				online={999}
				time="21:00"
			/>
		</header>
	</div>
);

export default HomePage;
