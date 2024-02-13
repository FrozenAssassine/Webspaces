import styles from "./BlogCode.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    code: string | string[];
    language: string;
};

export default function BlogCode(props: Props) {
    return (
        <div className={styles.wrapper}>
            <SyntaxHighlighter line style={atomDark} language={props.language}>
                {props.code}
            </SyntaxHighlighter>
        </div>
    );
}
