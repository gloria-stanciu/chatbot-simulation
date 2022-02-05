export interface Response {
  keyWords: string[];
  text: string;
}

export const chatbotResponses: Response[] = [
  {
    keyWords: ["hi", "hello", "good morning", "good afternoon", "hey"],
    text: "Hello, what can I help you with?",
  },
  {
    keyWords: ["bye", "good bye", "good night"],
    text: "Bye, bye! ",
  },
  {
    keyWords: ["thank you", "thanks"],
    text: `You're welcome! That's why I'm here!`,
  },
  {
    keyWords: ["problem", "issue", "misunderstanding"],
    text: "Tell me more about what problem you are facing.",
  },
];
