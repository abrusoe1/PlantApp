package co.grandcircus.PlantAppAPI;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class PersonalPlant {
	
	@Id
	long id;
	String nickname;
	String commonName;
	String scientificName;
	String otherName;
	String watering;
	Integer day;
	//May add other stuff later
	
	public PersonalPlant() {}
	
	public PersonalPlant(long id, String nickname, String commonName, String scientificName, String otherName, String watering, Integer day) {
		this.id = id;
		this.nickname = nickname;
		this.commonName = commonName;
		this.scientificName = scientificName;
		this.otherName = otherName;
		this.watering = watering;
		this.day = day;
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

	
	
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Integer getDay() {
		return day;
	}

	public void setDay(Integer day) {
		this.day = day;
	}

	@Override
	public String toString() {
		return "PersonalPlant [id=" + id + ", nickname=" + nickname + ", commonName=" + commonName + ", scientificName="
				+ scientificName + ", otherName=" + otherName + ", watering=" + watering + ", day=" + day + "]";
	}

}
