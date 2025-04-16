import { useEffect, useState } from "react";
import { cn } from "../lib";

const IconComponent = ({
  className = "",
  iconName,
}: {
  className?: string;
  iconName: string;
}) => {
  const [Icon, setIcon] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import(`../assets/icons/${iconName}.svg?react`).then((mod) => {
      setIcon(() => mod.default);
    });
  }, [iconName]);

  if (!Icon) return null;

  return (
    <>
      <Icon className={cn("fill-current", className)} width={20} height={14} />
    </>
  );
};

export default IconComponent;
