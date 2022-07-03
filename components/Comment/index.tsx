import React from "react";
import {Button, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import styles from "./Comment.module.scss";

interface CommentPostProps {
	user?: {
		fullName: string;
	};
	text?: string;
	createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({
	user,
	text,
	createdAt
}) => {

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickRemove = async () => {

	};

	return (
		<div className={styles.comment}>
			<div className={styles.userInfo}>
				<img src={""} />
				<b>Master Ooqway</b>
				<span> {createdAt }</span>
			</div>
			<Typography className={styles.text}>
				I love penises Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nisi repudiandae sapiente tempora! Animi beatae error eum illum labore magni i love dicks minima officiis quas. Accusamus doloribus ex facilis mollitia nisi odit.
			</Typography>
			<span className={styles.replyBtn}>
				Ответить
			</span>
			<IconButton onClick={handleClick}>
				<MoreHorizOutlinedIcon/>
			</IconButton>
			<Menu id="simple-menu"
				  elevation={3}
				  keepMounted
				  open={Boolean(anchorEl)}
				  onClose={handleClose}
				  anchorEl={anchorEl}
			>
				<MenuItem onClick={handleClickRemove} >I love dicks</MenuItem>
				<MenuItem onClick={handleClose} >I love huyiiiii</MenuItem>
			</Menu>
		</div>
	);
};
