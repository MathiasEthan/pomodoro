import React from 'react';
import "@radix-ui/themes/styles.css";
import { Flex, Heading, Button, Section, Progress, Box, Avatar } from "@radix-ui/themes";
import { PlusIcon, PauseIcon } from "@radix-ui/react-icons";
const Navbar = () => {
    return (
      <>
        <Flex direction="column">
          <Section size="1" mt="2">
            <Flex gap="9" justify="between" px="4">
              <Button className="createButton" variant="soft" size="3">
                <PlusIcon />
                New Project
              </Button>
              <Heading as="h1">Current Timer · 00:00</Heading>
              <Flex gap="2">
                <Button className="projectsDropdown" variant="soft" size="3">
                <PauseIcon />
                Pause
                </Button>
                <Avatar 
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="A"
                />
              </Flex>
            </Flex>
          </Section>
          <Box maxWidth="100%" mt="-2">
            <Progress variant="surface" size="1" />
          </Box>
        </Flex>
      </>
    );
};

export default Navbar;