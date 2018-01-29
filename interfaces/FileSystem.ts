export interface IFile {
    name?: string;
    path?: string;
    mime?: string;
    isDirectory?: boolean;
    children?: Array<IFile>;
}