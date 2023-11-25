import { ARTICLE_URL } from "../../constants";
import { apiSlice } from "./apiSlice";


export const articleApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        summarize: builder.mutation({
          query: (data) => ({
            url:`${ARTICLE_URL}/summarize`,
            method:"POST",
            body : data,
          }),
        }),
        summarizeText: builder.mutation({
          query: (text) => ({
            url: `${ARTICLE_URL}/summarize-text`,
            method: 'POST',
            body: { text, lang:"tr" },
          }),
        }),
      })
});

export const { useSummarizeTextMutation, useSummarizeMutation} =
  articleApiSlice;