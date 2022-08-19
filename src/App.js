import Article from "./Article";
import { motion } from "framer-motion";

function App() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
  return (
    <div className="App">
      <motion.div
        variants={container}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 2,
          type: "spring",
        }}
      >
        <h1>Welcome</h1>
        <motion.section variants={item}>
          {" "}
          <Article
            title="Alle elsker jazz"
            paragraph="Bandet er meget eftertragtet, og er især kendt for sit sceneoptræden, og har fået mange fine reviews og publikumsanerkendelse. Sekstetten består af nogle af Europas bedste jazzmusikere; hver især på deres unikke instrumenter. Bandet har et usædvanligt bredt repertoire af hele spektret af musik fra Jazzbyen: Traditional Jazz, Swing, Rythm & Blues, Latin, Gospel, Ragtime og nogle funky Brassband Street ig Mardi Grass Music."
          />
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
