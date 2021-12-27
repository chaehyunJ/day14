function submitHandler(event){	// 폼이 submit할때 등록하는 함수
		event.preventDefault();
		console.log('submitHandler 호출')
		
		// 1. 입력 값을 자바스크립트 객체 형태로 준비한다
		const ob = {}
		
		// form에 입력한 데이터 가져오기
		const formData = new FormData(event.target)
		console.log(formData.keys())
		
		for(key of formData.keys()){
			console.log(key, ':', formData.get(key))
			ob[key] = formData.get(key)
		}
		
		console.log(ob)
		
		const url = cpath + '/getTodoData'
		const opt = {
			method : 'POST',
			body : JSON.stringify(ob),
			headers : {
				// 보내는 형식은 json이고 인코딩은 utf-8로 지정
				'Content-type' : 'application/json; charset=utf-8'
			}
		}
		
		fetch(url, opt)
		.then(resp => resp.text())
		.then(text => {
			if(text == 1){
				alert('작성 성공')
				location.href= cpath
			}
			else{
				alert('작성 실패')
				event.target.reset()
			}
		})
		
		
		

}

function rightClickHandler(event){
	event.preventDefault()
	let target = event.target
	while(target.classList.contains('items') == false){
		target = target.parentNode
		console.log(target)
	}
	alert('우클릭 이벤트 발생' + event.target.dataset.idx)
}



function loadHandler(event){	// 목록 불러오는 함수
	console.log('loadHandler 호출')
	const url = cpath + '/todo'
	const opt = {
			method : 'get'
	}
	
	fetch(url, opt)
	.then(resp => resp.json())
	.then(json => {
		console.log(json)
		const dom = getDom(json)
		const list = document.querySelector('#list')
		console.log(list)
		list.innerHTML += dom
		
		const items = document.querySelectorAll('.items')
		
		 items.forEach(dto => dto.onclick = rightClickHandler)
//		items.forEach(dto => {
//			dto.onclick = function(event){
//				const idx = dto.dataset.idx
//				alert('우클릭 이벤트 발생 ' + idx)
////				location.href= cpath + '/delete/' + idx
//				const url = cpath + '/todo/' + idx
//				const opt = {
//					method : 'DELETE'
//				}
//				fetch(url, opt)
//				
//			}
//		})
		console.log(items)
		// div.oncontextmenu = rightClickHandler
	})
}



function getDom(json){
	let dom = ''
		json.forEach(dto =>{
			dom += '<div class="items" data-idx="' + dto.idx +'">'
//			for(key in dto){
//				dom += '<div>' + dto[key] + '</div>'
//			}
			dom += '<div>' + new Date(dto.tdate + 1000 * 60 * 60 * 24).toISOString().split('T')[0] + '</div>'
			dom += '<div>' + dto.idx + '</div>'
			dom += '<div>' + dto.title + '</div>'
			dom += '<div>' + dto.content + '</div>'
			dom += '</div>'
				
		
		})
		
	
		return dom
}