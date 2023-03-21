import {ReactNode} from "react";
import classNames from "classnames";
import {ScreenSize, Padding, Margin} from "../props/tailwind";

interface WrapperProps {
    children: ReactNode;
    screen?: ScreenSize,
}

export default function Wrapper({
    children,
    screen = '2xl',
}: WrapperProps) {

    const screenVariants: {[key in ScreenSize]?: string } = {
        'xl': "max-w-screen-xl px-14 py-14 mx-auto",
        '2xl': "max-w-screen-2xl px-14 py-14 mx-auto",
    }

    return (
        <div className={`${screenVariants[screen]}`}>
            {children}
        </div>
    )
}