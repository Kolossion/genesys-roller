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
  't'
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
  'd'
]

const nameMap = {
  'challenge': CHALLENGE,
  'proficiency': PROFICIENCY,
  'difficulty': DIFFICULTY,
  'ability': ABILITY,
  'setback': SETBACK,
  'boost': BOOST,
}

export const rollDie = (type) => {
  let diceMap = nameMap[type]

  if (!diceMap) return null
  
  let rollIndex = Math.floor(Math.random() * diceMap.length)
  return diceMap[rollIndex]
}