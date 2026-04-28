// 채팅 메시지 한 개의 타입
export interface Message {
  role: "user" | "assistant"; // 보낸 사람 구분
  content: string; // 메시지 내용
}
