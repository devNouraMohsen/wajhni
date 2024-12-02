import React from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate(); 
  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <Box p={4} backgroundColor="#fff1e6" position="relative">
      <Button 
        position="absolute" 
        top={4} 
        right={4} 
        backgroundColor='#cbc0ac' 
        onClick={handleGoBack}
      >
        Go Back
      </Button>

      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Terms and Conditions of Wajhni Platform
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>Introduction</strong>
      </Text>
      <Text mb={4}>
        Welcome to the Wajhni platform! By using our services, you agree to comply with the following terms and conditions that govern the use of the Wajhni platform, including browsing and viewing products. If you do not agree to these terms and conditions, please do not use the platform.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>1. Definitions</strong>
      </Text>
      <Text mb={4}>
        <strong>Platform</strong>: Refers to "Wajhni," which displays various products and helps customers get a comprehensive view of different products.
      </Text>
      <Text mb={4}>
        <strong>User</strong>: Any person who uses the platform to browse the products displayed.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>2. Use of the Platform</strong>
      </Text>
      <Text mb={4}>
        Users must comply with all local and international laws while using the platform.
      </Text>
      <Text mb={4}>
        The platform is provided "as is," and Wajhni does not guarantee that it is free from errors or malfunctions.
      </Text>
      <Text mb={4}>
        Users can browse the available products on the platform and gain a comprehensive understanding of them.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>3. Intellectual Property Rights</strong>
      </Text>
      <Text mb={4}>
        All content displayed on the platform, including text, images, and logos, is the property of Wajhni or licensed to it, and cannot be copied, distributed, or used without prior permission.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>4. User Obligations</strong>
      </Text>
      <Text mb={4}>
        Users must not post or upload any illegal, offensive, or harmful content.
      </Text>
      <Text mb={4}>
        Users are prohibited from manipulating, altering, or attempting to hack the platform's functions.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>5. Privacy of Data</strong>
      </Text>
      <Text mb={4}>
        Wajhni respects the privacy of its users and will use personal information only in accordance with our privacy policy.
      </Text>
      <Text mb={4}>
        Users must provide accurate and up-to-date information when using the platform.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>6. Responsibility</strong>
      </Text>
      <Text mb={4}>
        We are committed to providing a platform that operates efficiently and smoothly, but we do not take responsibility for any damages that may result from using the platform or errors in the displayed content.
      </Text>
      <Text mb={4}>
        We will not be responsible for any delays or failures in providing the service due to force majeure.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>7. Modifications to Terms and Conditions</strong>
      </Text>
      <Text mb={4}>
        Wajhni reserves the right to modify these terms and conditions at any time. Any modifications will be posted on this page, and the modifications will be effective immediately upon posting.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>8. Governing Law</strong>
      </Text>
      <Text mb={4}>
        These terms and conditions are governed by the laws of the Kingdom of Saudi Arabia, and any dispute that arises will be resolved before the competent courts in the Kingdom.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>9. Contact Us</strong>
      </Text>
      <Text mb={4}>
        If you have any questions or need assistance, you can contact us via email or through the support page on the platform.
      </Text>

      <Text fontSize="lg" mb={2}>
        <strong>10. Establishment of Wajhni Platform</strong>
      </Text>
      <Text mb={4}>
        The Wajhni platform was established under the management and supervision of <strong>Tamkeen Technologies</strong>, the company that owns and manages the platform.
      </Text>
    </Box>
  );
};

export default TermsAndConditions;
