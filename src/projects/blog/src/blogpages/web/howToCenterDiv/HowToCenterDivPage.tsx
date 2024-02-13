import BlogCode from "../../../components/blogCode/BlogCode";
import BlogHeadline from "../../../components/blogHeadline/BlogHeadline";
import BlogPage from "../../../components/blogPage/BlogPage";
import BlogText from "../../../components/blogText/BlogText";
import styles from "./HowToCenterDivPage.module.scss";

export default function HowToCenterDivPage() {
    return (
        <BlogPage headline="How to center a div" subheadline="How to center a div in HTML and CSS">
            <BlogHeadline text={""} />
            <BlogText
                text={
                    "To center a div in HTML and CSS, we need the flexbox. Flexbox is a CSS layout model that enables easy alignment and distribution of elements within a container."
                }
            />
            <BlogText margin="20px 0 0 0" text={"First, we have to make a container. To do so, we simply create a div with a class. Everything inside the div will be aligned as we define it later in the CSS."}/>
            <BlogCode code="<div class='center'></div>" language="html" />

            <BlogText margin="20px 0 0 0" text={"For the beginning, let's just center a text on our page. We simply put the text inside our div."}/>
            <BlogCode code="<div class='center'>This text is centered</div>" language="html" />
        
            <BlogText margin="20px 0 0 0" text={"Currently nothing will happen because we don't have any CSS. So to actually center the text, we will write the following:"}/>
            <BlogCode code={[".center {", "\tdisplay: flex;", "\talign-items: center;", "\tjustify-content: center;", "}"]} language="css" />
            <BlogText text={"Let's see what we have here line by line. At first, we have the 'display: flex', which only says that our div acts now as a flexbox. After that, we have 'align-items: center' which aligns all the children of our div at the vertical center. At last, we have 'justify-content: center' which aligns all the items at the horizontal center. That's all."}/>
            <BlogText margin="20px 0 50px 0"  text="Sometimes it can happen that your element is not centering. This may be because you forgot to specify any width and height in your parent container."/>
            
            <BlogHeadline text={"Demo of a centered div"}/>
            <div className={styles.demoContainer}>
                This text is centered
            </div>

        </BlogPage>
    );
}

