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

type MultiSelectProps = {
  options: OptionType[];
  onChange: (item: number[], name: string) => void;
  name: string;
  values: number[];
  dict: { [key: string]: string };
};

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  name,
  values,
  dict,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [availableOptions, setAvailableOptions] = useState<OptionType[]>([]);
  const [currents, setCurrents] = useState<number[]>([]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const currentHandler = (item: OptionType) => {
    setCurrents([...currents, item.id]);
    setAvailableOptions(availableOptions.filter((f) => f.id !== item.id));
    onChange(currents, name);
    onClose();
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const remove = (item: number) => {
    setCurrents(
      options.filter((f: OptionType) => f.id !== item).map((f) => f.id)
    );
    setAvailableOptions([
      ...availableOptions,
      options.find((f: OptionType) => f.id === item) as OptionType,
    ]);
  };

  const stopPropagation = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCurrents(
      options.filter((f: OptionType) => values?.includes(f.id)).map((m) => m.id)
    );
    setAvailableOptions(
      options.filter((f: OptionType) => !values?.includes(f.id))
    );
  }, [options, values]);

  useClickAway(ref, onClose);

  return (
    <div
      className={`nice-select ${open ? "open" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      ref={ref}
    >
      {currents.map((option: number) => {
        return (
          <span className="mood-tag" key={option + "tag"}>
            {
              dict?.[
                options.find((f: OptionType) => f.id == option)?.optionName ??
                  ""
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
            onClick={() => currentHandler(item)}
          >
            {item.optionName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
