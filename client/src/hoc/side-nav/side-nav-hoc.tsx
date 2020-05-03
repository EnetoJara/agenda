import * as cx from "classnames";
import * as React from "react";

export interface SideNavProps {
    children: React.ReactNode;
    show?: boolean;
}
export function SideNav (props: SideNavProps): React.ReactElement<SideNavProps> {
    const { children, show = false } = props;

    return <div className={cx({ "app-layout-side-nav": true, toggle: show })}>{children}</div>;
}
