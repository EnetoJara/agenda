import { AppState } from "@eneto/api-client";
import { connect } from "react-redux";

import { LandingPage } from "../components/lists";
import { lists } from "../modules/lists";
import { listsAction } from "../modules/lists/lists-actions";


const stateToProps = (state: AppState) => ({
    lists: lists(state),
});
const dispatchToProps = {
    getListsRequests: listsAction,
    getListRequests: listsAction,
    postList: listsAction,
};

export default connect(stateToProps, dispatchToProps)(LandingPage);
