import React from "react";
import { motion } from "framer-motion";
import "../CSS/StoryAboutMap.css"; 
import { Button} from "antd";

const StoryAboutMap = () => {
  return (
    <motion.div
      className="story-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="story-title">Story About Map</h2>
      <p className="story-text">
        Long go, this enchanted map was created by the greatest wizards in
        Hogwarts to guide them through the many magical and mysterious locations
        hidden within the castle grounds. It is said that the map holds the
        secrets of the most dangerous and magical areas, such as the{" "}
        <span className="highlight">Quidditch Pitch</span>, where witches and
        wizards would race through the air on their brooms, and the{" "}
        <span className="highlight">Graveyard</span>, where ancient magical
        creatures still roam at night.
      </p>
      <p className="story-text">
        The map also leads to the mysterious <span className="highlight">Snape's Cave</span>, a place
        of dark secrets, and the tranquil <span className="highlight">Black Lake</span>, where
        magical creatures and mermaids swim beneath the surface.
      </p>
      <p className="story-text">
        As you explore this map, remember: it is more than just a tool; it is a
        key to unlocking the mysteries of Hogwarts. But beware, for not all
        paths are meant to be discovered.
      </p>
      <p className="story-text">
        Legends speak of hidden treasures within these lands, and whispers
        tell of places that even the bravest wizards dare not enter. The map
        holds more than just locations – it reveals secrets, powers, and even
        ancient curses.
      </p>
      <p className="story-text">
        But beware: the magic of this map is not to be underestimated. Those
        who seek too much may find themselves lost, never to return, trapped in
        the very places they sought to discover. Proceed with caution, and let
        the journey unfold at its own pace.
      </p>
      <Button
          type="primary"
          ghost
          size="large"
          style={{ display: "block", margin: "2rem auto 0" }}
          onClick={() => window.history.back()}
        >
         Back To Map🔙
        </Button>
    </motion.div>
    
  );
  
};

export default StoryAboutMap;
