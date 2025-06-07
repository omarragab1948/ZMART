import { createContext, useContext, useState, ReactNode } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  direction: "horizontal" | "vertical";
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used inside <Tabs>");
  }
  return context;
};

type TabsProps = {
  children: ReactNode;
  defaultValue: string;
  direction?: "horizontal" | "vertical";
};

const Tabs = ({
  children,
  defaultValue,
  direction = "horizontal",
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, direction }}>
      <div
        className={`w-full flex ${
          direction === "vertical" ? "flex-row" : "flex-col"
        }`}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  const { direction } = useTabs();
  const layout =
    direction === "vertical" ? "flex-col border-r" : "flex-row border-b";
  return (
    <div
      className={`flex gap-2 overflow-auto border-[var(--color-btn-info)] ${layout} shrink-0`}
    >
      {children}
    </div>
  );
};

const Trigger = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  const { activeTab, setActiveTab, direction } = useTabs();
  const isActive = activeTab === value;

  const baseClasses = "px-4 py-2 cursor-pointer text-left flex justify-center";
  const activeClass =
    direction === "vertical"
      ? "border-r-4 border-black font-bold"
      : "border-b-2 border-black font-bold";
  const inactiveClass = "text-[var(--color-text-info)]";
  const widthClass = direction === "horizontal" ? "w-1/3" : "";

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`${baseClasses} ${widthClass} ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      {children}
    </button>
  );
};

const Content = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  const { activeTab } = useTabs();
  return activeTab === value ? (
    <div className="p-4 w-full">{children}</div>
  ) : null;
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
