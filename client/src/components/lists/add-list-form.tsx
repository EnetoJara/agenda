import * as React from "react";

export function Form (props: any) {
    const { listName, onInputListNameChangeHandler, listDescription, onInputListDescriptionChangeHandler, onCancelListHandler, onSubmitListHandler } = props;
    return (
        <div className="landing-page__form">
            <div>
                <span>List Name</span>
                <input
                    name="listName"
                    type="text"
                    value={ listName }
                    onChange={ onInputListNameChangeHandler }
                />
            </div>
            <div>
                <span>List Description</span>
                <input
                    name="listDescription"
                    type="text"
                    value={ listDescription }
                    onChange={ onInputListDescriptionChangeHandler }
                />
            </div>
            <div>
                <button type="button" onClick={ onCancelListHandler }>
                    Cancel
                    </button>
                <button type="button" onClick={ onSubmitListHandler }>
                    Submit
                    </button>
            </div>
        </div>
    )
}
