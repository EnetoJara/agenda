import { AppState } from "@eneto/api-client";
import { connect } from "react-redux";

import { Users } from "../components/users";
import { lists } from "../modules/lists";

const stateToProps = (state: AppState) => ({
    lists: lists(state),
});

const dispatchToProps = null;

export default connect(stateToProps, dispatchToProps)(Users);
