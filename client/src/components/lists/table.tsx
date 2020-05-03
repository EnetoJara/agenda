import * as React from "react";
import {Link} from "react-router-dom";
export function Table (props: any) {
    const {list = []} = props;
    console.log("props", list.length > 0);
    const items = list.map(item => (
    <div className="table-body__row" key={ item.id }>
        <div>
            <Link to={`/lists/${item.id}/users`}>
            { item.id }
            </Link>
        </div>
        <div>
            { item.name }
        </div>
        <div>
            { item.description }
        </div>
    </div>
    ));

    return (
        <div className="table">
            <div className="table-header">
                <div>
                    <span>id</span>
                </div>
                <div>
                    <span>Name</span>
                </div>
                <div>
                    <span>Description</span>
                </div>
            </div>
            <div className="table-body">
            {items}
            </div>
         </div>


    )
}
