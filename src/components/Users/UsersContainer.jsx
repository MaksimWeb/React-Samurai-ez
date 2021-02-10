import React from 'react';
import {connect} from "react-redux";
import {
    follow, getPageThunkCreator, getUsersThunkCreator,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getPageThunkCreator(pageNumber, this.props.pageSize)

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   followingProgress={this.props.followingProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingProgress: state.users.followingInProgress
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
    follow,

    unfollow,

    getPageThunkCreator,

    getUsersThunkCreator})) (UsersAPIComponent)