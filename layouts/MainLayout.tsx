import { LeftMenu } from "../components/LeftMenu";
import clsx from "clsx";
import React from "react";
import { Header } from "../components/Header/Header";
import { SideComments } from "../components/SideComments";

interface MainLayoutProps {
	hideComments?: boolean;
	contentFullWidth?: boolean;
	children?: any;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	contentFullWidth,
	hideComments,
}) => {
	return (
		<>
			<Header />
			<div className="wrapper">
				<div className="leftside">
					<LeftMenu />
				</div>
				<div className={clsx("content", { "content--full": contentFullWidth })}>
					{children}
				</div> 
				{!hideComments && (
					<div className="rightside">
						<SideComments />
					</div>
				)}
			</div>
		</>
	);
};
