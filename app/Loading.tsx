import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

function Loader({ isLoading, setIsLoading }: LoaderProps) {
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 1900);
    return () => clearTimeout(timeoutId)
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: 'easeInOut',
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            <title>Logo</title>
            <motion.rect
              width='50'
              height='50'
              x='25'
              y='25'
              rx='5' // Adjust this value for rounded corners
              initial={{ fill: 'rgba(0, 0, 0, 0)' }}
              animate={{ fill: 'rgba(0, 0, 0, 1)' }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              exit={{
                fill: 'rgba(0, 0, 0, 0)',
                scale: 2,
              }}
              fill='currentColor'
            />
            <motion.text
              x='50%'
              y='50%'
              dx='-8' // Adjust 'dx', 'dy' to align the 'D' as needed
              dy='8'
              textAnchor='middle'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.5, // Start the text animation after the rectangle has appeared
              }}
              exit={{
                opacity: 0,
                scale: 2,
              }}
              fill='white'
              fontSize='35' // Adjust font size as needed
            >
              D
            </motion.text>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
