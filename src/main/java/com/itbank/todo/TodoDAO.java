package com.itbank.todo;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoDAO {

	@Select("select a.idx, a.title, a.content, to_char(a.tdate, 'yyyy-MM-dd') tdate from todo a order by tdate")
	List<TodoDTO> list();

	@Insert("insert into todo values (todo_seq.nextval, #{title}, #{content}, #{tdate})")
	int insert(HashMap<String, String> map);

	@Delete("delete from todo where idx = #{idx}")
	int delete(int idx);

}
