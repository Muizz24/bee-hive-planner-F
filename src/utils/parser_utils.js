

export function parse_sql_to_react(message) {
  const dictionary = require("../docs/gc_dictionary.json")
  const our_values = Object.keys(dictionary)

  let new_msg = message
  our_values.forEach(code => {
    new_msg = new_msg.split(code).join(dictionary[code])
  })

  return new_msg
}




export default {parse_sql_to_react}
