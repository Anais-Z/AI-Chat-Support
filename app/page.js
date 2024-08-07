
"use client"


import { useState } from "react";
import { Box, Modal, Stack, TextField, Typography, Button, List } from "@mui/material";

export default function Home() {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "Hi, I'm the customer support assistant. How can I help you today?"
  }])

  return (
    <Box
    width="100vw"
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end">

      <Stack direction={'column'}>
        <Stack direction={"column"} spacing={2}>
          {
            messages.map( (message, index) => (
              <Box
                keys={index}
                display="flex"
                justifyContent={message.role == 'assistant' ? 'flex-start' : 'flex-end'}
              >
                <Box
                bgcolor={message.role == 'assistant' ? 'primary.main' : 'secondary.main'}
                color = "white"
                borderRadius={16}
                p={2}
                >
                  {message.content}
                </Box>

              </Box>
            ))
          }
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <TextField label="Message" fullWidth/>
          <Button variant="contained"> Send</Button>
        </Stack>
      </Stack>

    </Box>
  );
}
