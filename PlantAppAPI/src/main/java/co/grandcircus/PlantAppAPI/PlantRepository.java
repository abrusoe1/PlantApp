package co.grandcircus.PlantAppAPI;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<PersonalPlant, Long> {

}
