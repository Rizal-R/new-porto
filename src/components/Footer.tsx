export default function Footer() {
  return (
    <footer className=" py-7 bg-[#242827]">
      <div className="container mx-auto px-6 lg:px-8 text-center text-slate-400">
        <div className="mb-4 text-sm">
          © {new Date().getFullYear()} Rizal Rudiantoro
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* <a
            href="#"
            aria-label="github"
            className="text-slate-300 hover:underline"
          >
            GitHub
          </a> */}
          <a
            href="https://www.linkedin.com/in/rizal-rudiantoro-27595b141/"
            aria-label="linkedin"
            className="text-slate-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
