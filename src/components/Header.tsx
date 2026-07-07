function Header() {
  return (
    <section className="flex justify-between items-center p-4 bg-gray-800 text-white font-bold">
      <div className="flex items-center gap-4">
        <button type="button" className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <h1 
            className="
              text-xl
              hover:text-2xl
              transition-all
              duration-300">
              CURRICULUM VITAE
            </h1>
        </button>
        
      </div>
      

      <div className="flex gap-4">
        <button 
        type="button"
        className="
          text-xl
          hover:text-2xl
          transition-all
          duration-300"
        aria-label="resume">
          RESUME
        </button>
        <button 
          type="button"
          className="
            text-xl
            hover:text-2xl
            transition-all
            duration-300"
          aria-label="resume">
            PROJECTS
        </button>
        <button 
          type="button"
          className="
            text-xl
            hover:text-2xl
            transition-all
            duration-300"
          aria-label="skills">
            SKILLS
          </button>
        <button 
          type="button"
          className="
            text-xl
            hover:text-2xl
            transition-all
            duration-300"
          aria-label="contact">
            CONTACT
          </button>
      </div>
    </section>
  );
}

export default Header;
