import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import { Toaster, toaster } from "../components/ui/toaster";
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
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["employees"],
    queryFn: () =>
      axios.get("http://localhost:3000/employees").then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) =>
      axios
        .delete(`http://localhost:3000/employees/${id}`)
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toaster.create({
        id: "delete",
        title: "Employee Deleted",
        duration: 3000,
        type: "error",
      });
    },
  });

  if (isLoading) return <Box textAlign="center">Loading...</Box>;
  if (error) return <Box textAlign="center">Error loading data.</Box>;

  console.log(data);

  const getRoleColor = (role: string): string => {
    switch (role) {
      case "Admin":
        return "#red";
      case "Developer":
        return "orange"; // Blue
      case "Intern":
        return "yellow"; // Amber/Orange
      case "Manager":
        return "green"; // Emerald/Green
      case "Embedded Engineer":
        return "teal"; // Red
      case "DevOps":
        return "blue"; // Cyan
      default:
        return "gray"; // Gray
    }
  };



  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  return (
    <Box maxW="1000px" mx="auto" px={4} py={8}>
      <Stack width="full" gap={5}>
        <Heading size="lg" textAlign="center">
          Employee List
        </Heading>
        <Table.ScrollArea>
          <Table.Root size="sm" variant="outline" borderWidth="2px" bg="bg">
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
                      // colorPalette="blue"
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
                        colorPalette="blue"
                        onClick={() => navigate(`/edit/${emp._id}`)}
                      >
                        <FiEdit2 />
                      </IconButton>
                      <DeleteDialog id={emp._id} handleDelete={handleDelete} name={emp.name}/>
                    </HStack>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
        <Button
          width="max-content"
          px="10"
          alignSelf="center"
          onClick={() => navigate("/add")}
        >
          Add new
        </Button>
      </Stack>
      <Toaster />
    </Box>
  );
};

export default EmployeeTable;




import { CloseButton, Dialog, Portal } from "@chakra-ui/react";

const DeleteDialog = ({ handleDelete, id, name }) => {
  return (
    <Dialog.Root size="xs" placement="center">
      <Dialog.Trigger asChild>
        <IconButton
          aria-label="Delete"
          size="sm"
          variant="ghost"
          colorPalette="red"          
        >
          <FiTrash2 />
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Delete Employee</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Delete employee details of {`${name}`}?
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={() => handleDelete(id)} colorPalette="red">Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
