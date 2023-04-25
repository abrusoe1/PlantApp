export interface PersonalPlant {
    id:              number;
    nickname?:        string;
    common_name:     string;
    scientific_name: string;
    other_name:      string;
    watering:        Watering;
    day?:             number;
}

export enum Watering {
    Average = "Average",
    Frequent = "Frequent",
    Minimal = "Minimal",
}
