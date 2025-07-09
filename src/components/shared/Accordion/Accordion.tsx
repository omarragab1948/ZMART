import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { tailwindClassesMerge } from "@/design-system/utils/tailwindClassesMerge";
type AccordionContextType = {
  openItem: string[] | null;
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

export const Accordion = ({
  children,
  defaultValue = null,
}: {
  children: ReactNode;
  defaultValue?: string | null;
}) => {
  const [openItem, setOpenItem] = useState<string[] | null>(
    defaultValue ? [defaultValue] : null
  );

  const toggleItem = (value: string) => {
    setOpenItem((prev) => {
      if (!prev) return [value];
      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
    });
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className="w-full">{children}</div>
    </AccordionContext.Provider>
  );
};

type ItemProps = {
  children: ReactNode;
  bordered?: boolean;
};

const Item = ({ children, bordered = true }: ItemProps) => {
  return (
    <div
      className={tailwindClassesMerge(
        bordered ? "border-b border-gray-200" : ""
      )}
    >
      {children}
    </div>
  );
};

const Trigger = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  const { openItem, toggleItem } = useAccordion();
  const isOpen = openItem?.includes(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
    >
      {children}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isOpen ? "minus" : "plus"}
          className="ml-2"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.span>
      </AnimatePresence>
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
  const isOpen = openItem?.includes(value);

  const ref = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (ref.current) {
          setMeasuredHeight(ref.current.scrollHeight);
        }
      });

      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={value}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? measuredHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-4 overflow-hidden"
      >
        <div ref={ref} className="py-2">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;
