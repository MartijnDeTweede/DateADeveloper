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
    pictureUri?: boolean;
    description: string;
    type: ProfileType;
}
