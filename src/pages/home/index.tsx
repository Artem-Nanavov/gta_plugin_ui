import React from 'react';
import Notification from './components/notification';
import styles from './styles.scss';

const HomePage = () => (
	<div>
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
);

export default HomePage;
