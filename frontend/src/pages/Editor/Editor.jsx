import { lazy, Suspense } from "react";
import Loading from "../../components/Loading";
import EditPageError from "../../components/EditPageError";

// import EditingPage from "./EditingPage";
const EditingPage = lazy(() => import("./EditingPage"));

function Editor() {
  return (
    <div className="relative min-h-screen con  z-10 flex justify-center items-center flex-col pt-28">
      <Suspense fallback={<Loading />}>
        <EditPageError />
        <EditingPage />
      </Suspense>
    </div>
  );
}
export default Editor;
