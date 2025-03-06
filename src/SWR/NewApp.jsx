import { SWRConfig } from "swr";
import SWR from "./SWR";

export const fetcher = (url) => fetch(url).then((r) => r.json());

export default function NewApp() {
  return (
    <SWRConfig value={{ fetcher }}>
      <SWR />
    </SWRConfig>
  );
}
