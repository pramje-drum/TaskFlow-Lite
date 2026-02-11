import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
	tagTypes: ["Tasks"],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => "/tasks",
			providesTags: ["Tasks"],
		}),
		addTasks: builder.mutation({
			query: (task) => ({
				url: "/tasks",
				method: "POST",
				body: task,
			}),
			invalidatesTags: ["Tasks"],
		}),
		updateTasks: builder.mutation({
			query: ({ id, task }) => ({
				url: `/tasks/${id}`,
				method: "PUT",
				body: task,
			}),
			invalidatesTags: ["Tasks"],
		}),
		deleteTasks: builder.mutation({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Tasks"],
		}),
	}),
});

export const {
	useEditTasksMutation,
	useGetTasksQuery,
	useAddTasksMutation,
	useUpdateTasksMutation,
	useDeleteTasksMutation,
} = api;
