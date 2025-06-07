import { IconButton } from "@/design-system/components/Buttons/IconButton";
import Typography from "@/design-system/components/Typography/Typography";
import { AnimatePresence } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

interface IModalProps {
  title: string;
  children: ReactNode;
  actions: ReactNode;
  open: boolean;
  onClose: VoidFunction;
}

const Modal = ({ title, children, actions, open, onClose }: IModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => removeEventListener("mousedown", handler);
  }, [onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="fixed bg-black/40 inset-0 w-full h-full flex justify-center items-center p-4 z-50"
        >
          <div
            ref={ref}
            className="flex flex-col bg-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 py-4 px-6 rounded-lg gap-4"
          >
            <div className="flex justify-between items-center">
              <Typography as="h3" variant="title">
                {title}
              </Typography>
              <IconButton variant="danger" onClick={onClose}>
                <IoMdClose size={20} />
              </IconButton>
            </div>
            <div className="flex flex-col gap-3 w-full">{children}</div>
            <div>{actions}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
