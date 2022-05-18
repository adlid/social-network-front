import React from "react";
import {
	ModeCommentOutlined,
	BookmarkBorderOutlined,
	PublishOutlined,
	ReplyAllOutlined,
	RepeatOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CSSProperties } from "react";


const styles:CSSProperties = {
    'display':'flex',
	'listStyle': 'none',
	'padding': '0',
	'margin': '0', 
	'justifyContent': 'space-between',
	'position': 'relative',
	'top':  '5'
}

export const PostActions: React.FC = () => {
	return (
		<ul style={styles}> 
			<li>
				<IconButton>
					<ModeCommentOutlined />
				</IconButton>
			</li>
			<li>
				<IconButton>
					<RepeatOutlined />
				</IconButton>
			</li>
			<li>
				<IconButton>
					<BookmarkBorderOutlined />
				</IconButton>
			</li>
			<li>
				<IconButton>
					<PublishOutlined />
				</IconButton>
			</li>
		</ul>
	);
};
