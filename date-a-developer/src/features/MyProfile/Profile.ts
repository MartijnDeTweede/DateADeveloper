export enum ProfileType {
    FrontEndDeveloper,
    BackEndDeveloper,
    Recruiter,
    FullStackDeveloper,
    CloudEngineer,
    SecurityEngineer,
    NotSelected
}

export interface ProfileState {
    screenName: string;
    userId: string;
    pictureUri?: boolean;
    description: string;
    type: ProfileType;
}
