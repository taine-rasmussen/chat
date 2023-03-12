import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from "react-chat-engine-advanced"
import Header from "@/components/customHeader";
import StandardMessageForm from '@/components/customMessageForm/StandardMessageForm'
import Ai from "@/components/customMessageForm/Ai";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    'koiosreet',
    '1234'
  );
  return (
    <div style={{ flexBasis: '100%' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: '100vh' }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {

          if (chatProps.chat?.title.startsWith('AiChat_')) {
            return <Ai props={props} activeChat={chatProps.chat} />
          }

          return (
            // <StandardMessageForm props={props} activeChat={chatProps.chat} />
            's'
          )
        }}
      />
    </div>
  )
}

export default Chat
