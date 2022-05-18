import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import style from "./LeftMenu.module.scss";
import {
	Whatshot,
	Message,
	TrendingUp,
	FormatListBulleted,
} from "@mui/icons-material";
import Link from "next/link";

const menu = [
	{ text: "Lenta", icon: <Whatshot />, path: "/", id: 1 },
	{ text: "Message", icon: <Message />, path: "/messages", id: 2 },
	{ text: "Rating TJ", icon: <TrendingUp />, path: "/rating", id: 3 },
	{ text: "List", icon: <FormatListBulleted />, path: "/follows", id: 4 },
];

export const LeftMenu: React.FC = () => {
	return (
		<div className={style.menu}>
			<ul>
				{menu.map((item: any) => (
					<li key={item.id}>
						<Link href={item.path}>
							<Button>
								{item.icon}
								{item.text}
							</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
