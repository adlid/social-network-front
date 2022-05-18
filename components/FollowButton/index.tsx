import React, { useState } from "react";
import {
	ModeCommentOutlined,
	AddOutlined,
	CheckOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
export const FollowButton: React.FC = () => {
	const [followed, setFollowed] = useState(false);
	return (
		<Button
			variant="contained"
			onClick={() => {
				setFollowed(!followed);
			}}
			style={{ minWidth: 30, width: 35, height: 30 }}
		>
			{!followed ? (
				<AddOutlined />
			) : (
				<CheckOutlined style={{ color: "#2ea83a", fontSize: 20 }} />
			)}
		</Button>
	);
};
