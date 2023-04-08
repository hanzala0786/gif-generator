
import Spinner from './Spinner'
import useGif from "../hooks/useGif";

export default function Random(tag) {
 
  const {gif, loading, fetchData} = useGif(tag);
  return (
    <div className="flex flex-col items-center w-11/12 sm:w-1/2 mx-auto mt-6 bg-green-500 border border-gray-500 rounded-lg gap-y-5">
      <h2 className="mt-4 text-2xl font-semibold underline uppercase">A Random Gif</h2>
      {
        loading? (<Spinner/>) : (<img src={gif} alt="" width="450px" />)
      }
      <button className="w-10/12 py-2 mb-6 font-semibold uppercase bg-yellow-100 rounded-lg"
        onClick={() => fetchData(tag)}>
        Generate
      </button>
    </div>
  );
}
