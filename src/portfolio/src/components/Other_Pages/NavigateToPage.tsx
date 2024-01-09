import { useEffect } from "react";

type Props = {
    url: string
}

export default function NavigateToPage(props: Props) {
    useEffect(() => {
        window.location.href = props.url;
    }, []);
    return null;
};