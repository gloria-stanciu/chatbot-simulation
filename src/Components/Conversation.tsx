import { MessageContent } from "./Chat";
import { Message } from "./";

export function Conversation(props: {
  conversation: MessageContent[];
  isWaiting: boolean;
  setConversation: React.Dispatch<React.SetStateAction<MessageContent[]>>;
}) {
  return (
    <div className="conversation-container" style={{ overflowY: "scroll" }}>
      {props.conversation.length
        ? props.conversation.map((message) => (
            <Message
              key={message.index}
              message={message}
              setConversation={props.setConversation}
            ></Message>
          ))
        : null}
      {props.isWaiting ? (
        <div className="container mx-2 my-5">
          <div className="loader" />
        </div>
      ) : null}
    </div>
  );
}
