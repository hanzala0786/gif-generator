import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="flex flex-col w-screen h-full overflow-x-hidden background">
      <h1 className="w-11/12 py-2 mx-auto mt-6 text-3xl font-semibold text-center bg-white rounded-lg">Random GIF</h1>
      <div>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
