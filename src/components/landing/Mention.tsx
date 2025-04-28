const Mention = () => {
  return (
    <div className="h-fit mt-8 col-span-12 border-2 border-purple-200 rounded-xl shadow-lg bg-purple-100 dark:border-accent dark:bg-background">
      <div className="w-full p-4 text-md">
        A <span className="font-bold">special thanks</span> to the amazing
        people behind{" "}
        <span className="font-bold text-pink-500">React Hook Form</span>,{" "}
        <span className="font-bold text-blue-400">BEEKAI</span>, and the{" "}
        <span className="font-bold">Open Source</span> community — whose work
        inspired me and made it possible to create{" "}
        <span className="font-bold">Form Forge</span> !
      </div>
    </div>
  );
};

export default Mention;
