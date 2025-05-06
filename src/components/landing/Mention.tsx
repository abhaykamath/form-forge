const Mention = () => {
  return (
    <section className="py-16 px-32 bg-secondary flex justify-center">
      <div className="w-fit h-fit col-span-12 border-2 border-purple-200 rounded-xl shadow-lg bg-purple-100 dark:border-accent dark:bg-background">
        <div className="w-full p-6 text-md leading-7">
          🙏 A huge <span className="font-bold">thank you</span> to the
          incredible developers and communities behind:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="font-bold text-pink-500">React Hook Form</span> —
              for simplifying complex form logic
            </li>
            <li>
              <span className="font-bold text-blue-400">BEEKAI</span> — for
              inspiring intuitive form UX
            </li>
            <li>
              <span className="font-bold">Open Source</span> contributors — who
              make tools like this possible
            </li>
          </ul>
          <p className="mt-4">
            You made <span className="font-bold">Form Forge</span> not just
            possible — but delightful to build. ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mention;
