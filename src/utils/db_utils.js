
  export async function grab_all_client_info() {
    const rawResponse = await fetch(
      "https://email-api-test-dot-greencube-sports.uc.r.appspot.com/db_general_call",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "d46a52bb-7d25-4f63-b238-c4c51b3d46e1",
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
          sql_query: "SELECT DISTINCT client_bdr, name, firstname, lastname FROM users"
        }),
      }
    );
    if (rawResponse.status === 200) {
      const content = await rawResponse.json();
      console.log(content);
      return content
    } else if (rawResponse.status >= 400) {
      const errorContent = await rawResponse.json();
      return errorContent
    }
  }
  
  export async function grab_all_client_id_info() {
    const rawResponse = await fetch(
      "https://email-api-test-dot-greencube-sports.uc.r.appspot.com/db_general_call",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: "d46a52bb-7d25-4f63-b238-c4c51b3d46e1",
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
          sql_query: "SELECT DISTINCT client_id FROM campaigns_targets"
        }),
      }
    );
    if (rawResponse.status === 200) {
      const content = await rawResponse.json();
      console.log(content);
      return content
    } else if (rawResponse.status >= 400) {
      const errorContent = await rawResponse.json();
      return errorContent
    }
  }



export default {grab_all_client_id_info, grab_all_client_info}
