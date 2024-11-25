import React, { Fragment } from "react";
import { Box, Container, Grid, Text, Image, Divider, Link } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import IconWajhni from '../assets/Wajhni.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <Container  maxW="full" className="footerSection" p={5} bg="#ddbea9">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={5}>
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold">About Us </Text>
            <Divider my={2} />
            <Text>
            It is a platform that showcases various products and helps the customer to have a comprehensive view of different products.
            </Text>
            <Text mt={4} fontWeight="bold">Establishment of the Wajhni Platform.</Text>
            <Text>
               The Wajhni platform was established under the management and supervision of {" "}
              <span style={{ color: 'darkred' }}>Tamkeen Technologies</span>.
            </Text>
          </Box>
          
          <Box textAlign="center">
            <Text fontSize="2xl" fontWeight="bold"> Contact Us</Text>
            <Box mt={4}>
              <Text>
                <EmailIcon /> Wajhni@hotmail.com
              </Text>
              <Text>
                <PhoneIcon /> 966512345678+
              </Text>
            </Box>

            <Box mt={4}>
              <Text fontSize="xl" fontWeight="bold">Follow</Text>
              <Box display="flex" justifyContent="center" mt={2}>
                <Link href="#" mx={2}><FaFacebook size="2em" /></Link>
                <Link href="#" mx={2}><FaTwitter size="2em" /></Link>
                <Link href="#" mx={2}><FaInstagram size="2em" /></Link>
                <Link href="#" mx={2}><FaYoutube size="2em" /></Link>
                <Link href="#" mx={2}><FaLinkedin size="2em" /></Link>
              </Box>
            </Box>
          </Box>

          <Box textAlign="center">
            <Image src={IconWajhni} alt="Logo" boxSize="300px" />
          </Box>
        </Grid>
        <Divider my={5} />
        <Text textAlign="center" fontSize="sm">
          &copy;{new Date().getFullYear()} منصة وجهني
        </Text>
      </Container>
    </Fragment>
  );
};

export default Footer;
