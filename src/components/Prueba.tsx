import { motion } from "framer-motion";

export function Prueba() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 500, scale: 2 }}
        >
            <div className="w-10 h-10"></div>
        </motion.div>
    );
}
