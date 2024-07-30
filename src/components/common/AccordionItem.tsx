import React from "react";

type AccordionItemProps = {
  dict: any;
  id: string;
  collapse_id: string;
  item: string;
  content: string;
};

const AccordionItem = ({
  dict,
  id,
  collapse_id,
  item,
  content,
}: AccordionItemProps) => {
  return (
    <div className="accordion-item" key={id}>
      <h2 className="accordion-header" id={id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + collapse_id}
        >
          {dict?.[item]}
        </button>
      </h2>
      <div
        id={collapse_id}
        className="accordion-collapse collapse"
        aria-labelledby={id}
      >
        <div className="accordion-body">{dict?.[content]}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
