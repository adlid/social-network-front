import { Button, Input, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

import styles from "./WriteForm.module.scss";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
	ssr: false,
});

interface WriteFormProps {
	title: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
	return (
		<div style={{ backgroundColor: "#fff" }}>
			<Input
				classes={{ root: styles.titleField }}
				placeholder="Загаловок"
				defaultValue={title}
			/>
			<div className={styles.editor}>
				dss
				<Editor />
			</div>
			<Button variant="contained" color="primary">
				Опубликовать
			</Button>
		</div>
	);
};
