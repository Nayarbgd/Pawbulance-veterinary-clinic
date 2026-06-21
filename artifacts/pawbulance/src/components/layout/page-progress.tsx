import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function PageProgress() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setVisible(true);
    setProgress(0);
    setKey((k) => k + 1);

    const t1 = setTimeout(() => setProgress(40), 30);
    const t2 = setTimeout(() => setProgress(70), 120);
    const t3 = setTimeout(() => setProgress(90), 280);
    const t4 = setTimeout(() => {
      setProgress(100);
      const t5 = setTimeout(() => setVisible(false), 220);
      return () => clearTimeout(t5);
    }, 420);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [location]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={key}
          className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#3BA9F5] via-[#6CC7FF] to-[#3BA9F5] rounded-full"
            style={{ boxShadow: "0 0 8px rgba(59,169,245,0.7)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
