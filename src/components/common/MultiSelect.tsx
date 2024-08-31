import { OptionType } from "@/types/types";
import React, {
  useState,
  useCallback,
  useRef,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { useClickAway } from "react-use";

type MultiSelectProps = {
  options: OptionType[];
  onChange: (e: any) => void;
  dict: { [key: string]: string };
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  dict,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [availableOptions, setAvailableOptions] =
    useState<OptionType[]>(options);
  const [currents, setCurrents] = useState<string[]>([]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const currentHandler = (item: OptionType, e: any) => {
    const selectedOptions = [...currents, item.optionName];

    setCurrents(selectedOptions);
    setAvailableOptions(availableOptions.filter((f) => f.id !== item.id));
    onChange(selectedOptions);
    onClose();
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const remove = (item: string) => {
    const updatedCurrents = currents.filter((option) => option !== item);
    setCurrents(updatedCurrents);

    const removedItem = options.find((option) => option.optionName === item);
    if (removedItem) setAvailableOptions([...availableOptions, removedItem]);
  };

  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  useClickAway(ref, onClose);

  return (
    <div
      className={`nice-select ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      ref={ref}
    >
      {currents.map((option: string) => {
        return (
          <span className="mood-tag" key={option + "tag"}>
            {
              dict?.[
                options.find((f: OptionType) => f.optionName == option)
                  ?.optionName ?? ""
              ]
            }
            <i
              className="fa fa-times"
              role="button"
              onClick={() => remove(option)}
            ></i>
          </span>
        );
      })}
      <ul className="list" role="menubar" onClick={stopPropagation}>
        {availableOptions?.map((item) => (
          <li
            key={item.id}
            data-value={item.id}
            className="option"
            role="menuitem"
            onClick={(e) => currentHandler(item, e)}
          >
            {item.optionName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
