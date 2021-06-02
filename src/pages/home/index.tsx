import React from 'react';
import Notification from 'library/common/components/notification';
import UserProfile from 'library/common/components/profile';
import LeftBarPanel from 'library/common/components/leftBarPanel';
import PanelWithHints from 'library/common/components/panelWithHints';
import InfoPanel from 'library/common/components/infoPanel';
import styles from './styles.scss';

const items: Array<{
	icon: 'GUN' | 'MED_KIT' | 'MED_KIT_CAPSULES' | 'FOOD',
	count: number | string;
}> = [
	{
		icon: 'GUN',
		count: 0,
	},
	{
		icon: 'GUN',
		count: 0,
	},
	{
		icon: 'MED_KIT',
		count: 0,
	},
	{
		icon: 'MED_KIT_CAPSULES',
		count: 0,
	},
	{
		icon: 'FOOD',
		count: 0,
	},
];

const hints = [
	{
		icon: 'MAP',
		value: 'F1',
	},
	{
		icon: 'PHONE',
		value: 'F2',
	},
	{
		icon: 'SETTINGS',
		value: 'F3',
	},
	{
		icon: 'CART',
		value: 'F4',
	},
	{
		icon: 'I',
		value: 'F5',
	},
];

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

		<LeftBarPanel items={items} />

		<PanelWithHints items={hints as any} />

		<InfoPanel
			food={{active: 3, maxField: 5}}
			water={{active: 3, maxField: 5}}
			coordinates="Лос-Сантос, Калифорния"
		/>
	</div>
);

export default HomePage;
