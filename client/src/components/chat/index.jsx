import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from "react-chat-engine-advanced"
import Header from "@/components/customHeader";
import StandardMessageForm from '@/components/customMessageForm/StandardMessageForm'

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
          return (
            <StandardMessageFrom props={props} activeChat={chatProps.chat} />
          )
        }}
      />
    </div>
  )
}

export default Chat
