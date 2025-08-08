"use client";
export default function Error({ error, reset }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}>再試行する</button>
    </div>
  );
}
