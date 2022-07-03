import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material"
import { Comment } from "../Comment"

interface Comment {
    text:string;
    id:string|number;
    createdAt:string;
    user:{
        fullName:string;
        avatar: string;

    }
}

interface PostCommentsProps {
    items?: Comment[];
}

export const PostComments:React.FC<PostCommentsProps> =({items})=>{

    return( 
        <Paper elevation={0} className={"mt-40 p-30"}>
				<Typography className={"mb-20"} variant={"h6"}>
					{" "}
					10 Comments{" "}
				</Typography>

				<Tabs
					className="mt-20"
					value={0}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab label={"Популярные"} />
					<Tab label={"По прорядку"} />
				</Tabs>
				<Divider />
				<div className="mb-20" />
				{items.map(comment=>[
                    <Comment key={comment.id } user={comment.user } createdAt={comment.createdAt} text={comment.text}/>
                ])}
			</Paper>
    )
}