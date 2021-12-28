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

@RestController
public class AjaxController {

	@Autowired private TodoService ts;
	
	@GetMapping("/todo")
	public List<TodoDTO> list(){
		return ts.selectList();
	}
	
	@PostMapping("/getTodoData")
	public int getTodoData(@RequestBody HashMap<String, String> map ) {
		int row = ts.insertData(map);
		return row;
	}
	
	@DeleteMapping("/todo/{idx}")
	public int deleteTodo(@PathVariable int idx) {
		int row = ts.getDelete(idx);
		return row;
	}
} 
