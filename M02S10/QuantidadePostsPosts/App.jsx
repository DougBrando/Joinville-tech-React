import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
import PostsList from "../PostsList";
import PostProvider from "../PostsProvider";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<PostProvider>
			<PostsList />
		</PostProvider>
	</StrictMode>,
);
