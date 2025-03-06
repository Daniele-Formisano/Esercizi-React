import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "./NewApp";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  return { data, error, refetch: mutate };
}
