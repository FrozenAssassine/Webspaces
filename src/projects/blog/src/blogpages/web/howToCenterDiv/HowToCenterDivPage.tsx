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
                    "To center a div in html and css we need the flexbox. Flexbox is a CSS layout model that enables easy alignment and distribution of elements within a container."
                }
            />
            <BlogText margin="20px 0 0 0" text={"First we have to make a container. To do so we simply create a div with a class. Everything inside the div will be aligned as we define it later in the css."}/>
            <BlogCode code="<div class='center'></div>" language="html" />

            <BlogText margin="20px 0 0 0" text={"For the beginning let's just center a text on our page. We simply put the text inside our div."}/>
            <BlogCode code="<div class='center'>This text is centered</div>" language="html" />
        
            <BlogText margin="20px 0 0 0" text={"Currently nothing will happen, this is because don't have any css written. Lets start by "}/>
            <BlogCode code={[".center {", "display: flex;", "Baum"]} language="css" />

        </BlogPage>
    );
}
