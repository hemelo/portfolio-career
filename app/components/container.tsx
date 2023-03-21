import classnames from "classnames";
import {ReactNode} from "react";
import {Margin, Padding, ScreenSize, WithColors} from "../props/tailwind";

interface ContainerProps {
    children: ReactNode;
    bg?: WithColors
}

export function Container ({ children, bg }: ContainerProps) {
    return (
        <>
            <div className={ classnames(`bg-${bg?.default}`, `dark:bg-${bg?.dark?.default}`) }>
                { children }
            </div>
        </>
    )
}