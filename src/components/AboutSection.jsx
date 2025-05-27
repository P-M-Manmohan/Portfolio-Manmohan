import { Code, Database, Bug } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary "> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Passionate Backend Developer</h3>

                    <p className="text-muted-foreground">
                        I specialize is API development and and Database Management to
                        create efficient systems using modern technologies.
                    </p>

                    <p className="text-muted-foreground">
                        I am passionate about creating efficient solutions to
                        solve complex problems, I'm always on the journey to
                        learn more about upcoming technology and changes in the
                        ever evolving world of tech.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> API development </h4>
                                <p className="text-muted-foreground">
                                    Create efficient API and servers with modern technologies.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> API development </h4>
                                <p className="text-muted-foreground">
                                    Create and Maintain relational and Non-relational Databases.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Bug className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Testing & Debugging </h4>
                                <p className="text-muted-foreground">
                                    Optimize code performance and maintain clean, scalable systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
