export interface TestAPIURL {
    sha:       string;
    url:       string;
    tree:      Tree[];
    truncated: boolean;
}

export interface Tree {
    path:  string;
    mode:  string;
    type:  Type;
    sha:   string;
    size?: number;
    url:   string;
}

export enum Type {
    Blob = "blob",
    Tree = "tree",
}
