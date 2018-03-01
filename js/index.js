const imgFile = {};
document.querySelector('#file-input').onchange = function(event) {
	const file = event.target.files[0];
	transformFileToDataUrl(file)
}

function transformFileToDataUrl(file) {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {
		const result = e.target.result;
		const img = document.querySelector('.img')
		img.style.backgroundImage = `url(${result})`
		document.querySelector('.shu').style.display = 'none'
		document.querySelector('.heng').style.display = 'none'
	};
}
const date = document.querySelector('.date')

function selects(selected) {
	switch (selected) {
		case 'yes':
			date.style.display = 'block';
			break;
		default:
			date.style.display = 'none';
			break
	}
}

function dates(e) {
	if (e.value.length > 0) {
		date.querySelectorAll('input').item(0).classList.add("full");
	} else {
		date.querySelectorAll('input').item(0).classList.remove("full");
	}
}

function generate() {
	const ifsw = Date.parse('2018-3-21')
	const set_name = document.querySelector("#name").value
	const set_type = document.querySelector("#type").value
	const set_date = document.querySelector("#date").value
	const img = document.querySelector('.img').style.backgroundImage
	if (img.length > 0) {
		if (set_name.length > 0) {
			if (set_type !== 'none') {
				document.querySelector(".get_name").innerHTML = `我是${set_name}`
				if (set_type == 'yes') {
					if (set_date.length > 0) {
						const get_date = parseInt((ifsw - Date.parse(set_date)) / (1000 * 60 * 60 * 24) + 1)
						document.querySelector('.set').style.display = 'none'
						document.querySelector('.get').style.display = 'block'
						const yes_t = document.querySelectorAll('.yes_t')
						for (let i = 0; i < yes_t.length; i++) {
							yes_t[i].style.display = 'block'
						}
						document.querySelector('.yes_t1').style.opacity = '1'
						document.querySelector('.call').style.display = 'none'
						document.querySelector(".get_date").innerHTML = `今天是我加入社工第${get_date}天`
						switch (get_date.toString().length) {
							case 4:
								document.querySelector(".qian").innerHTML = get_date.toString().charAt(0)
								document.querySelector(".bai").innerHTML = get_date.toString().charAt(1)
								document.querySelector(".shi").innerHTML = get_date.toString().charAt(2)
								document.querySelector(".ge").innerHTML = get_date.toString().charAt(3)
								break
							case 3:
								document.querySelector(".qian").innerHTML = 0
								document.querySelector(".bai").innerHTML = get_date.toString().charAt(0)
								document.querySelector(".shi").innerHTML = get_date.toString().charAt(1)
								document.querySelector(".ge").innerHTML = get_date.toString().charAt(2)
								break
							case 2:
								document.querySelector(".qian").innerHTML = 0
								document.querySelector(".bai").innerHTML = 0
								document.querySelector(".shi").innerHTML = get_date.toString().charAt(0)
								document.querySelector(".ge").innerHTML = get_date.toString().charAt(1)
								break
							case 1:
								document.querySelector(".qian").innerHTML = 0
								document.querySelector(".bai").innerHTML = 0
								document.querySelector(".shi").innerHTML = 0
								document.querySelector(".ge").innerHTML = get_date.toString().charAt(0)
								break
						}
					}
				} else {
					document.querySelector('.set').style.display = 'none'
					document.querySelector('.get').style.display = 'block'
					const yes_t = document.querySelectorAll('.yes_t')
					for (let i = 0; i < yes_t.length; i++) {
						yes_t[i].style.display = 'none'
					}
					document.querySelector('.yes_t1').style.opacity = '0'
					document.querySelector('.call').style.display = 'block'
				}
			}
		}
	}
}