import { useNavigate } from "react-router-dom";

// 404 페이지
function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>404</h1>
      <p>페이지를 찾을 수 없어요.</p>
      <button onClick={() => navigate("/")}>홈으로</button>
    </main>
  );
}

export default NotFound;
