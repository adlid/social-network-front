import React from "react";
import { IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import styles from "./CommentPost.module.scss";

interface CommentPostProps {
	user?: {
		fullname: string;
	};
	text?: string;
	post?: {
		title?: string;
	};
}

export const CommentPost: React.FC<CommentPostProps> = ({
	user,
	post,
	text,
}) => {
	return (
		<Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
			<Typography variant="h6" className={styles.title}>
				<a href="#">{post.title}</a>
				<IconButton>
					<MoreVert />
				</IconButton>
			</Typography>
			<Typography className="mt-10 mb-15">{text}</Typography>

			<Menu id="simple-menu" elevation={3} keepMounted open={Boolean(false)}>
				<MenuItem>Удалить</MenuItem>
				<MenuItem>Редактировать</MenuItem>
			</Menu>
		</Paper>
	);
};
