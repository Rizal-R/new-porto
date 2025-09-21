import {
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaDatabase,
  FaLinux,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiNextdotjs,
  SiJquery,
  SiTailwindcss,
  SiAntdesign,
  SiExpress,
  SiFigma,
} from "react-icons/si";
import profile from "../assets/img.jpg";

export default function Hero() {
  return (
    <section id="hero" className="sm:pt-20 pt-14">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight ">
            Hi, I'm <span className="text-neon-pink">Rizal Rudiantoro</span>
            <div className="text-neon-blue">Software Engineer</div> with 5+
            Years of Experience.
          </h1>

          <p className="mt-4 max-w-xl text-white/90">
            Graduated in Informatics from{" "}
            <span className="font-semibold text-white">
              Universitas Brawijaya
            </span>
            . I craft <span className="font-semibold text-white">scalable</span>
            , <span className="font-semibold text-white">responsive</span>, and{" "}
            <span className="font-semibold text-white">futuristic</span> web
            applications using modern frameworks and cutting-edge technologies.
          </p>
          <p className="mt-5">
            Over 5 years of experience building scalable, high-performance
            applications from frontend to backend. Skilled in modern frameworks,
            databases, and cloud deployment.
          </p>
           <div className="flex justify-center sm:hidden">
            <div className="w-1/2 mt-10 rounded-full shadow-black shadow-md block">
              <div className="text-center text-slate-400">
                <img className="rounded-full" src={profile} />
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <a className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-black border border-neon-blue text-neon-blue shadow-[0_0_15px_#00f0ff] hover:shadow-[0_0_10px_#00f0ff] transition-transform hover:-translate-y-1">
              <a
                href="https://www.linkedin.com/in/rizal-rudiantoro-27595b141/"
                className="flex items-center justify-center"
              >
                <div className="mr-2">Connect with me on</div>
                <div className="items-center text-2xl">
                  <FaLinkedin />
                </div>
              </a>
            </a>
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-neon-pink to-neon-blue font-semibold text-black shadow-[0_0_15px_#ff00ff] hover:shadow-[0_0_25px_#ff00ff]"
            >
              Contact Me
            </a> */}
          </div>
         

          {/* Education & Location */}
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
            <div className="p-3 card-glass rounded-xl text-center">
              <div className="text-xs text-slate-400">University</div>
              <div className="font-medium text-sm">Brawijaya</div>
            </div>
            <div className="p-3 card-glass rounded-xl text-center">
              <div className="text-xs text-slate-400">Location</div>
              <div className="font-medium text-sm">Surabaya</div>
            </div>
            <div className="p-3 card-glass rounded-xl text-center">
              <div className="text-xs text-slate-400">Stack</div>
              <div className="font-medium text-sm">Full-stack</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <SiRubyonrails className="text-red-600 text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Ruby on Rails</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiExpress className="text-gray-200 text-4xl animate-bounce hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Express.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaReact className="text-cyan-400 text-4xl animate-spin-slow hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">React.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiNextdotjs className="text-white text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Next.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaVuejs className="text-green-500 text-4xl animate-bounce hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Vue.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiJquery className="text-sky-400 text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">jQuery</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss className="text-cyan-500 text-4xl animate-bounce hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">TailwindCSS</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiAntdesign className="text-blue-500 text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Ant Design</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaBootstrap className="text-purple-600 text-4xl animate-bounce hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaDatabase className="text-amber-400 text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">MySQL</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaLinux className="text-gray-400 text-4xl animate-pulse hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Linux</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <SiFigma className="text-pink-500 text-4xl animate-bounce hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-400">Figma</span>
            </div>
          </div>
        </div>

        {/* Illustration / Image */}
        <div className="relative hidden sm:block">
          <div className="w-full h-full">
            <div className="text-center text-slate-400">
              <img
                className="rounded-full shadow-black shadow-lg block"
                src={profile}
              />
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-pink/20 blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
