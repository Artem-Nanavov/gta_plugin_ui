type notificationTitle = 'WARN' | 'ERROR' | 'SUCCESS';

const getNotificationTitle = (type: notificationTitle) => {
	switch (type) {
	case 'WARN':
		return 'СИСТЕМА';
	case 'SUCCESS':
		return 'УСПЕШНО';
	case 'ERROR':
		return 'ОШИБКА';
	default:
		return 'ОШИБКА';
	}
};

export default getNotificationTitle;
