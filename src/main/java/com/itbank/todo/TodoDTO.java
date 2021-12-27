package com.itbank.todo;

import java.sql.Date;

//idx		number		default todo_seq.nextval primary key,
//title		varchar2(200)	not null,
//content		varchar2(600)	not null,
//tdate		date		not null

public class TodoDTO {

	private int idx;
	private String title;
	private String content;
	private Date tdate;
	
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getTdate() {
		return tdate;
	}
	public void setTdate(Date tdate) {
		this.tdate = tdate;
	}
	
	
}
