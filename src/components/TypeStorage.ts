export interface TodoItems{
    task_id : number;
    task_name: string;
    task_status : boolean;
}

type Add = {
    type: "add";
    payload : {
        input : string;
    }
}

type Delete = {
    type : "delete",
    payload : {
        input : number;
    }
}

type Update = {
    type : "update",
    payload : {
        input : number;
    }
}

type Edit = {
    type : "edit",
    payload : {
        input : number,
        value : string
    }
}

export type Action = Add | Delete | Update | Edit;

export type InputState = string[];
