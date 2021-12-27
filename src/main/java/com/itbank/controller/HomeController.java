package com.itbank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import com.itbank.service.TodoService;

@Controller
public class HomeController{
	
	@Autowired private TodoService ts;
	
	@GetMapping("/")
	public String home() {
		return "home";
	}
	
	@GetMapping("/delete/{idx}")
	public ModelAndView delete(@PathVariable int idx){
			ModelAndView mav = new ModelAndView();
			
			int row = ts.getDelete(idx);
			if(row == 1) {
				mav.setViewName("alert");
				mav.addObject("msg", "삭제 성공");
				
			}
			else {
				mav.setViewName("alert");
				mav.addObject("msg", "삭제 실패");
			}
		return mav;
	}
}