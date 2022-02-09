export default async function fetchResponse({ email, password }) {
  const url = "https://reqres.in/api/login";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return { error: null, data };
  } catch (e) {
    return { error: e, data: null };
  }
}

console.log(
  "There is nothing to see here, just a custom message left by me- Prince Thind, hopefully you like this like little easter egg :)"
);
