import classnames from "classnames";
import {ReactNode} from "react";
import {ScreenSize, Shadow, WithColors} from "../props/tailwind";

interface SocialButtonProps {
    children: ReactNode,
    href: string,
    bg: WithColors,
    text?: WithColors,
    shadow?: Shadow,
    size?: ScreenSize,
}

export default function SocialButton ({children, href, bg = { default: 'primary' }, text = { default: 'white' }, shadow = 'sm', size = 'md'}: SocialButtonProps) {
    return (
        <>
            <a href={href}>
                <button
                    className={classnames(`bg-${bg.default} text-${text.default} text-${size} rounded-full  p-2 transition-all shadow-${shadow}`, {
                        "scale-90 hover:scale-95": size == 'sm',
                        "scale-95 hover:scale-100": size == 'md',
                        "scale-100 hover:scale-105": size == 'lg',
                        "scale-105 hover:scale-110": size == 'xl',
                        "scale-110 hover:scale-120": size == '2xl',
                    })}>
                    {children}
                </button>
            </a>
        </>
    )
}