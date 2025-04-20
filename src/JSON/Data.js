export const chartsData = {
  "Quiddittch-Pitch": {
    type: "line",
    data: {
      x: ["2018", "2019", "2020", "2021", "2022"],
      y: [5, 11, 6, 20, 15],
    },
    layout: {
      title: "Quidditch Match Trends",
      xaxis: { title: "Year" },
      yaxis: { title: "Number of Matches" },
      plot_bgcolor: "#f0f0f0",
      color: "#69c0ff",
    },
  },

  "Graveyard1": {
    type: "bar",
    data: {
      x: ["Year 2019", "Year 2020", "Year 2021" , "Year 2022" , "Year 2023"],
      y: [5, 3, 2 , 7 , 1],
    },
    layout: {
      title: "Student Losses in Graveyard I",
      xaxis: { title: "Hogwarts Year" },
      yaxis: { title: "Reported Deaths" },
      plot_bgcolor: "#f0f0f0",
      color: "#722ed1",
    },
  },
"Graveyard2": {
    type: "pie",
    data: {
      labels: ["Class 1", "Class 2", "Class 3" , "Class 4"],  
      values: [15, 10, 25 , 5],  
    },
    layout: {
      title: "Student dies and lives in Graveyard",
      plot_bgcolor: "#f0f0f0", 
      showlegend: true,  
      legend: { orientation: "h", x: 0, y: 1.1 },  
      titlefont: { size: 24, color: "#333" },  
      margin: { t: 50, b: 50, l: 50, r: 50 },  
    },
  },

    "Classroom-Area2": {
      type: "scatterpolar",
      data: {
        r: [80, 65, 180, 50, 70],  
        theta: ["Astronomy", "Herbology", "Transfiguration", "History", "Divination"], 
        type: "scatterpolar", 
        fill: "toself",  
      },
      layout: {
        title: "Class Performance Radar - Area 2",
        polar: {
          radialaxis: { visible: true, range: [0, 100] },  
        },
        plot_bgcolor: "#f0f0f0",
      },
    },  

  "Snaps-Cave1": {
    type: "scatter",
    data: {
      x: ["Felix Felicis ", "Amortentia", "Amortentia" , "Polyjuice Potion"],
      y: [12, 8, 15 , 25],
    },
    layout: {
      title: "Potion Failures in Snape's Cave I",
      xaxis: { title: "Potion Type" },
      yaxis: { title: "Explosion Count" },
      plot_bgcolor: "#f0f0f0",
    },
  },

  "Snaps-Cave2": {
    type: "bar",
    data: {
      x: ["Draft of Peace ", "Wiggenweld Potion", "Draught of Living Death" , "Sleeping Draught "],
      y: [40, 10, 25 , 15],
    },
    layout: {
      title: "Potion Success Rate in Snape's Cave II",
      xaxis: { title: "Potion Type" },
      yaxis: { title: "Success Count" },
      plot_bgcolor: "#f0f0f0",
    },
  },

  "Classroom-Area1": {
    type: "pie",
    data: {
      labels: ["Charms", "Defense", "Potions"],
      values: [40, 35, 25],
    },
    layout: {
      title: "Student Enrollment by Subject - Area 1",
      plot_bgcolor: "#f0f0f0",
    },
  },

  "Black-Lake": {
    type: "bar",
    data: {
      x: ["The Lost Relic of the Merpeople", "Rescue the Lost Creature", "Retrieve the Sunken Ship of the Black Lake"],
      y: [8, 3, 5],
    },
    layout: {
      title: "Underwater Missions in Black Lake",
      xaxis: { title: "Mission" },
      yaxis: { title: "Students Participated" },
      plot_bgcolor: "#f0f0f0",
    },
  },

  "Intrance-TH-Dungeon": {
    type: "line",
    data: {
      x: ["00:00", "01:00", "02:00", "03:00", "04:00"],
      y: [5, 7, 4, 9, 3],
    },
    layout: {
      title: "Dungeon Entry Timeline",
      xaxis: { title: "Time of Night" },
      yaxis: { title: "Entrants" },
      plot_bgcolor: "#f0f0f0",
    },
  },
};
