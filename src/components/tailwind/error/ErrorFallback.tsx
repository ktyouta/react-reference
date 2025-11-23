import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export function ErrorFallback() {
    
  return (
    <div className="w-screen h-screen text-white text-xl text-center p-5 box-border">
      <div className="h-[87%] flex items-center justify-center">
        <div>
          <FaExclamationTriangle size={30} />
          <div className="mt-2 text-lg">
            エラーが発生しました
          </div>
        </div>
      </div>

      <div className="h-[13%] flex items-center justify-center gap-2 text-blue-500">
        <FaHome size={20} />
        <span
          className="cursor-pointer underline text-[20px] hover:opacity-80"
          onClick={() => window.location.assign(window.location.origin)}
        >
          ホームに戻る
        </span>
      </div>
    </div>
  );
}
