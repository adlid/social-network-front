import React from "react";
import { Paper, Typography } from "@mui/material";

import style from "./FullPost.module.scss";
import { PostActions } from "../PostActions";

export default function FullPost() {
	return (
		<Paper elevation={0} className={style.paper}>
			<div style={{ margin: "0 auto ", width: 680 }}>
				<Typography variant="h4" className={style.title}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi
					optio sed quos fugit, neque animi vel quisquam
				</Typography>
				<div>
					<Typography>
						Ex error a distinctio deleniti vitae consectetur dolor! Sapiente,
						deserunt. Numquam, cumque et? Ex temporibus in eligendi, omnis
						tempora alias, tenetur suscipit distinctio hic nihil magnam dolorem
						corporis ab dolorum! Eligendi, non, hic, optio similique nostrum
					</Typography>
					<Typography>
						Atque odit excepturi, aliquid corrupti voluptate nostrum dolorem
						molestiae culpa iure maiores obcaecati, iusto accusantium earum
						repellendus laborum illum quae fugit voluptas.
					</Typography>
					<Typography>
						Numquam, cumque et? Ex temporibus in eligendi, omnis tempora alias,
						tenetur suscipit distinctio hic nihil magnam dolorem corporis ab
						dolorum! Eligendi, non, hic, optio similique nostrum dolor impedit
						delectus nam repellendus amet nesciunt! Lorem, ipsum dolor sit amet
						consectetur adipisicing elit.
					</Typography>
                    <div style={{width:500}}>
                        <PostActions />
                    </div>
                    <div className={"userInfo"}>
                        <img style={{width:40, height:40}} src=""/>
                        <b> Danial Sovetov</b>
                        <span> +2031</span>
                    </div>
				</div>
			</div>
		</Paper>
	);
}
