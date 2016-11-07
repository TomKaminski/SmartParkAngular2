export class SmartRequest {
    public Url : string;
    public MustAuthorize : boolean;

    constructor(url : string, mustAuthorize: boolean) {
        this.Url = url;
        this.MustAuthorize = mustAuthorize;
    }
}