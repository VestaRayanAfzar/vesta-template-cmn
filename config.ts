
export interface IVersion {
    api: string;
    app: string;
}

export interface ICmnConfig {
    locale: string;
    name: string;
    version: IVersion;
}

export const cmnConfig: ICmnConfig = {
    locale: "fa-IR",
    name: "vesta",
    version: {
        api: "v1",
        app: "0.1.0",
    },
};

export default cmnConfig;
