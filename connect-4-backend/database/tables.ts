class Lobby_T {
    constructor(_code?: string, _memberCount?: number){
        this.code = _code ?? "";
        this.member_count = _memberCount ?? 0;
    }
    code: string;
    member_count: number;
}