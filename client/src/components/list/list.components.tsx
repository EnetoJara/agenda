import * as React from "react";
import { GET_LIST_REQUEST, POST_USERS_REQUEST } from '../../utils/constants';
import { ListState, UserState, NewUser } from '@eneto/api-client';
import { UsersAction } from '../../modules/users/users-actions';
import {RouteComponentProps} from "react-router-dom"
export interface ListProps extends RouteComponentProps<{id: string}> {
    currentList: ListState;
    usersByList: UserState[];
    getUsers: UsersAction;
    submitUser: UsersAction;

}

export function List (props: ListProps) {
    const [ name, setName ] = React.useState("")
    const [ secondName, setSecondName ] = React.useState("")
    const [ lastName, setLastName ] = React.useState("")
    const [ secondLastName, setSecondLastName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ address, setAddress ] = React.useState("")
    React.useEffect(() => {
        const { getUsers } = props;
        getUsers(GET_LIST_REQUEST, props.match.params.id)
    }, []);

    const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setName(value);
    };

    const onChangeSecondNameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setSecondName(value);
    };

    const onChangeLastNameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setLastName(value);
    };

    const onChangeSecondLastNaneHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setSecondLastName(value);
    };

    const onChangeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setEmail(value);
    };

    const onChangeAdressHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.currentTarget;

        setAddress(value);
    };

    const onCancelHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        evt.preventDefault();

        setName("");
        setSecondName("");
        setLastName("");
        setSecondLastName("");
        setEmail("");
        setAddress("");
    };

    const onSubmitHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        evt.preventDefault();

        const {submitUser, match} = props;

        submitUser(POST_USERS_REQUEST, {name,
            secondName,
            lastName,
            secondLastName,
            email,
            listId: Number(match.params.id),
            address} as NewUser)
        setName("");
        setSecondName("");
        setLastName("");
        setSecondLastName("");
        setEmail("");
        setAddress("");
    }

    return (
        <div className="list-page">
            <h2>List</h2>
            <div className="list-page__form">
                <div className="list-page__form-row">
                    <div className="list-page__form-row__column">
                        <span>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={ name }
                            onChange={ onChangeNameHandler }
                        />
                    </div>
                    <div className="list-page__form-row__column">
                        <span>Second Name</span>
                        <input
                            type="text"
                            name="secondName"
                            value={ secondName }
                            onChange={ onChangeSecondNameHandler }
                        />
                    </div>
                    <div className="list-page__form-row__column">
                        <span>Last Name</span>
                        <input
                            type="text"
                            name="lastName"
                            value={ lastName }
                            onChange={ onChangeLastNameHandler }
                        />
                    </div>
                </div>
                <div className="list-page__form-row">
                    <div className="list-page__form-row__column">
                        <span>Second Last Name</span>
                        <input
                            type="text"
                            name="secondLastName"
                            value={ secondLastName }
                            onChange={ onChangeSecondLastNaneHandler }
                        />
                    </div>
                    <div className="list-page__form-row__column">
                        <span>Email</span>
                        <input
                            type="text"
                            name="email"
                            value={ email }
                            onChange={ onChangeEmailHandler }
                        />
                    </div>
                    <div className="list-page__form-row__column">
                        <span>Address</span>
                        <input
                            type="text"
                            name="adress"
                            value={ address }
                            onChange={ onChangeAdressHandler }
                        />
                    </div>
                </div>
                <div className="list-page__form-row">
                    <button type="button" onClick={onCancelHandler}>Cancel</button>
                    <button type="button" onClick={onSubmitHandler}>Submit</button>
                </div>
            </div>
        </div>
    );
}
