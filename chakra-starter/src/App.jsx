"use client"

import {
  Box,
  Button,
  HStack,
  IconButton,
  Table,
  Stack,
  Heading,
} from "@chakra-ui/react"
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import { useColorMode } from "./components/ui/color-mode"

const employees = [
  { id: 1, name: "Ravi Kumar", age: 28, email: "ravi@example.com", role: "Developer" },
  { id: 2, name: "Anita Sharma", age: 32, email: "anita@example.com", role: "Designer" },
  { id: 3, name: "Rahul Verma", age: 25, email: "rahul@example.com", role: "Tester" },
  { id: 4, name: "Sneha Joshi", age: 30, email: "sneha@example.com", role: "Product Manager" },
  { id: 5, name: "Amit Patel", age: 35, email: "amit@example.com", role: "DevOps" },
]

const App = () => {
  const { toggleColorMode } = useColorMode();
  const handleEdit = (id) => {
    console.log("Edit", id)
    // Implement edit logic or routing
  }

  const handleDelete = (id) => {
    console.log("Delete", id)
    // Implement delete logic
  }

  return (
    <Box maxWidth="1000px" mx="auto">
      <Stack width="full" gap={5}>
        <Heading size="lg">Employee List</Heading>
        <Table.Root size="sm" variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Age</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Role</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="center">Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map((emp) => (
              <Table.Row key={emp.id}>
                <Table.Cell>{emp.name}</Table.Cell>
                <Table.Cell>{emp.age}</Table.Cell>
                <Table.Cell>{emp.email}</Table.Cell>
                <Table.Cell>{emp.role}</Table.Cell>
                <Table.Cell textAlign="center">
                  <HStack spacing={2} justify="center">
                    <IconButton
                      aria-label="Edit"
                      icon={<FiEdit2 />}
                      size="sm"
                      onClick={() => handleEdit(emp.id)}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<FiTrash2 />}
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDelete(emp.id)}
                    />
                  </HStack>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      
      </Stack>
      <Button onClick={() => toggleColorMode()}>jello</Button>
    </Box>
  )
}

export default App;