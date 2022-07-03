import FullPost from "../../components/FullPost";
import { MainLayout } from "../../layouts/MainLayout";
import { Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Comment } from "../../components/Comment/index";
import { PostComments } from "../../components/PostComments";
export default function Home() {
	return (
		<MainLayout className={"mb-50"} contentFullWidth>
			<FullPost />
			<PostComments />
		</MainLayout>
	);
}
