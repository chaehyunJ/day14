package test;

import java.util.HashMap;
import java.util.Set;

public class MapTest {

	public static void main(String[] args) {
		// key - value
		HashMap<String, String> map = new HashMap<String, String>();
		
		map.put("title", "자동차 정비");
		map.put("content", "탄소");
		map.put("tdate", "2021-08-14");
		
		// 순서 X 중복 X
		Set<String> set = map.keySet();
		
	
		for(String key : map.keySet()) {
			System.out.println(key + ":" + map.get(key));
		}
		
		
	}
}
