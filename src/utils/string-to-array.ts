export function convertStringToArray(inputString: string): string[] {
  const words: string[] = [];

  const wordList = inputString.split(',');
  wordList.forEach(word => {
    const trimmedWord = word.trim();
    if (trimmedWord !== '') {
      words.push(trimmedWord);
    }
  });

  return words;
}
