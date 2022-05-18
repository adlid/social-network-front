import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link";
import { Avatar } from "@mui/material";

interface CommentItemProps {
	user?: any;
	text?: string;
	post?: any;
}

export const CommentItem: React.FC<CommentItemProps> = ({
	user,
	text,
	post,
}) => {
	return (
		<div className={styles.commentItem}>
			<div className={styles.userInfo}>
				<Avatar style={{ marginRight: 10 }}>John Name</Avatar>
				<Link href={`/profile/1`}>
					<a>
						<b>John Name</b>
					</a>
				</Link>
			</div>
			<p className={styles.text}>Hello wewes</p>
			<Link href={`/news/1`}>
				<a>
					<span className={styles.postTitle}>Hello wewes</span>
				</a>
			</Link>
		</div>
	);
};
