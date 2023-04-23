export interface PersonalPlant {
    id:              number;
    nickname?:        string;
    common_name:     string;
    scientific_name: string[];  //May need to be array to match other model
    other_name:      string[];  //May need to be array to match other model
    watering:        Watering;
    day?:             number;
}

export enum Watering {
    Average = "Average",
    Frequent = "Frequent",
    Minimal = "Minimal",
}
