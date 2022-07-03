import React from "react";
import {Button, Paper, Typography} from "@mui/material";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
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
                    <div style={{width:500, marginLeft:"-14px"}}>
                        <PostActions />
                    </div>
                    <div className={"d-flex justify-between align-center mt-30 mb-30"}>
						<div className={style.userInfo}>
							<img style={{width:40, height:40}} src=""/>
							<b> Danial Sovetov</b>
							<span> +2031</span>
						</div>
						<div >
							<Button className={"mr-15"} variant={"contained"}>
								<MessageOutlinedIcon/>
							</Button>
							<Button variant={"contained"}>
								<PersonAddAltOutlinedIcon/>
								<b className={"ml-10"}>Follow</b>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Paper>
	);
}
