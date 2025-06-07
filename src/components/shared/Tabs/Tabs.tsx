// components/Tabs.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
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
};

const Tabs = ({ children, defaultValue }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 border-b border-[var(--color-btn-info)] overflow-auto">
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
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2  cursor-pointer w-1/3 ${
        isActive ? "border-black border-b ]" : "text-[var(--color-text-info)]"
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
  return activeTab === value ? <div className="mt-4">{children}</div> : null;
};

// Attach compound components
Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
