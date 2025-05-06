const Upcoming = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-4 p-4 py-16">
      <h2 className="text-4xl font-bold text-primary dark:text-primary-foreground">
        What's Next?
      </h2>
      <p className="text-lg text-primary dark:text-primary-foreground max-w-xl">
        We're just getting started. Here's what's brewing in the lab:
      </p>
      <ul className="text-primary dark:text-primary-foreground list-disc list-inside text-left mt-4">
        <li>🔧 Form Builder Interface with drag & drop</li>
        <li>👤 User Profiles to save and manage form templates</li>
        <li>📤 Export to JSON, JSX, or HTML</li>
        <li>🧩 More fields</li>
      </ul>
    </section>
  );
};

export default Upcoming;
