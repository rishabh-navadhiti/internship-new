import axios from "axios";

function getQuote() {
  return axios.get('https://api.api-ninjas.com/v1/quotes', {
    headers: {
      'X-Api-Key': 't0T64FJvCEioinz8oa+0Wg==l7r4DGTmnCyYBitT'  
    }
  }).then(res => {
    return res.data[0];
  })
}
export default getQuote;