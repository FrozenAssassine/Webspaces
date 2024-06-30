import React from 'react';
import styles from './SkillsPage.module.scss';
import SkillItem from '../../components/SkillsItem/SkillItem';

function SkillsPage() {
  return (
    <div className={styles.skillpage}>
      <div className={styles.headline}>General</div>
        <div className={styles.items}>
            <SkillItem infotext='One of my most fluent languages' icon="devicon:csharp" headline="C#"></SkillItem>
            <SkillItem infotext='A fascinating language for AI development' icon="devicon:python" headline="Python"></SkillItem>
            <SkillItem infotext='I only learned this for school' icon="devicon:java" headline="Java"></SkillItem>
            <SkillItem infotext='A cool language for android development' icon="devicon:kotlin" headline="Kotlin"></SkillItem>
            <SkillItem infotext='One of the harder languages I tried' icon="vscode-icons:file-type-cpp3" headline="C++"></SkillItem>
        </div>
        <div className={styles.headline}>Web</div>
        <div className={styles.items}>
            <SkillItem infotext='One of the coolest webframeworks I ever learned' icon="devicon:react" headline="React"></SkillItem>
            <SkillItem infotext="A simple webframework and the first I've learned" icon="vscode-icons:file-type-vue" headline="Vue"></SkillItem>
            <SkillItem infotext='Yeah its HTML right?' icon="vscode-icons:file-type-html" headline="HTML"></SkillItem>
            <SkillItem infotext='Well its CSS and its just awesome' icon="vscode-icons:file-type-css" headline="CSS"></SkillItem>
            <SkillItem infotext='Who uses Javascript, when there is Typescript' icon="devicon:typescript" headline="Typescript"></SkillItem>
        </div>
        <div className={styles.headline}>Tools & Software</div>
        <div className={styles.items}>
            <SkillItem infotext='A powerful IDE for C# development' icon="logos:visual-studio" headline="Visual Studio"></SkillItem>
            <SkillItem infotext='The coolest and most useful IDE ever made' icon="logos:visual-studio-code" headline="VSCode"></SkillItem>
            <SkillItem infotext='One of the craziest engines I ever used' icon="mdi:unreal-engine" headline="Unreal Engine"></SkillItem>
            <SkillItem infotext='A cool engine for the beginning' icon="mdi:unity" headline="Unity"></SkillItem>
            <SkillItem infotext='Need it fast, make it parallel :D' icon="vscode-icons:file-type-cuda" headline="CUDA"></SkillItem>
        </div>
    </div>
  );
}

export default SkillsPage;