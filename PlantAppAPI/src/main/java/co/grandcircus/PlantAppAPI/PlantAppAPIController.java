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
	public List<Plant> readAll(){
		return repo.findAll();
	}
	
	//C(R)UD -- Read One
	@GetMapping("/plants/{id}")
	public Plant readOne(@PathVariable("id") Long id) {
		return repo.findById(id);
	}
		
	//(C)RUD -- Create
	@PostMapping("/plants")
	@ResponseStatus(HttpStatus.CREATED)
	public Plant create(@RequestBody Plant sb) {
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
	public Plant update(@PathVariable("id") Long id, @RequestBody Plant plant) {
		plant.setId(id);
		return repo.save(plant);
	}
}
