package com.itbank.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itbank.service.TodoService;
import com.itbank.todo.TodoDTO;

@RestController					// 모든 method는 @ResponseBody를 포함한단
								// @ResponseBody : 이 함수가 반환하는 값 그 자체가 응답이다 
public class AjaxController {

	@Autowired private TodoService ts;
	
	@GetMapping("/todo")
	public List<TodoDTO> list(){
		return ts.selectList();
	}
	
	@PostMapping("/getTodoData")
	public int getTodoData(@RequestBody HashMap<String, String> map ) {
		// @RequestBody TodoDTO dto 로 만든 dto를 사용해서 입력받은 값을 불러올 수 있다
		// @RequestBody : 요청에 담긴 [body : JSON.stringify(ob)] 를 DTO에 맵핑해라
		int row = ts.insertData(map);
		return row;
	}
	
	@DeleteMapping("/todo/{idx}")
	public int deleteTodo(@PathVariable int idx) {
		int row = ts.getDelete(idx);
		return row;
	}
} 
