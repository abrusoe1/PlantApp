export interface Plant {
    data:         Datum[];
    to:           number;
    per_page:     number;
    current_page: number;
    from:         number;
    last_page:    number;
    total:        number;
}

export interface Datum {
    id:              number;
    common_name:     string;
    scientific_name: string[];
    other_name:      string[];
    cycle:           Cycle;
    watering:        Watering;
    sunlight:        Sunlight[];
    default_image:   DefaultImage;
}

export enum Cycle {
    Perennial = "Perennial",
}

export interface DefaultImage {
    license:      number;
    license_name: LicenseName;
    license_url:  string;
    original_url: string;
    regular_url:  string;
    medium_url:   string;
    small_url:    string;
    thumbnail:    string;
}

export enum LicenseName {
    AttributionLicense = "Attribution License",
    AttributionShareAlike30UnportedCCBYSA30 = "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
    AttributionShareAlikeLicense = "Attribution-ShareAlike License",
    CC010UniversalCC010PublicDomainDedication = "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
}

export enum Sunlight {
    FullSun = "full sun",
    PartShade = "part shade",
    PartialShade = " Partial Shade",
    Sun = "Sun",
    SunlightFullSun = "Full sun",
}

export enum Watering {
    Average = "Average",
    Frequent = "Frequent",
    Minimal = "Minimal",
}

export class Convert {
    public static toPlant(json:string):Datum[]{
        return JSON.parse(json);
    }
}