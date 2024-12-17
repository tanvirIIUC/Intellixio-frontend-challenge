"use client";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { UserAgent } from "@/views/userAgent";

const UserAgentRoot = () => {
  const { userAgent } = useUserAgentContext();
  
  return <UserAgent userAgent={userAgent ?? ""} />;
};

export default UserAgentRoot;
