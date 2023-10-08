// Function to display data in a clean format
function displayCleanData(data) {
  // Extract specific fields
  const chatgptKeywords = data.records[0].chatgpt_keywords.value;
  const bingKeywords = data.records[0].bing_keywords.value;
  const agency = data.records[0].agency.value;
  const chatgptLongDesc = data.records[0].chatgpt_long_desc.value;
  const bardKeywords = data.records[0].bard_keywords.value;

  // Create an HTML structure for displaying the data in rounded boxes
  const htmlOutput = `
    <div class="rounded-box">
      <p class="data-heading">ChatGPT Keywords:</p>
      <p>${chatgptKeywords}</p>
    </div>

    <div class="rounded-box">
      <p class="data-heading">Agency:</p>
      <p>${agency}</p>
    </div>

    <div class="rounded-box">
      <p class="data-heading">ChatGPT Long Description:</p>
      <p>${chatgptLongDesc}</p>
    </div>
  `;

  // Display the HTML in the popup
  document.getElementById('urlOutput').innerHTML = htmlOutput;

  // Display Bard and Bing keywords in the dropdown
  document.getElementById('keywords').innerHTML = `
    <p class="data-heading">Bing Keywords:</p>
    <p>${bingKeywords}</p>
    <p class="data-heading">Bard Keywords:</p>
    <p>${bardKeywords}</p>
  `;
}

// Handle button click to display clean data
document.getElementById('showUrlsButton').addEventListener('click', function () {
  // Simulate data for the predefined URL
  const simulatedData = {
    "records": [
      {
        "chatgpt_keywords": { "type": "SINGLE_LINE_TEXT", "value": "tropical weather, clouds, rainfall, weather insights, predictive tools" },
        "bing_keywords": { "type": "SINGLE_LINE_TEXT", "value": "Bing keyword value" },
        "agency": { "type": "SINGLE_LINE_TEXT", "value": "NASA" },
        "chatgpt_long_desc": {
          "type": "MULTI_LINE_TEXT",
          "value": "\"Tropical Weather Insights\" is a hub of valuable data presenting a deep dive into tropical weather, specifically concerning clouds and rainfall. This information is critical for meteorologists, researchers, and anyone interested in weather patterns in tropical areas. Whether it's understanding cloud formations, predicting rain patterns, or preparing for tropical vacations, this resource equips individuals with knowledge about the fascinating and dynamic weather systems that characterize tropical regions, empowering them to make informed decisions regarding their plans and activities in these areas."
        },
        "bard_keywords": { "type": "SINGLE_LINE_TEXT", "value": "Bard keyword value" }
      }
    ]
  };

  // Display the clean data
  displayCleanData(simulatedData);
});

// Show or hide Bard and Bing keywords when the button is clicked
document.getElementById('showKeywordsButton').addEventListener('click', function () {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
});


