import { useState } from "react";
import { MessageContent } from "./Chat";

export function Message(props: {
  message: MessageContent;
  setConversation: React.Dispatch<React.SetStateAction<MessageContent[]>>;
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div
        className={`d-flex flex-column ${
          props.message.from === "user"
            ? "justify-content-end align-items-end"
            : "justify-content-start align-items-start"
        }`}
      >
        <button
          className={`card d-flex my-2 col-10 col-sm-19 col-md-8 ${
            props.message.from === "user"
              ? "align-items-end bg-primary bg-opacity-10 border border-primary"
              : "align-items-start"
          } `}
          onClick={() => setIsClicked(!isClicked)}
        >
          <p className="card-text p-2">{props.message.text}</p>
        </button>
        <span className="fs-6 text-secondary">
          {props.message.sent.toLocaleTimeString()}
        </span>
        {isClicked ? (
          <div>
            <button
              className="btn btn-sm btn-danger m-1"
              onClick={() => {
                props.setConversation((prevState) =>
                  prevState.filter((item) => item.index !== props.message.index)
                );
                setIsClicked(false);
              }}
            >
              Delete message
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
