export async function sendMail() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dest: "radlab.noreply@gmail.com" }),
      // params: JSON.stringify({ dest: "radlab.noreply@gmail.com" }),

    };
    await fetch(
      "http://localhost:5000/wellbeing-49fed/us-central1/sendMail",
      requestOptions
    )
      .then((res) => {
        console.log(res)
        // console.log(res.text())
        return res.text()
      })
      .then((data) => {
        console.log(data);
        // console.log(data.json());
      });
    }