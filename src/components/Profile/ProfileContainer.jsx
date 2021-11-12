import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const {setUserProfile} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                setUserProfile(response.data);
            });
    }

    render() {
        const {profile} = this.props;
        return (
            <Profile profile={profile}/>
        );
    }
};

const mapStateToProps = (state) => ({profile: state.profileState.profile});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
