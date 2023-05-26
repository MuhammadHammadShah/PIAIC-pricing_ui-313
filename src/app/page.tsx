"use client";

import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

const CoursePage = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      description: "Basic plan description",
      price: "$9.99",
    },
    {
      id: 2,
      name: "Standard",
      description: "Standard plan description",
      price: "$19.99",
    },
    {
      id: 3,
      name: "Premium",
      description: "Premium plan description",
      price: "$29.99",
    },
  ];

  return (
    <Flex minH="100vh" align="center" justify="center" bg="purple.100" py="8">
      <Box
        bg="gray.800"
        p="8"
        borderRadius="md"
        textAlign="center"
        color="white"
        maxW="500px"
        w="100%"
        mb="8"
      >
        <Text fontWeight="bold" fontSize="xl" mb="4" color="blue.500">
          PIAIC
        </Text>
        <Heading as="h1" fontSize="3xl" mb="4">
          Course Title
        </Heading>
        <Text mb="4" color="gray.300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          turpis leo. Mauris consequat ante in dolor efficitur tempus.
        </Text>
        <Flex
          direction="row"
          align="center"
          justify="space-between"
          flexWrap="wrap"
          mt="8"
        >
          {plans.map((plan) => (
            <Box
              key={plan.id}
              bg={
                plan.name === "Basic"
                  ? "teal.500"
                  : plan.name === "Standard"
                  ? "purple.500"
                  : "pink.500"
              }
              p="4"
              borderRadius="md"
              mb="4"
              color="white"
              flex="1"
              _hover={{ transform: "scale(1.05)" }}
              height="100%"
              minWidth="200px"
              width="100%"
              mr="4"
            >
              <Heading as="h3" fontSize="lg" mb="2">
                {plan.name}
              </Heading>
              <Text fontSize="lg" mb="1">
                {plan.price}
              </Text>
              <Text fontSize="md" color="gray.300">
                {plan.description}
              </Text>
              <Box
                as="button"
                bg={plan.name === "Basic" ? "blue.500" : "teal.500"}
                color="white"
                fontSize="sm"
                fontWeight="bold"
                borderRadius="md"
                p="2"
                mt="4"
                width="100%"
                height="40px"
                _hover={{ bg: plan.name === "Basic" ? "blue.600" : "teal.600" }}
                _focus={{ border: "2px solid teal.500", outline: "none" }}
              >
                Enroll Now
              </Box>
              {plan.name === "Basic" && (
                <Text fontSize="sm" fontWeight="bold" color="blue.900" mt="2">
                  <a href="#">Apply for Financial Aid</a>
                </Text>
              )}
              {plan.name === "Standard" && (
                <Text fontSize="sm" fontWeight="bold" color="blue.900" mt="2">
                  <a href="#">Apply for Financial Aid</a>
                </Text>
              )}
              {plan.name === "Premium" && (
                <Text fontSize="sm" fontWeight="bold" color="blue.900" mt="2">
                  <a href="#">Apply for Financial Aid</a>
                </Text>
              )}
            </Box>
          ))}
        </Flex>
        <Text fontSize="sm" color="gray.500" mt="4">
          Hammads Pricing UI Template
        </Text>
        <Text fontSize="sm" color="gray.500">
          Features: list of plans, price per plan, description of each plan
        </Text>
      </Box>
    </Flex>
  );
};

export default CoursePage;
