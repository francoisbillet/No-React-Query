import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="p-2">
      <div className="flex gap-2">All posts</div>
      <hr className="border-gray-600 my-1" />
      <main>
        <Posts />
      </main>
    </div>
  );
}

export default App;
