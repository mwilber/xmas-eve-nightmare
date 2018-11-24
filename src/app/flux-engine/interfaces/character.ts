export interface Character {

    alias: string;
    label: string;
    inanimate: any; /* should be boolean but firebase is casting to string */
    icon: string;
    
}
