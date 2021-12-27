package com.itbank.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itbank.todo.TodoDAO;
import com.itbank.todo.TodoDTO;

@Service
public class TodoService {

	@Autowired private TodoDAO dao;
	
	public List<TodoDTO> selectList() {
		return dao.list();
	}

	public int insertData(HashMap<String, String> map) {
		return dao.insert(map);
	}

	public int getDelete(int idx) {
		return dao.delete(idx);
	}

}
