export const DICE_TYPES = [
  'ability',
  'proficiency',
  'boost',
  'difficulty',
  'challenge',
  'setback',
]

const BOOST = [ 
  '',
  '',
  's',
  'sa',
  'aa',
  'a'
]

const SETBACK = [
  '',
  '',
  'f',
  'f',
  'h',
  'h'
]

const ABILITY = [
  '',
  's',
  's',
  'ss',
  'a',
  'a',
  'sa',
  'aa'
]

const DIFFICULTY = [
  '',
  'f',
  'ff',
  'h',
  'h',
  'h',
  'hh',
  'fh'
]

const PROFICIENCY = [
  '',
  's',
  's',
  'ss',
  'ss',
  'a',
  'sa',
  'sa',
  'sa',
  'aa',
  'aa',
  'ts'
]

const CHALLENGE = [
  '',
  'f',
  'f',
  'ff',
  'ff',
  'h',
  'h',
  'fh',
  'fh',
  'hh',
  'hh',
  'df'
]

const nameMap = {
  'challenge': CHALLENGE,
  'proficiency': PROFICIENCY,
  'difficulty': DIFFICULTY,
  'ability': ABILITY,
  'setback': SETBACK,
  'boost': BOOST,
}

const countResults = (results) => {
  let resultCounts = {
    a: 0,
    s: 0,
    t: 0,
    h: 0,
    f: 0,
    d: 0
  }
  results.forEach((result) => {
    resultCounts[result] += 1
  })

  return resultCounts
}

export const consolidateResults = (results) => {
  let resultCounts = countResults(results)

  let ahMin = Math.min(resultCounts.a, resultCounts.h);
  resultCounts.a -= ahMin
  resultCounts.h -= ahMin

  let fsMin = Math.min(resultCounts.s, resultCounts.f)
  resultCounts.s -= fsMin
  resultCounts.f -= fsMin
  
  let newResults = []
  Object.keys(resultCounts).forEach((symbol) => {
    let count = resultCounts[symbol]
    for (var i = 0; i < count; i++) {
      newResults.push(symbol)
    }
  })

  return newResults
}

export const rollDie = (type) => {
  let diceMap = nameMap[type]

  if (!diceMap) return null
  
  let rollIndex = Math.floor(Math.random() * diceMap.length)
  return diceMap[rollIndex]
}

export const diceSort = (a, b) => {
  return DICE_TYPES.indexOf(a) - DICE_TYPES.indexOf(b)
}