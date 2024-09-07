import React from "react";
import styles from "./ProjectsPage.module.scss";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

function ProjectsPage() {
    return (
        <div className={styles.projectspage}>
                        <ProjectItem
                headline="Neural Network"
                content="This project is a neural network implementation from scratch in C# with CUDA support written in C++. It currently supports Optical Digit Recognition (ODR) trained with 60,000 images and can also perform XOR as a simple initial test. More complex image classification is in progress. I trained it with 2,000 RGB images of 150 x 150 pixels and achieved some initial results. I am very proud of the CUDA support, which was a challenging task, but with enough patience, it significantly speeds up training. Overall, this is one of the most interesting projects I have done so far, and I am committed to making it better, faster, and more efficient in learning. Through this project, I learned how CUDA works, how C++ and C# interact using DLLs, the mathematics behind neural networks, and how to write highly efficient parallel code for both CPU and GPU."
                imageURL="./assets/neuralnetwork.jpg"
                buttons={[
                    { text: "Github", url: "https://github.com/FrozenAssassine/NeuralNetwork-FromScratch", icon: "mdi:github" },
                ]}
                authors={[{name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["C#", "C++", "CUDA", "Neuronal Network", "AI"]}
            ></ProjectItem>
            <ProjectItem
                headline="QuickNav"
                content="QuickNav is a powerful Windows tool that simplifies multitasking with just a keystroke. By pressing Windows + Y, a search window pops up, allowing users to perform various tasks such as searching the web, finding files, running commands, calculate, get file information, create timers, and much more. It aims to make using Windows more powerful and efficient. Through this project I leanred how to intereact with windows apis, such as file search and get system informations and much more."
                imageURL="./assets/quicknav.png"
                buttons={[
                    {
                        text: "Store",
                        url: "https://apps.microsoft.com/detail/QuickNav/9N8KBW01WD62?hl=en-us&gl=us&ocid=pdpshare",
                        icon: "fluent:store-microsoft-16-filled",
                    },
                    {
                        text: "Github",
                        url: "https://github.com/FrozenAssassine/QuickNav",
                        icon: "mdi:github",
                    },
                    { text: "Website", url: "http://quicknav.frozenassassine.de/", icon: "iconoir:internet" },
                ]}
                tags={["C#", "WinUI3", "Windows", "Poweruser", "Utility"]}
                authors={[{name: "Finn Freitag", url: "https://finnfreitag.com"}, {name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
            ></ProjectItem>
                        <ProjectItem
                headline="Ease Pass"
                content="Ease Pass is a straightforward yet powerful password manager that makes managing your passwords easy and intuitive. With Ease Pass, you can securely store, edit, and organize all your passwords in one place. The app focuses on ease of use while keeping your data safe and accessible whenever you need it. Whether you're generating strong passwords, organizing your existing ones, or importing them from other sources, Ease Pass has you covered. Through this project, I learned about secure data management and encryption techniques."
                imageURL="./assets/easepass_banner.png"
                buttons={[
                    {
                        text: "Store",
                        url: "https://apps.microsoft.com/store/detail/ease-pass/9NQPF80923F5?hl=en-us&gl=us&ocid=pdpshare",
                        icon: "fluent:store-microsoft-16-filled",
                    },
                    {
                        text: "Github",
                        url: "https://github.com/FrozenAssassine/easepass",
                        icon: "mdi:github",
                    },
                    { text: "Website", url: "http://easepass.frozenassassine.de/", icon: "iconoir:internet" },
                ]}
                authors={[{name: "Finn Freitag", url: "https://finnfreitag.com"}, {name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["C#", "WINUI3", "Security", "Password Manager"]}
            ></ProjectItem>
            <ProjectItem
                headline="Fastedit"
                content="Fastedit is designed to make editing and organizing your documents effortless. With the ability to open multiple tabs, multiple documents can be easily edited or viewed at once. Line numbering and custom designs are also featured to personalize your experience. Your work is saved and opens up exactly as you left it with the session snapshot feature. Additionally, editing code is made easy with syntax highlighting. Plus, important work is never lost with the ability to recover deleted files from the recycle bin. It uses TextControlBox as its core component. Through this project I learned how to handle a large codebase and how to stay patient even when I had to face many problems."
                imageURL="./assets/fastedit_banner.jpg"
                buttons={[
                    {
                        text: "Store",
                        url: "https://apps.microsoft.com/store/detail/fastedit/9NTQ53W18DPW?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab",
                        icon: "fluent:store-microsoft-16-filled",
                    },
                    { text: "Github", url: "https://github.com/FrozenAssassine/Fastedit", icon: "mdi:github" },
                    { text: "Website", url: "http://fastedit.frozenassassine.de/", icon: "iconoir:internet" },
                ]}
                authors={[{name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["C#", "UWP", "Texteditor"]}
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
                authors={[{name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["C#", "UWP", "Textbox", "Syntaxhighlighting", "Linenumbering"]}
            ></ProjectItem>
            <ProjectItem
                headline="Voice Assistant"
                content="This project is a voice assistant that can perform various tasks such as saying the time, searching Wikipedia, telling jokes and telling the date. It works by using speech recognition to convert audio into text and then processing that text to determine what action to take. The assistant uses several Python libraries including SpeechRecognition, PyAudio, pyttsx3, and NLTK. Through this project, I learned how to use machine learning algorithms to create intelligent applications that can understand natural language and perform tasks based on the given input."
                imageURL="./assets/voiceassistant_banner.jpg"
                buttons={[
                    { text: "Github", url: "https://github.com/FrozenAssassine/VoiceAssistant", icon: "mdi:github" },
                ]}
                authors={[{name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["Python", "Neural Network"]}
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
                authors={[{name: "Julius Kirsch", url: "https://frozenassassine.de"}]}
                tags={["C#", "Console", "Programming language"]}
            ></ProjectItem>
        </div>
    );
}

export default ProjectsPage;
