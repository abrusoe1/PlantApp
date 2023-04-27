package co.grandcircus.PlantAppAPI;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin // Allow any website to access this API
public class PlantDataController {
	String filePath ="C:\\Users\\thish\\OneDrive\\Desktop\\Plant Application Final Project\\PlantApp\\Plant JSON";
	
	// C(R)UD -- Read One
	@GetMapping("/data/{page}")
	public String readOne(@PathVariable("page") Long page) {
		try {
			File fr = new File(filePath +"\\plants"+page+".json");
			Scanner s = new Scanner(fr);
			String data ="";
			 while (s.hasNextLine()) {
				 data += s.nextLine();
			 }
			 
			 return data;
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			return e.getMessage();
		}
	}
}