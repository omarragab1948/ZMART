import { createContext, useContext, useState, ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type AccordionContextType = {
  openItem: string | null;
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion compound components must be used inside <Accordion>"
    );
  }
  return context;
};

export const Accordion = ({ children }: { children: ReactNode }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

type ItemProps = {
  children: ReactNode;
};

const Item = ({ children }: ItemProps) => {
  return <div className="border-b border-gray-200">{children}</div>;
};

const Trigger = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const { openItem, toggleItem } = useAccordion();
  const isOpen = openItem === value;

  return (
    <button
      onClick={() => toggleItem(value)}
      className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
    >
      {children}
      <span className="ml-2">{isOpen ? <FaMinus /> : <FaPlus />}</span>
    </button>
  );
};

const Content = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const { openItem } = useAccordion();
  const isOpen = openItem === value;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 px-4 ${
        isOpen ? "max-h-[500px] py-2" : "max-h-0"
      }`}
    >
      {isOpen && children}
    </div>
  );
};

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;
