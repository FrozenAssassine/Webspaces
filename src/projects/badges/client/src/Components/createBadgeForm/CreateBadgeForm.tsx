import React, { useState } from "react";
import styles from "./CreateBadgeForm.module.scss"; // Import your CSS module

interface createBadgeFormData {
    bday: string;
    clr: string;
    ff: string;
    bg: string;
    fs: number;
    suf: string;
    pref: string;
}

interface CreateBadgeFormProps {
    onSubmit: (data: createBadgeFormData) => void;
}

const CreateBadgeForm: React.FC<CreateBadgeFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<createBadgeFormData>({
        bday: "",
        clr: "ff0000",
        ff: "",
        fs: 12,
        suf: "",
        pref: "",
        bg: "#00ffffff",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
                className={styles.input}
                type="date"
                id="bday"
                placeholder="Birthdate"
                name="bday"
                value={formData.bday}
                onChange={handleInputChange}
            />

            <input
                className={styles.input}
                type="color"
                id="clr"
                placeholder="Text color"
                name="clr"
                value={formData.clr}
                onChange={handleInputChange}
            />
            <input
                className={styles.input}
                type="color"
                id="bg"
                placeholder="Background Color"
                name="bg"
                value={formData.bg}
                onChange={handleInputChange}
            />
            <div className={styles.sideBySide}>
                <input
                    className={styles.input}
                    type="text"
                    id="ff"
                    placeholder="Font family"
                    name="ff"
                    value={formData.ff}
                    onChange={handleInputChange}
                />

                <input
                    className={styles.input}
                    type="number"
                    id="fs"
                    placeholder="Font size"
                    name="fs"
                    value={formData.fs}
                    onChange={handleInputChange}
                />
            </div>
            <input
                className={styles.input}
                type="text"
                id="suf"
                placeholder="Suffix"
                name="suf"
                value={formData.suf}
                onChange={handleInputChange}
            />

            <input
                className={styles.input}
                type="text"
                id="pref"
                placeholder="Prefix"
                name="pref"
                value={formData.pref}
                onChange={handleInputChange}
            />

            <button className={styles.submitButton} type="submit">
                Submit
            </button>
        </form>
    );
};

export default CreateBadgeForm;
export type { createBadgeFormData };
