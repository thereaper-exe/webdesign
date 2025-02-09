document.addEventListener('DOMContentLoaded', () => {
	// Обработчик клика на товар
	document.querySelectorAll('.collection-item').forEach(item => {
		item.addEventListener('click', () => {
			const productInfo = JSON.parse(item.dataset.info)
			openProductModal(productInfo, item.querySelector('img').src)
		})
	})

	// Открытие модального окна
	function openProductModal(info, imgSrc) {
		const modal = document.getElementById('productModal')
		document.getElementById('modalImage').src = imgSrc
		document.getElementById('modalTitle').textContent = info.name
		document.getElementById('modalDesc').textContent = info.desc
		document.getElementById(
			'modalPrice'
		).textContent = `${info.price.toLocaleString()} ₸`

		const sizesContainer = document.getElementById('modalSizes')
		sizesContainer.innerHTML = ''
		info.sizes.forEach(size => {
			const sizeElement = document.createElement('span')
			sizeElement.textContent = size
			sizeElement.addEventListener('click', () => {
				document
					.querySelectorAll('#modalSizes span')
					.forEach(s => s.classList.remove('selected'))
				sizeElement.classList.add('selected')
			})
			sizesContainer.appendChild(sizeElement)
		})

		modal.style.display = 'block'
	}

	// Закрытие модального окна
	document.querySelector('.close').addEventListener('click', () => {
		document.getElementById('productModal').style.display = 'none'
	})

	window.onclick = function (event) {
		const modal = document.getElementById('productModal')
		if (event.target == modal) {
			modal.style.display = 'none'
		}
	}

	// Фильтрация коллекции
	document.querySelectorAll('.filter-btn').forEach(btn => {
		btn.addEventListener('click', () => {
			document
				.querySelectorAll('.filter-btn')
				.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			const filter = btn.textContent.toLowerCase()
			document.querySelectorAll('.collection-item').forEach(item => {
				if (filter === 'all' || item.dataset.category.includes(filter)) {
					item.style.display = 'block'
				} else {
					item.style.display = 'none'
				}
			})
		})
	})
})
