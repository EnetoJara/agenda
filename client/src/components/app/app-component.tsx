import * as React from "react";
import {
 BrowserRouter, Route, Switch, Redirect,
} from "react-router-dom";
import { Lists, List, User } from "../../containers";
import {
 Header, Layout, Main, SideNav,
} from "../../hoc";
import { ROUTE_LISTS_ID_USERS_ID, ROUTE_LISTS_ID_USERS, ROUTE_LISTS } from "../../utils/constants";

export function App (): React.ReactElement {
    return (
        <Layout>
            <BrowserRouter>
                <SideNav>
                    <nav>SideNav</nav>
                </SideNav>
                <Main>
                    <Header>
                        <div>Header</div>
                        <div>son 2</div>
                    </Header>
                    <Switch>
                        <Route exact path={ROUTE_LISTS} component={Lists} />
                        <Route path={ROUTE_LISTS_ID_USERS} component={List} />
                        <Route path={ROUTE_LISTS_ID_USERS_ID} component={User} />
                        <Redirect from="*" to={ROUTE_LISTS} />
                    </Switch>
                </Main>
            </BrowserRouter>
        </Layout>
    );
}
