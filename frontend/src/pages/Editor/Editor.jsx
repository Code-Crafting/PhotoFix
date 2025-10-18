import { lazy, Suspense } from "react";
import Loading from "../../components/Loading";

// import EditingPage from "./EditingPage";
const EditingPage = lazy(() => import("./EditingPage"));

function Editor() {
  return (
    <div className="relative min-h-screen con  z-10 flex justify-center items-center flex-col pt-28">
      <Suspense fallback={<Loading />}>
        <EditingPage />
      </Suspense>
    </div>
  );
}
export default Editor;
