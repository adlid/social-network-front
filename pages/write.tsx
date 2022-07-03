import { TextField } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { WriteForm } from "../components/WhiteForm";
import { MainLayout } from "../layouts/MainLayout";

const WritePage: NextPage = () => {
	return (
		<MainLayout className="main-layout-white" hideMenu hideComments>
			<WriteForm title="Write " />
		</MainLayout>
	);
};

export default WritePage;
