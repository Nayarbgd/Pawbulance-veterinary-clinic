import { motion } from "framer-motion";

export function PageSkeleton() {
  return (
    <motion.div
      className="min-h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      <div className="h-[72px] bg-white border-b border-slate-100" />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F7FBFF] to-white min-h-[60vh]">
        <div className="container mx-auto px-6 py-20 space-y-6 max-w-3xl">
          <div className="h-4 w-24 rounded-full bg-slate-100 shimmer" />
          <div className="h-12 w-2/3 rounded-2xl bg-slate-100 shimmer" />
          <div className="h-12 w-1/2 rounded-2xl bg-slate-100 shimmer" style={{ animationDelay: "0.07s" }} />
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full rounded-full bg-slate-100 shimmer" style={{ animationDelay: "0.1s" }} />
            <div className="h-4 w-5/6 rounded-full bg-slate-100 shimmer" style={{ animationDelay: "0.14s" }} />
            <div className="h-4 w-4/5 rounded-full bg-slate-100 shimmer" style={{ animationDelay: "0.18s" }} />
          </div>
          <div className="flex gap-4 pt-2">
            <div className="h-12 w-40 rounded-full bg-slate-100 shimmer" style={{ animationDelay: "0.2s" }} />
            <div className="h-12 w-32 rounded-full bg-slate-100 shimmer" style={{ animationDelay: "0.24s" }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
