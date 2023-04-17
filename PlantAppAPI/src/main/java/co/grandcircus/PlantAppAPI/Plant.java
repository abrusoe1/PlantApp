package co.grandcircus.PlantAppAPI;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Plant {
	
	@Id
	long id;
	String commonName;
	String scientificName;
	String otherName;
	String watering;
	//May add other stuff later
	
	public Plant() {}
	
	public Plant(long id, String commonName, String scientificName, String otherName, String watering) {
		this.id = id;
		this.commonName = commonName;
		this.scientificName = scientificName;
		this.watering = watering;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCommonName() {
		return commonName;
	}

	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}

	public String getScientificName() {
		return scientificName;
	}

	public void setScientificName(String scientificName) {
		this.scientificName = scientificName;
	}

	public String getOtherName() {
		return otherName;
	}

	public void setOtherName(String otherName) {
		this.otherName = otherName;
	}

	public String getWatering() {
		return watering;
	}

	public void setWatering(String watering) {
		this.watering = watering;
	}

	@Override
	public String toString() {
		return "Plant [id=" + id + ", commonName=" + commonName + ", scientificName=" + scientificName + ", otherName="
				+ otherName + ", watering=" + watering + "]";
	}
}
