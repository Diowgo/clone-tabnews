test("API response is 200", async () => {
  const response = await fetch("http://localhost:3000");
  expect(response.status).toBe(200);
});
