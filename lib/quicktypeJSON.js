const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
} = require('quicktype-core');

module.exports = async function quicktypeJSON(
  targetLanguage,
  typeName,
  jsonString
) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  // We could add multiple samples for the same desired
  // type, or many sources for other types. Here we're
  // just making one type from one piece of sample JSON.
  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
    // samples:[
    //   JSON.stringify()
    // ]
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: {
      'just-types': true,
      'runtime-typecheck': false,
    },
  });
};
