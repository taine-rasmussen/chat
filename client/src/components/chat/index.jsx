import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from "react-chat-engine-advanced"

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    'koiosreet',
    '1234'
  );




  return (
    <div>
      Cjat os wprlom
    </div>
  )
}

export default Chat
