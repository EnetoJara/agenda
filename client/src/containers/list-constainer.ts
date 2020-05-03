import { connect } from "react-redux";
import { AppState } from "@eneto/api-client";
import { List } from "../components/list";
import { list } from "../modules/lists";
import {usersByList} from "../modules/users";
import { usersAction } from '../modules/users/users-actions';

const stateToProps = (state: AppState) => ({
    currentList: list(state),
    usersByList: usersByList(state)
});
const dispatchToProps = {
    getUsers: usersAction,
    submitUser: usersAction
};

export default connect(stateToProps, dispatchToProps)(List);
