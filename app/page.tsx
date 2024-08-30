import About from "./components/about";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Overview from "./components/overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ScrollToTopButton from "./ui/scroll-top";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen dark:bg-black">
      {/* Navigation bar goes here */}
      <Navbar />

      {/* All sections in the body */}
      {/* padding horizontally & vertical space between elements */}
      {/* <div className="container mx-auto px-5 space-y-10"> */}
      <div className="mx-auto top-0 dark:bg-black">
        <div className="px-32 space-y-10">
          <Overview />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contacts />
        </div>
        {/* Footer */}
        <Footer />
      </div>
      <ScrollToTopButton />
    </main>
  );
}
