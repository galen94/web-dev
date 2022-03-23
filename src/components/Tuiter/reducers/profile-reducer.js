import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch(action.type){
        case 'save-changes':
            state.bio = action.profile.bio;
            state.firstName = action.profile.firstName;
            state.location = action.profile.location;
            state.website = action.profile.website;
            state.dateOfBirth = action.profile.dateOfBirth;
            return state;
        default:
            return profile
    }
};

export default profileReducer;

