export interface Dialog {

    id: string;
    label: string;
    content: string;

    children: Dialog[];

    character: string;

}
