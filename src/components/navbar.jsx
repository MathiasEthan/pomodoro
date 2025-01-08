import React from 'react';
//import '../App.css'
import "@radix-ui/themes/styles.css";
import { Flex, Heading, Button, Section } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
const Navbar = () => {
    return (
    <Section size="1" mt="2" mb="9">
      <Flex gap="9" justify="between" px="4">
        <Button className="createButton" variant="soft" size="3">
          <PlusIcon />
          Create
        </Button>
        <Heading as="h1">Current Project · 00:00</Heading>
        <Button className="projectsDropdown" variant="soft" size="3">
          Projects
        </Button>
      </Flex></Section>
    );
};

export default Navbar;