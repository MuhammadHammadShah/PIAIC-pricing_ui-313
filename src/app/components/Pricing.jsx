// // components/Pricing.js
// import React from "react";
// import { Box, Heading, Text } from "@chakra-ui/react";

// const Pricing = ({ plans }) => {
//   return (
//     <>
//       {plans.map((plan) => (
//         <Box
//           key={plan.id}
//           bg="pink.300"
//           borderRadius="md"
//           p="4"
//           m="4"
//           flex="1 1 300px"
//         >
//           <Heading as="h3" size="md" mb="2" textAlign="center">
//             {plan.name}
//           </Heading>
//           <Text textAlign="center" mb="2">
//             {plan.description}
//           </Text>
//           <Text textAlign="center" fontSize="2xl" fontWeight="semibold">
//             ${plan.price}
//           </Text>
//         </Box>
//       ))}
//     </>
//   );
// };

// export default Pricing;
