import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { NewList, ListsState, ListState } from "@eneto/api-client";
import { ListsAction } from "../../modules/lists/lists-actions";
import { POST_LISTS_REQUEST, GET_LISTS_REQUEST } from "../../utils/constants";
import {Form} from "./add-list-form"
import {Table} from "./table";
export interface LadingPageProps extends RouteComponentProps {
    lists: ListState[];
    getListsRequests: ListsAction;
    getListRequests: ListsAction;
    postList: ListsAction;
}

export function LandingPage (props: LadingPageProps): React.ReactElement<LadingPageProps> {
    const [ listName, setListName ] = React.useState<string>("");
    const [ listDescription, setListDescription ] = React.useState<string>("");
    const [renderList, setRenderList] = React.useState<ListState[]>([]);

    React.useEffect(() => {
        const  {getListsRequests}= props;

         getListsRequests(GET_LISTS_REQUEST, undefined)
    },[])
    React.useEffect(() => {
        const  {lists}= props;

        setRenderList([...lists])
    },[props.lists])


    const onSubmitListHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();

        const { postList } = props;

        postList(POST_LISTS_REQUEST, { name: listName, description: listDescription } as NewList);
    };
    const onCancelListHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();

        setListName("");
        setListDescription("");
    };

    const onInputListNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setListName(value);
    };

    const onInputListDescriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setListDescription(value);
    };

    return (
        <div className="landing-page">
            <h2 className="landing-page__title">Lists</h2>
            <Form
                listName={listName}
                onInputListNameChangeHandler={onInputListNameChangeHandler}
                listDescription={listDescription}
                onInputListDescriptionChangeHandler={onInputListDescriptionChangeHandler}
                onSubmitListHandler={onSubmitListHandler}
                onCancelListHandler={onCancelListHandler}
             />
             {renderList.length>0 && <Table list={renderList} />}
        </div>
    );
}
