export interface Location {

    alias: string;
    label: string;
    theme: string;

    scene: {
        dialog: string[]
    }

    adjacentLocations: string[];

}
