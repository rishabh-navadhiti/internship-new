import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Chakra UI imports
import {
  Box,
  Button,
  HStack,
  IconButton,
  Table,
  Stack,
  Heading,
  Badge,
} from "@chakra-ui/react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface Employee {
  _id: number;
  name: string;
  age: number;
  email: string;
  role: string;
}

// main comp
const EmployeeTable = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["employees"],
    queryFn: () =>
      axios.get("http://localhost:3000/employees").then((res) => res.data),
  });

  if (isLoading) return <Box textAlign="center">Loading...</Box>;
  if (error) return <Box textAlign="center">Error loading data.</Box>;

  console.log(data);

  const getRoleColor = (role: string): string => {
    switch(role) {
      case 'Admin':
        return 'purple';
      case 'Developer':
        return 'blue';
      case 'Manager':
        return 'green';
      default:
        return 'gray';
    }
  };

  const handleEdit = (id: number) => {
    alert(`Edit ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete ${id}`);
  };

  return (
    <Box maxW="1000px" mx="auto" px={4} py={8}>
      <Stack width="full" gap={5}>
        <Heading size="lg" textAlign="center">
          Employee List
        </Heading>
        <Table.ScrollArea >
          <Table.Root size="sm" variant="outline">
            <Table.Header>
              <Table.Row bg="bg.emphasized">
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Age</Table.ColumnHeader>
                <Table.ColumnHeader>Email</Table.ColumnHeader>
                <Table.ColumnHeader>Role</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="center">
                  Actions
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map((emp: Employee) => (
                <Table.Row key={emp._id}>
                  <Table.Cell>{emp.name}</Table.Cell>
                  <Table.Cell>{emp.age}</Table.Cell>
                  <Table.Cell color="blue.500">{emp.email}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      colorPalette={getRoleColor(emp.role)}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      textTransform="capitalize"
                    >
                      {emp.role}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <HStack justify="center">
                      <IconButton
                        aria-label="Edit"
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(emp._id)}
                      >
                        <FiEdit2 />
                      </IconButton>
                      <IconButton
                        aria-label="Delete"
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => handleDelete(emp._id)}
                      >
                        <FiTrash2 />
                      </IconButton>
                    </HStack>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Stack>
    </Box>
  );
};

export default EmployeeTable;
