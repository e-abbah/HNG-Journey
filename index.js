import express from 'express'
import axios from 'axios'
const app = express();
const port = process.env.PORT || 3000;

app.get("/me", async (req, res) => {
  try {
    
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });

    
    const timestamp = new Date().toISOString();

    
    const data = {
      status: "success",
      user: {
        email: "emmanuel.abbah@gmail.com",
        name: "Emmanuel Abbah",
        stack: "Node.js/Express",
      },
      timestamp: timestamp,
      fact: response.data.fact,
    };

    
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    
    const fallbackData = {
      status: "success",
      user: {
        email: "youremail@example.com",
        name: "Emmanuel Abbah",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact right now. Try again later!",
    };

    res.status(200).json(fallbackData);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
