import React from 'react';
import "@radix-ui/themes/styles.css";
import { Flex, Text, Section, Box } from "@radix-ui/themes";
const Timer = () => {
    return (

    <>
    <Flex direction="row" p="2" justify="center" align="center">
    <Flex p="2" direction="column">
      <Text size="5">Study</Text>
      {/* TODO turn the box into a card so i can style it later */}
      <Box height="150px" width="300px" align="center" p="8">
        <Text size="9" weight="medium">
          00:00
        </Text>
      </Box>
    </Flex>
    </Flex>
    </>
  
    );
};

export default Timer;