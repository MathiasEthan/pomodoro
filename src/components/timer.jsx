import React from 'react';
import "@radix-ui/themes/styles.css";
import { Flex, Text, Heading, Card, Section,  } from "@radix-ui/themes";
const Timer = () => {
    return (

    <>
    <Flex direction="row" p="2" justify="center" align="center">
    <Flex p="2" direction="column">
      <Flex direction="row" justify="between">
      <Text size="5" mt="9" mb="2" >study/break</Text>
      <Text size="5" mt="9" color='gray'>00:00am</Text>
      </Flex>
      <Card size="5">
        <Heading size="9">59:59</Heading>
      </Card>
    <Text align="center" mt="3">sessionName</Text>
    <Section>

    </Section>
    </Flex>
    </Flex>
    </>
  
    );
};

export default Timer;