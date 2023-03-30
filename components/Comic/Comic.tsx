import { Comic } from "@/types/comic";
import { FC } from "react";

const Comic: FC<Comic> = ({ id, name, thumbnail }) => {
  return <div>{id}</div>;
};

export default Comic;
