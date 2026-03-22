import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a href="https://github.com/SaaifKhan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/saifkh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://medium.com/@saif-khan09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <FileText size={18} />
          </a>
          <a href="https://stackoverflow.com/users/15327167/saif-khan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono">
            SO
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Built by Saif Khan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
