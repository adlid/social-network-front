import { LeftMenu } from "../components/LeftMenu";
import clsx from "clsx";
import React from "react";
import { Header } from "../components/Header/Header";
import { SideComments } from "../components/SideComments";

interface MainLayoutProps {
	hideComments?: boolean;
	contentFullWidth?: boolean;
	hideMenu?:boolean
	children?: any;
	className?:string
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	contentFullWidth,
	hideComments,
	hideMenu,
	className
}) => {
	return (
		<>
			<Header />
			<div className={clsx("wrapper", className)}>
				{!hideMenu && <div className="leftSide">
					<LeftMenu />
				</div>}
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
