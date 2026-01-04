import ServerConnectionError from "@/Components/Errors/ServerConectionError";
import React from "react";

function Error500() {
  return <ServerConnectionError />;
}

export default Error500;
