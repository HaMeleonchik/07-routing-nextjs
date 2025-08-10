export interface Note {
    id: string;
    title: string;
    content: string;
    tag: "Personal" | "Work" | "Todo" |"Meeting" | "Shopping";
    createdAt: string
    updatedAt: string
}
export interface NewNote {
    title: string;
    content: string;
    tag: "Personal" | "Work" | "Todo" |"Meeting" | "Shopping";
}

