import {useEffect, useState} from "react";

export default function ReadingBar() {

    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        let el = document.documentElement,
            ScrollTop = el.scrollTop || document.body.scrollTop,
            ScrollHeight = el.scrollHeight || document.body.scrollHeight;

        let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        // store percentage in state
        setWidth(percent);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
    });

    return (
        <div style={{ width: width + "%" }} className="fixed h-[3px] bg-primary"></div>
    )
}