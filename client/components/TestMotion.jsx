import React from "react";
import { motion } from "framer-motion";

function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: 200, height: 200, backgroundColor: "red" }}
    >
      Test Motion
    </motion.div>
  );
}

export default TestMotion;
