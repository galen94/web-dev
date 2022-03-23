import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch(action.type){
        case 'save-changes':
            const newProfile = {
                firstName: action.firstName,
                lastName: "",
                bio: action.bio,
                website: action.website,
                location: action.location,
                dateOfBirth: action.dateOfBirth
            }
            console.log(state);
            //return {newProfile, ...state};
            return {firstName: newProfile.firstName, bio: newProfile.bio, ...state};
            return {newProfile};
        default:
            return profile
    }
    //return(state);
    //return profile;
};

export default profileReducer;

