import { useRouter } from "./router.jsx";
import TodoList from "./pages/TodoList.jsx";
import TodoDetail from "./pages/TodoDetail.jsx";
import Toast from "./components/Toast.jsx";

export default function App() {
  const { path } = useRouter();
  const match = path.match(/^\/todo\/(\d+)\/?$/);

  return (
    <>
      {match ? <TodoDetail id={Number(match[1])} /> : <TodoList />}
      <Toast />
    </>
  );
}