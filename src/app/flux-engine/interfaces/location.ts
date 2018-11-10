export interface Location {

    alias: string;
    label: string;

    scene: {
        dialog: string[]
    }

    adjacentLocations: string[];

}
