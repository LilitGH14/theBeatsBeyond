import useGlobalContext from "@/hooks/use-context";
import { OptionType } from "@/types/types";
import React, {
  useState,
  useCallback,
  useRef,
  KeyboardEvent,
  MouseEvent,
  useEffect,
} from "react";
import { useClickAway } from "react-use";

type NiceSelectProps = {
  options: OptionType[];
  placeholder?: string;
  className?: string;
  onChange: (item: OptionType, name: string) => void;
  name: string;
  value: string | string[];
};

const NiceSelect: React.FC<NiceSelectProps> = ({
  options,
  placeholder,
  className,
  onChange,
  name,
  value,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { setNiceSelectData } = useGlobalContext();

  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<OptionType>();

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const currentHandler = (item: OptionType) => {
    setCurrent(item);
    onChange(item, name);
    setNiceSelectData(item?.optionName);
    onClose();
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCurrent(options.find((f) => f.optionName.toLocaleLowerCase() === value));
  }, [options, value]);

  useClickAway(ref, onClose);

  return (
    <div
      className={`nice-select ${className || ""} ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      ref={ref}
    >
      <span className="current">{current?.optionName || placeholder}</span>
      <ul className="list" role="menubar" onClick={stopPropagation}>
        {options?.map((item) => (
          <li
            key={item.id}
            data-value={item.id}
            className={`option ${
              item.id === current?.id ? "selected focus" : ""
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
          >
            {item.optionName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;
