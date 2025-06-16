import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// chakra ui
import {
  Button,
  Field,
  Fieldset,
  Input,
  NativeSelect,
  NumberInput,
  Stack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { useForm, Controller } from "react-hook-form";

const EmployeeForm = ({ id }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newData) =>
      axios
        .post("http://localhost:3000/employees", newData)
        .then((res) => res.data),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toaster.create({
        id: "success",
        title: "Employee Added",
        duration: 3000,
        type: "success",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updatedData }) =>
      axios.put(`http://localhost:3000/employees/${id}`, updatedData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      toaster.create({
        id: "updated",
        title: "Employee Updated",
        duration: 3000,
        type: "success",
      });
      navigate("/");
    },
  });
  
  
   const { isLoading } = useQuery({
    queryKey: ["employee", id],
    queryFn: () =>{ console.log('getting');
    
      return axios.get(`http://localhost:3000/employees/${id}`).then((res) => res.data)},
    enabled: !!id,
    onSuccess: (data) => {
      console.log("success + ");
      
      reset({
        name: data.name,
        email: data.email,
        age: data.age,
        role: data.role,
      });
    },
        
  });

  const onSubmit = (data) => {
    if (id) {
      updateMutation.mutate({ id, data });
    } else {
      mutation.mutate(data);
    }
  };

  return (
    <Box>
      <Box
        maxW="600px"
        mx="auto"
        mt={8}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="bg.subtle"
        borderColor="border.emphasized"
        // _dark={{ bg: "gray.subtle", borderColor: "border.inverted" }}
        // _light={{ bg: "bg.subtle", borderColor: "border.inverted" }}
        borderWidth="1px"
      >
        <Heading size="lg" mb={6} textAlign="center" color="fg">
          {id ? "Edit Employee" : "Add New Employee"}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Fieldset.Root size="md" maxW="md" gap="6" mx="auto">
            <Stack align="center">
              <Fieldset.Legend color="fg.muted">
                Enter employee details below
              </Fieldset.Legend>
            </Stack>

            <Fieldset.Content gap="5" width="full">
              {/* Name */}
              <Field.Root invalid={!!errors.name} width="full">
                <Field.Label color="blue.600" _dark={{ color: "blue.300" }}>
                  Name
                </Field.Label>
                <Input
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  borderColor="border.inverted"
                  _focus={{ borderColor: "blue.400" }}
                />
                {errors.name && (
                  <Field.ErrorText>{errors.name.message}</Field.ErrorText>
                )}
              </Field.Root>

              {/* Email */}
              <Field.Root invalid={!!errors.email} width="full">
                <Field.Label color="blue.600" _dark={{ color: "blue.300" }}>
                  Email
                </Field.Label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  borderColor="border.inverted"
                  _focus={{ borderColor: "blue.400" }}
                />
                {errors.email && (
                  <Field.ErrorText>{errors.email.message}</Field.ErrorText>
                )}
              </Field.Root>

              {/* Age - Chakra v3 NumberInput with RHF Controller */}
              <Field.Root invalid={!!errors.age} width="full">
                <Field.Label color="blue.600" _dark={{ color: "blue.300" }}>
                  Age
                </Field.Label>
                <Controller
                  control={control}
                  name="age"
                  defaultValue=""
                  rules={{
                    required: "Age is required",
                    min: { value: 18, message: "Minimum age is 18" },
                  }}
                  render={({ field }) => (
                    <NumberInput.Root
                      value={field.value || ""}
                      onValueChange={({ valueAsNumber }) => {
                        field.onChange(valueAsNumber || "");
                      }}
                      step={1}
                      min={1}
                    >
                      <NumberInput.Control />
                      <NumberInput.Input
                        placeholder="Enter age"
                        borderColor="border.inverted"
                        _focus={{ borderColor: "blue.400" }}
                      />
                    </NumberInput.Root>
                  )}
                />
                {errors.age && (
                  <Field.ErrorText>{errors.age.message}</Field.ErrorText>
                )}
              </Field.Root>

              {/* Role - NativeSelect */}
              <Field.Root invalid={!!errors.role} width="full">
                <Field.Label color="blue.600" _dark={{ color: "blue.300" }}>
                  Role
                </Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    {...register("role", { required: "Role is required" })}
                    borderColor="border.inverted"
                    _focus={{ borderColor: "blue.400" }}
                  >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="Developer">Developer</option>
                    <option value="Intern">Intern</option>
                    <option value="Manager">Manager</option>
                    <option value="Embedded Engineer">Embedded Engineer</option>
                    <option value="DevOps">DevOps</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
                {errors.role && (
                  <Field.ErrorText>{errors.role.message}</Field.ErrorText>
                )}
              </Field.Root>
            </Fieldset.Content>

            <Button
              type="submit"
              colorPalette="blue"
              width="full"
              size="lg"
              _hover={{ bg: "blue.emphasized" }}
              // bg={{}}
              // _dark={{ _hover: { bg: "blue.400" } }}
            >
              {id ? "Update" : "Submit"}
            </Button>
          </Fieldset.Root>
        </form>
      </Box>
      <Button onClick={() => navigate("/")} mt="5"   loading={mutation.isPending || updateMutation.isPending}>
        View Records
      </Button>
      <Toaster />
    </Box>
  );
};

export default EmployeeForm;
