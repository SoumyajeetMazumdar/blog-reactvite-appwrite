function App() {
  console.log(import.meta.env.VITE_RANDOM_KEY);
  console.log(import.meta.env.REACT_APP_APPWRITE_URL);

  return (
    <>
      <main className="h-screen w-screen flex flex-col justify-center items-center gap-5 bg-green-200 text-white">
        <h1 className="w-fit p-5 border-2 border-none shadow-black shadow-lg rounded-xl bg-slate-600 self ">
          A blog started using Appwrite, Tailwind, react, vite, react-router,
          and react-hook-forms
        </h1>
        <h1 className="w-fit p-5 border-2 border-none shadow-black shadow-lg rounded-xl bg-slate-600">
          A blog started using Appwrite, Tailwind, react, vite, react-router,
          and react-hook-forms
        </h1>
      </main>
    </>
  );
}

export default App;
