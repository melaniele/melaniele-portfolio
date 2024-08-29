type ProjectTagProps = {
  tag: string;
  handleOnClick: (newTag: string) => void; // takes 1 argument, returns nothing
  isSelected: boolean;
};

const ProjectTag: React.FC<ProjectTagProps> = ({
  tag,
  handleOnClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "bg-dark-rose border-white text-white border-2 font-bold"
    : "border-2 border-dark-rose hover:border-white hover:font-bold hover:bg-dark-rose hover:text-white";

  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full px-6 py-3 mx-1 text-xl cursor-pointer
                  hover:scale-110 duration-300`}
        onClick={() => handleOnClick(tag)}
      >
        {tag}
      </button>
    </div>
  );
};

export default ProjectTag;
