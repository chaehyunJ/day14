function submitHandler(event){	// 폼이 submit할때 등록하는 함수
		event.preventDefault();
		console.log('submitHandler 호출')
		
		// 1. 입력 값을 자바스크립트 객체 형태로 준비한다
		const ob = {}
		
		// form에 입력한 데이터 가져오기
		
		// 입력된 파라미터를 map처럼 가져온다
		const formData = new FormData(event.target)
		console.log(formData)
		console.log('formData.keys()',formData.keys())
		console.log('keys.next()', formData.keys().next())


		let keys = formData.keys()
		
		console.log('1', keys.next())
		console.log('2', keys.next())
		console.log('3', keys.next())
		console.log('4', keys.next())
		
		let value = formData.values()
		
		console.log('1-1', value.next())
		console.log('2-1', value.next())
		console.log('3-1', value.next())
		console.log('4-1', value.next())
		
		let entries = formData.entries()
		
		console.log('1-2', entries.next())
		console.log('2-2', entries.next())
		console.log('3-2', entries.next())
		console.log('4-2', entries.next())
		
		// 빈 객체 ob에 key값으로 value를 담는다
		for(key of formData.keys()){
			console.log(key, ':', formData.get(key))
			console.log('ob1',ob[key])
			ob[key] = formData.get(key)
			console.log('ob',ob[key])
		}
		
		console.log(ob)
		// json 형식으로 
		// {"title" : "btn"} 이렇게 들어온다
		console.log(JSON.stringify(ob))
		
		const url = cpath + '/getTodoData'
		const opt = {
			method : 'POST',
			body : JSON.stringify(ob),	// stringify로 ob객체를 json타입으로 변형한다
			headers : {
				// 보내는 형식은 json이고 인코딩은 utf-8로 지정(한글이 포함되어 있으니까 utf-8로 간다)
				'Content-type' : 'application/json; charset=utf-8'
			}
		}
		
		fetch(url, opt)
		.then(resp => resp.text())
		.then(text => {
			if(text == 1){
				event.target.reset()
				list.innerHTML = ''
				loadHandler()
				alert('작성 성공')
//				location.href= cpath
			}
			else{
				alert('작성 실패')
//				event.target.reset()
				event.target.querySelector('input').select()
			}
		})
		
		
		

}

function rightClickHandler(event){
	let target = event.target
	
//	if(target.classList.contains('.items') == false){
//		target = target.parentElement
//	}
//	if(target.classList.className != 'items'){
//		target = target.parentElement
//		
//	}
	
	// if문으로 돌리면 다른 요소를 선택할 수 있으니까
	// 위에 h3나 다른 태그가 있을 경우가 있으니까 while문으로 돌려주는 것이 좋다
	while(target.classList.contains('items') == false){
		target = target.parentElement
	}
	console.log('target',target)
	
	let idx = target.dataset.idx
	let title = target.dataset.title
//	alert('우클릭 이벤트 발생' + idx)
	const flag = confirm('정말 ' + title + ' 일정을 삭제하시겠습니까?')
	if(flag){
		const url = cpath + '/todo/' + idx
		const opt = {
				method : 'delete'
		}
		fetch(url, opt)
		.then(resp => resp.text())
		.then(text => {
			if(text == 1){

				alert('삭제성공')
				list.innerHTML = ''		// 목록을 지우고 새로고침하는 것이 좋다  페이지를 새로고침하지 않는 것 
				loadHandler()
//				location.href= cpath
			}
			else{
				alert('삭제 실패')
			}
		})
	}
	else{
		return
	}
}



function loadHandler(){	// 목록 불러오는 함수
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
			dom += '<div class="items" data-idx="' + dto.idx +'" data-title="'+ dto.title +'">'
//			for(key in dto){
//				dom += '<div>' + dto[key] + '</div>'
//			}
			// toISOString 은  영국 표준시 기준이라 한국으 +0900이라서 9만 곱해주면 된다 
			dom += '<div>' + new Date(dto.tdate + 1000 * 60 * 60 * 9).toISOString().split('T')[0] + '</div>'
			dom += '<div>' + dto.idx + '</div>'
			dom += '<div>' + dto.title + '</div>'
			dom += '<div>' + dto.content + '</div>'
			dom += '</div>'
				
		
		})
		
	
		return dom
}