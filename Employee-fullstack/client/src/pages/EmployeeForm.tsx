import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  useAddEmployee,
  useUpdateEmployee,
  useEmployee,
} from "../hooks/useEmployees";
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

const EmployeeForm = () => {
  // id for edit if present
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  // tanstack mutation and queries from the hook file, to get, post and put
  const addMutation = useAddEmployee();
  const updateMutation = useUpdateEmployee();
  const { data, isLoading } = useEmployee(id);

  // const queryClient = useQueryClient();

  // const addMutation = useMutation({
  //   mutationFn: (newData) =>
  //     axios.post(`${API_URL}/employees`, newData).then((res) => res.data),
  //   onSuccess: () => {
  //     reset();
  //     queryClient.invalidateQueries({ queryKey: ["employees"] });

  //     toaster.create({
  //       id: "success",
  //       title: "Employee Added",
  //       duration: 3000,
  //       type: "success",
  //     });
  //   },
  // });

  // const updateMutation = useMutation({
  //   mutationFn: ({ id, formData }) =>
  //     axios.put(`${API_URL}/employees/${id}`, formData).then((res) => res.data),
  //   onSuccess: () => {
  //     toaster.create({
  //       id: "updated",
  //       title: "Employee Updated",
  //       duration: 3000,
  //       type: "success",
  //     });
  //     queryClient.invalidateQueries({ queryKey: ["employees"] });
  //     queryClient.invalidateQueries({ queryKey: ["employee", id] });
  //     navigate("/");
  //   },
  // });

  // const { isLoading, data } = useQuery({
  //   queryKey: ["employee", id],
  //   queryFn: () => {
  //     console.log("getting");

  //     return axios.get(`${API_URL}/employees/${id}`).then((res) => res.data);
  //   },
  //   enabled: !!id,
  // });

  // on form submission
  const onSubmit = (formData) => {
    // if its edit form
    if (id) {
      updateMutation.mutate(
        { id, formData },
        {
          onSuccess: () => {
            toaster.create({
              id: "updated",
              title: "Employee Updated",
              duration: 3000,
              type: "success",
            });
            navigate("/");
          },
        }
      );
    }
    // if its add new form
    else {
      addMutation.mutate(formData, {
        onSuccess: () => {
          reset();
          toaster.create({
            id: "added",
            title: "Employee Added",
            duration: 3000,
            type: "success",
          });
        },
      });
    }
  };

  // reset form with fetched values for edit form
  useEffect(() => {
    if (data) {
      reset({
        name: data.name ?? "",
        email: data.email ?? "",
        age: data.age ?? "",
        role: data.role ?? "",
      });
    }
  }, [data, reset]);

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

              {/* Age  */}
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
                      name={field.name}
                      value={field.value}
                      onValueChange={({ valueAsNumber }) => {
                        field.onChange(valueAsNumber);
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

              {/* Role  */}
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

            {/* submit button */}
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

      <Button
        onClick={() => navigate("/")}
        mt="10"
        mb="10"
        display="block"
        mx="auto"
        loading={addMutation.isPending || updateMutation.isPending}
      >
        View Employee Records
      </Button>
      <Toaster />
    </Box>
  );
};

export default EmployeeForm;
