export interface Dialog {

    id: string;
    label: string;
    content: string;
    trigger: string[];

    children: Dialog[];

    actions: {prop:string, value:any}[];

    character: string;

}
