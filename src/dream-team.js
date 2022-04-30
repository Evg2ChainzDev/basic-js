const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) ) {
    const alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    members = members.filter(el => typeof el === 'string');
    let membersTrimmed = members.map(member => member.trim()).map(el => el[0].toUpperCase());
    console.log(membersTrimmed)
    // console.log(members)
    // console.log(members2)
    let members2sorted = membersTrimmed.sort().join('');
    // console.log(members2sorted)
    return members2sorted
  } else { return false }
}

module.exports = {
  createDreamTeam
};
