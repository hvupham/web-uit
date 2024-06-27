import {
  Flex,
  Image,
  Box,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

export default function ChatForm({ handleCloseBubble }) {
  const mess = [
    {
      id: 1,
      text: "Tôi có thể giúp gì cho bạn?",
      isBot: true,
    },
    {
      id: 2,
      text: "...?",
      isBot: false,
    },
  ];

  const [messages, setMessages] = useState(mess);

  const handleSendMessage = async () => {
    const response = await fetch("http://localhost:8080/engine/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "hello" }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Box
      bg="white"
      rounded="xl"
      border={"1px solid"}
      borderColor={"gray.300"}
      borderRadius={4}
      p={5}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="50px"
            src="chatbot.png"
            alt="chat bot"
          />
          <h3>Chatbot</h3>
        </Flex>
      </Flex>

      <Box>
        {messages.map((message) => (
          <Box
            key={message.id}
            padding="10px"
            bg={message.isBot ? "gray.100" : "blue.100"}
            borderRadius="10px"
            margin="10px 0px"
          >
            {message.text}
          </Box>
        ))}
      </Box>

      <FormControl onSubmit={handleSendMessage}>
        <Flex alignItems="center">
          <Input placeholder="Nhập câu hỏi của bạn..." type="text" />
          <Button colorScheme="blue" size="sm" margin="0px 0px 0px 5px">
            Gửi
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}

const CloseChatBot = ({ handleCloseBubble }) => (
  <Image
    onClick={handleCloseBubble}
    borderRadius="full"
    boxSize="25px"
    src="./closeBtn.svg"
    alt="chat bot"
  />
);
