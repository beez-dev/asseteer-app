interface SeparatorProps {
  text?: string;
}

export const Separator = ({ text }: SeparatorProps) => {
  return (
    <div className="h-4 flex flex-row gap-x-3 items-center justify-center">
      <div className="h-[1px]  w-full bg-gray-400"></div>
      {text && (
        <>
          <div className="text-xs text-gray-400 whitespace-nowrap text-center flex-shrink-0">
            {text}
          </div>
          <div className="h-[1px] bg-gray-400 w-full"></div>
        </>
      )}
    </div>
  );
};
