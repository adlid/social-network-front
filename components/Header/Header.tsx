import { Avatar, Button, IconButton, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CrateIcon from "@mui/icons-material/Create";
import {
	Message,
	Notifications,
	Menu,
	KeyboardArrowDown,
} from "@mui/icons-material";
import styles from "./Header.module.scss";
import Link from "next/link";
export const Header: React.FC = () => {
	return (
		<Paper classes={{ root: styles.root }} elevation={0}>
			<div className="d-flex align-center">
				<IconButton>
					<Menu />
				</IconButton>
				<Link href="/">
					<a>
						<span className={styles.logo}>logo</span>
					</a>
				</Link>

				<div className={styles.searchBlock}>
					<SearchIcon />
					<input placeholder="Search" />
				</div>
				<Link href="/write">
					<Button variant="contained" className={styles.penButton}>
						<CrateIcon />
					</Button>
				</Link>
			</div>
			<div className="d-flex align-center">
				<IconButton>
					<Message />
				</IconButton>
				<IconButton>
					<Notifications />
				</IconButton>
				<Link href="/profile/1">
					<a className="d-flex align-center">
						<Avatar
							className={`${styles.avatar}`}
							alt="Travis Howard"
							src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
						/>

						<KeyboardArrowDown />
					</a>
				</Link>
			</div>
		</Paper>
	);
};
