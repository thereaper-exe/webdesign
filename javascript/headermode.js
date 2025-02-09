document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle')
	const navList = document.querySelector('.nav-list')

	menuToggle.addEventListener('click', () => {
		menuToggle.classList.toggle('active')
		navList.classList.toggle('active')
	})

	// Закрываем меню при клике вне его области
	document.addEventListener('click', event => {
		if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
			menuToggle.classList.remove('active')
			navList.classList.remove('active')
		}
	})
})
