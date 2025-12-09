import { Database, Code, Server, BookOpen } from "lucide-react";
import TopicsGridPresentational from "./TopicsGridPresentational";
import type { ReactElement } from "react";

export type Topic = {
	id: number;
	name: string;
	icon: ReactElement<any, any>
	wordCount: number;
}

function TopicsGridContainer() {
	// Mock topics data
	const topics: Topic[] = [
		{ id: 1, name: 'Database', icon: <Database />, wordCount: 42 },
		{ id: 2, name: 'Programming', icon: <Code />, wordCount: 68 },
		{ id: 3, name: 'DevOps', icon: <Server />, wordCount: 35 },
		{ id: 4, name: 'Frontend', icon: <BookOpen />, wordCount: 54 },
		{ id: 5, name: 'Backend', icon: <Server />, wordCount: 47 },
		{ id: 6, name: 'Network', icon: <Code />, wordCount: 29 }
	];

	return <TopicsGridPresentational topics={topics}/>
}

export default TopicsGridContainer;