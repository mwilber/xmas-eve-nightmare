export interface Location {

    alias: string;
    label: string;

    scene: {
        dialog: string[]
    }

    adjacentLocations: string[];

    // constructor(alias: string, label: string, adjacent: string[]){
    //     this.alias = alias;
    //     this.label = label;
    //     this.adjacentLocations = adjacent;
    // }
}
