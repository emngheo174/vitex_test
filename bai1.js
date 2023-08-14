function generateArrays(value) {
    const arrays = [];
    function generateHelper(currentIndex, currentConfiguration) {
        if (currentIndex === value.length) {
            arrays.push(currentConfiguration.slice());
            return;
        }
    
        const currentOptions = value[currentIndex];
    
        for (let i = 0; i < currentOptions.length; i++) {
            generateHelper(currentIndex + 1, [...currentConfiguration, currentOptions[i]]);
        }
    }
    
    generateHelper(0, []);
    
    return arrays;
    }
  
  const input = [
    ['S', 'M', 'L'],
    ['red', 'blue', 'black', 'white'],
    ['HN', 'HCM']
  ];
  
  console.log(generateArrays(input));