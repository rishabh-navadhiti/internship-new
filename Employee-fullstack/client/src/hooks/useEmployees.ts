import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const useAddEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newData) =>
      axios.post(`${API_URL}/employees`, newData).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) =>
      axios.put(`${API_URL}/employees/${id}`, formData).then((res) => res.data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      queryClient.invalidateQueries({ queryKey: ["employee", id] });
    },
  });
};

export const useEmployee = (id) => {
  return useQuery({
    queryKey: ["employee", id],
    queryFn: () =>
      axios.get(`${API_URL}/employees/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};
