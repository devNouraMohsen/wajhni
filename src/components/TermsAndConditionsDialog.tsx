import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Checkbox, Text, Link } from '@chakra-ui/react';

const TermsAndConditionsDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgree = () => {
    if (isChecked) {
      onClose();  
    } else {
      alert('You must agree to the terms and conditions before closing the modal.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Terms And Conditions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb={4}>
          You must read the terms and conditions before agreeing to them.
          </Text>
          <div className="mt-4">
              <Link
                href="/terms-and-conditions"
                className="text-blue-500 hover:underline"
                target="_blank" 
              >
                Terms And Conditions
              </Link>
          </div>
          <div>
            <Checkbox
              isChecked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}

            >
              I agree to the terms and conditions
            </Checkbox>
          
          </div>

        </ModalBody>

        <ModalFooter>
          <Button 
            onClick={handleAgree} 
            colorScheme="blue" 
            isDisabled={!isChecked}
          >
            Agree
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsAndConditionsDialog;
