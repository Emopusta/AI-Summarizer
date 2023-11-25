import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', rapidApiKey);
        headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        headers.set('Content-Type', 'application/json');
        return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => ({
        url:`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3&lang=tr`,
      })
    }),
    postTextSummary: builder.mutation({
      query: (text) => ({
        url: '/summarize-text',
        method: 'POST',
        body: { text, lang:"tr" },
      }),
    }),
  }),
});

export const {useLazyGetSummaryQuery, usePostTextSummaryMutation} = articleApi;