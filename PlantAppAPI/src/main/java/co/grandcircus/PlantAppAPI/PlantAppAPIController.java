package co.grandcircus.PlantAppAPI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;


@RestController
@CrossOrigin
public class PlantAppAPIController {
	
	@Autowired
	private PlantRepository repo;
	
	@GetMapping("/")
	public RedirectView home() {
		return new RedirectView ("plants");
	}
	
	@GetMapping("/plants")
	public List<PersonalPlant> readAll(){
		return repo.findAll();
	}
	
	//C(R)UD -- Read One
	@GetMapping("/plants/{id}")
	public PersonalPlant readOne(@PathVariable("id") Long id) {
		return repo.findById(id).orElseThrow(() -> new PlantNotFoundException(id) );
	}
		
	//(C)RUD -- Create
	@PostMapping("/plants")
	@ResponseStatus(HttpStatus.CREATED)
	public PersonalPlant create(@RequestBody PersonalPlant sb) {
		System.out.println(sb);
		repo.save(sb);
		return sb;
	}
	
	//CRU(D) -- Delete
	@DeleteMapping("/plants/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	//CR(U)D -- Update
	@PutMapping("/plants/{id}")
	public PersonalPlant update(@PathVariable("id") Long id, @RequestBody PersonalPlant plant) {
		plant.setId(id);
		return repo.save(plant);
	}
	
	@RequestMapping("/")
	public String root() {
		return "ok";
	}

}
