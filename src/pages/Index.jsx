import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, Avatar, Badge, IconButton, useToast, Image } from "@chakra-ui/react";
import { FaSearch, FaStar, FaCalendarAlt, FaComments, FaUserShield, FaUser, FaLock } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [instructors, setInstructors] = useState([]);
  const toast = useToast();

  const handleSearch = () => {
    // Mock search result
    setInstructors([
      {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        reviews: 20,
        availability: "9 AM - 5 PM",
        location: "New York",
        profilePicture: "https://images.unsplash.com/photo-1642903642741-4374811a84aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MjM0NDM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        certifications: ["Certified Personal Trainer", "Nutrition Specialist"],
      },
      {
        id: 2,
        name: "Jane Smith",
        rating: 4.8,
        reviews: 35,
        availability: "10 AM - 6 PM",
        location: "Los Angeles",
        profilePicture: "https://images.unsplash.com/photo-1544168190-79c17527004f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MjM0NDM5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        certifications: ["Yoga Instructor", "Pilates Instructor"],
      },
    ]);
  };

  const handleBooking = (instructor) => {
    toast({
      title: "Booking Confirmed",
      description: `You have booked a session with ${instructor.name}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Find Your Instructor
        </Text>
        <HStack width="100%">
          <Input placeholder="Search by city or location" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <VStack spacing={4} width="100%">
          {instructors.map((instructor) => (
            <Box key={instructor.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack spacing={4}>
                <Avatar src={instructor.profilePicture} size="xl" />
                <VStack align="start" spacing={1}>
                  <Text fontSize="lg" fontWeight="bold">
                    {instructor.name}
                  </Text>
                  <HStack>
                    <FaStar color="gold" />
                    <Text>
                      {instructor.rating} ({instructor.reviews} reviews)
                    </Text>
                  </HStack>
                  <Text>Availability: {instructor.availability}</Text>
                  <Text>Location: {instructor.location}</Text>
                  <HStack spacing={2}>
                    {instructor.certifications.map((cert, index) => (
                      <Badge key={index} colorScheme="green">
                        {cert}
                      </Badge>
                    ))}
                  </HStack>
                  <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" onClick={() => handleBooking(instructor)}>
                    Book Now
                  </Button>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
