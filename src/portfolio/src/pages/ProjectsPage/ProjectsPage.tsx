import React from "react";
import styles from "./ProjectsPage.module.scss";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

function ProjectsPage() {
    return (
        <div className={styles.projectspage}>
            <ProjectItem
                headline="Fastedit"
                content="Fastedit is designed to make editing and organizing your documents effortless. With the ability to open multiple tabs, multiple documents can be easily edited or viewed at once. Line numbering and custom designs are also featured to personalize your experience. Your work is saved and opens up exactly as you left it with the session snapshot feature. Additionally, editing code is made easy with syntax highlighting. Plus, important work is never lost with the ability to recover deleted files from the recycle bin. It uses TextControlBox as its core component. Through this project I learned how to handle a large codebase and how to stay patient even when I had to face many problems."
                imageURL="./assets/fastedit_banner.jpg"
                buttons={[
                    { text: "Github", url: "https://github.com/FrozenAssassine/Fastedit", icon: "mdi:github" },
                    { text: "Website", url: "http://fastedit.frozenassassine.de/", icon: "iconoir:internet" },
                    {
                        text: "Store",
                        url: "https://apps.microsoft.com/store/detail/fastedit/9NTQ53W18DPW?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab",
                        icon: "fluent:store-microsoft-16-filled",
                    },
                ]}
                tags={["C#", "UWP"]}
            ></ProjectItem>
            <ProjectItem
                headline="Ease Pass"
                content="Ease Pass is a simple password manager designed to streamline password management. With this application, you can conveniently store, edit, and organize your passwords securely. The project is a work in progress, focusing on providing a user-friendly interface to save and manage passwords, and future enhancements are underway to further enhance its capabilities. Through this project, I learned about secure data management and encryption techniques."
                imageURL="./assets/easepass_banner.png"
                buttons={[
                    {
                        text: "Github",
                        url: "https://github.com/FrozenAssassine/easepass",
                        icon: "mdi:github",
                    },
                    { text: "Website", url: "http://easepass.frozenassassine.de/", icon: "iconoir:internet" },
                                        {
                        text: "Store",
                        url: "https://apps.microsoft.com/store/detail/ease-pass/9NQPF80923F5?hl=en-us&gl=us&ocid=pdpshare",
                        icon: "fluent:store-microsoft-16-filled",
                    },
                ]}
                tags={["C#", "WINUI3"]}
            ></ProjectItem>
            <ProjectItem
                headline="TextControlBox"
                content="TextControlBox is a powerful textbox that supports syntax highlighting, line numbering, line highlighter and can handle large amounts of text with ease. It is designed to be fast and efficient by rendering only the lines that are needed to display. You can also create custom syntax highlighting using JSON. Through this project I learned the importance of writing fast and efficient code, how to use GitHub to structure my projects and how a textbox under the hood exactly works."
                imageURL="./assets/textcontrolbox_banner.jpg"
                buttons={[
                    {
                        text: "Nuget",
                        url: "https://www.nuget.org/packages/TextControlBox.JuliusKirsch",
                        icon: "simple-icons:nuget",
                    },
                    {
                        text: "Github",
                        url: "https://github.com/FrozenAssassine/TextControlBox-UWP",
                        icon: "mdi:github",
                    },
                ]}
                tags={["C#", "UWP"]}
            ></ProjectItem>
            <ProjectItem
                headline="Voice Assistant"
                content="This project is a voice assistant that can perform various tasks such as saying the time, searching Wikipedia, telling jokes and telling the date. It works by using speech recognition to convert audio into text and then processing that text to determine what action to take. The assistant uses several Python libraries including SpeechRecognition, PyAudio, pyttsx3, and NLTK. Through this project, I learned how to use machine learning algorithms to create intelligent applications that can understand natural language and perform tasks based on the given input."
                imageURL="./assets/voiceassistant_banner.jpg"
                buttons={[
                    { text: "Github", url: "https://github.com/FrozenAssassine/VoiceAssistant", icon: "mdi:github" },
                ]}
                tags={["Python", "Neuronal Network"]}
            ></ProjectItem>
            <ProjectItem
                headline="Juli"
                content="Juli is my own programming language. It is an interpreted language that follows the syntax of Python in some ways. Juli has three main components: a lexer, a parser, and an interpreter. The lexer takes the source code and converts it into tokens, which are then passed to the parser. The parser understands the structure described by the tokens and builds them into a syntax tree. Finally, the interpreter uses the syntax tree to execute the program. Through this project I learned how a programming language works and how the process from written code to actual instructions works."
                imageURL="./assets/juli_banner.jpg"
                buttons={[
                    {
                        text: "Github",
                        url: "https://github.com/FrozenAssassine/Juli-ProgrammingLanguage",
                        icon: "mdi:github",
                    },
                ]}
                tags={["C#", "Console"]}
            ></ProjectItem>
        </div>
    );
}

export default ProjectsPage;
