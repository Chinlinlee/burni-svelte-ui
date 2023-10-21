import { type SearchParameter } from "./search-parameters";

export interface Settings {
    server: string;
    id: string;
    resourceType: string;
    token: string;
    parameters: SearchParameter[];
    displays: SearchParameter[];
}