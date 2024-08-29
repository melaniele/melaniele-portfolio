import { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center justify-center group m-1">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center">
        <span
          className="whitespace-nowrap bg-dark-rose text-xs rounded-md py-1 px-2 text-white font-bold shadow-custom
                          dark:bg-white dark:text-black"
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
