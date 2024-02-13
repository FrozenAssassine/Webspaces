import styles from "./BlogCode.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
    code: string | string[];
    language: string;
};

export default function BlogCode(props: Props) {
    const codeToDisplay = Array.isArray(props.code) ? props.code.join("\n") : props.code;

    return (
        <div className={styles.wrapper}>
            <SyntaxHighlighter style={atomDark} language={props.language}>
                {codeToDisplay}
            </SyntaxHighlighter>
        </div>
    );
}
