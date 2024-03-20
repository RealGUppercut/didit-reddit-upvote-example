import { PostList } from "../components/PostList";

export default async function Home() {
  try {
    return <PostList />;
  } catch (error) {
    console.error("NOT WORKING");
  }
}
