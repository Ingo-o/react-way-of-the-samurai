import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    const {follow, unfollow, users, pageSize, totalUsersCount, currentPage, onPageChange, followingInProgress} = props;

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChange={onPageChange}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {users.map(user => <User user={user}
                                         key={user.id}
                                         follow={follow}
                                         unfollow={unfollow}
                                         followingInProgress={followingInProgress}/>)}
            </div>
        </div>
    );
}

export default Users;