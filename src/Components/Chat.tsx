import { useState } from "react";
import { Conversation } from ".";
import { chatbotResponses } from "./chatbotResponses";

export interface MessageContent {
  index: number;
  sent: Date;
  from: "user" | "bot";
  text: string;
}

export function Chat() {
  const [conversation, setConversation] = useState<MessageContent[]>([]);
  const resetMessage: MessageContent = {
    index: conversation.length + 1,
    sent: new Date(),
    from: "user",
    text: "",
  };
  const [message, setMessage] = useState<MessageContent>(resetMessage);
  const [wait, setWait] = useState(false);

  function findResponse() {
    for (let response of chatbotResponses) {
      for (let keyword of response.keyWords) {
        if (message.text.toLowerCase().includes(keyword.toLowerCase())) {
          setConversation((prevState) => [
            ...prevState,
            {
              index: prevState.length + 1,
              sent: new Date(),
              from: "bot",
              text: response.text,
            },
          ]);
          setWait(false);
          return;
        }
      }
    }
    setConversation((prevState) => [
      ...prevState,
      {
        index: prevState.length + 1,
        sent: new Date(),
        from: "bot",
        text: `Sorry. I can't help you with this right now. Plese come back later.`,
      },
    ]);
    setWait(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const randomTime = Math.floor(Math.random() * 20) * 1000;
    if (message) {
      setConversation((prevState) => [
        ...prevState,
        {
          index: prevState.length + 1,
          sent: new Date(),
          from: message.from,
          text: message.text,
        },
      ]);
      setTimeout(() => findResponse(), randomTime);
      setMessage(resetMessage);
      setWait(true);
    }
  }

  return (
    <div className="container d-flex flex-column flex-grow-1 justify-content-end pb-5 overflow-hidden ">
      <Conversation
        conversation={conversation}
        isWaiting={wait}
        setConversation={setConversation}
      />
      <form
        className="d-flex flex-row gap-2 mt-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="form-control"
          value={message?.text}
          onChange={(e) =>
            setMessage({
              index: conversation.length + 1,
              sent: new Date(),
              from: "user",
              text: e.target.value,
            })
          }
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      <div className="col-2 d-flex align-self-end">
        <button
          className="container btn btn-danger my-1"
          onClick={() => {
            setConversation([]);
            setMessage(resetMessage);
            setWait(false);
          }}
        >
          Delete conversation
        </button>
      </div>
    </div>
  );
}
