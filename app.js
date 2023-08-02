const extractCharacters = (str, numCharacters) => {
    return str.substring(0, numCharacters);
  };
  
  const inputString = "Krishna";
  const numberOfCharacters = 5;
  
  const extractedString = extractCharacters(inputString, numberOfCharacters);
  console.log(`Extracted ${numberOfCharacters} characters: ${extractedString}`);
  