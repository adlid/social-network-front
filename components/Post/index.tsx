import React from "react";
import { IconButton, Paper, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Post.module.scss";

import Link from "next/link";
import { PostActions } from "../PostActions";
export const Post: React.FC = () => {
	return (
		<Paper elevation={0} className="p-20" classes={{ root: style.paper }}>
			<Typography variant="h5" className={style.title}>
				<Link href="/news/test-123 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A eos
					necessitatibus laudantium animi
				</Link>
			</Typography>
			<Typography className="mt-15 mb-15">
				L ad cupiditate, nostrum aliquid minima dolor omnis doloremque,
				laboriosam repellendus quis suscipit nam quia minus quisquam molestias.
				Porro eum totam ipsum necessitatibus culpa
			</Typography>
			<Image
				src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
				height={400}
				width={600}
			/>
			<PostActions/>
		</Paper>
	);
};
