import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id:1,
        title: "Blog Site",
        description: "Basic Blog site using JavaScript and EJS with postgres database.",
        image: "/projects/Blog_site.png",
        tags: ["HTML", "JavaScript", "Express", "Node.js", "PostgreSql", "EJS", "CSS"],
        githubUrl: "https://github.com/P-M-Manmohan/Blog-site",
    },
    {
        id:2,
        title: "Point of Sale System",
        description: "Basic Point of sale system Made with React, Tailwind CSS and Rust Backend.",
        image: "/projects/POS.png",
        tags: ["React", "Tailwind", "Rust", "MongoDB", "PostgreSql"],
        githubUrl: "https://github.com/P-M-Manmohan/POS",
    },
    {
        id:3,
        title: "Password Manager",
        description: "Basic CLI based password manager Made with rust.",
        image: "/projects/Password_manager.jpg",
        tags: ["Rust", "Ecryption"],
        githubUrl: "https://github.com/P-M-Manmohan/Password-Manager",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mc-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Features <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-12xl mx-auto">
                Here are some of my recent projects. Each Projects was
                carefully crafted with attention to detail, performance,
                and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group gradient-border rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover trasition-tranform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex overflow-x-auto gap-2 mb-4 scroll-thin">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        <div className="text-center mt-12">
            <a href="https://github.com/P-M-Manmohan"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My Github <ArrowRight size={16}/>
                </a>
        </div>

        </div>
    </section>
}
