import { messages } from "@/data/data";

export function getRandomMessage() {
  const randomIndex = Math.floor(
    Math.random() * messages.length
  );
  return messages[randomIndex];
}
