import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

function SiteLogo() {
  const navigate = useNavigate();
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default SiteLogo;
