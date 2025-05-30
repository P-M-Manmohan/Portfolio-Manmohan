import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="conatiner mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            
            <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="flex justify-center gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                    <div className=" space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:manmohanpm65@gmail.com"
                                    target="_blank" 
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    manmohanpm65@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+918289922206" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 8289922206 </a> | 
                                <a href="tel:+82 010-9674-1319" className="text-muted-foreground hover:text-primary transition-colors">
                                     +82 010-9674-1319
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                  Daegu, South Korea 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/manmohan-p-m-78618323a/" target="_blank">
                                <Linkedin/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
