import { Facebook, Linkedin, Youtube } from "lucide-react";
import { site } from "../../config/site";

const channelIcons = { linkedin: Linkedin, youtube: Youtube, facebook: Facebook };

export function SocialLinks() {
  return <nav className="social-links" aria-label={site.founderSocial.heading}>
    <p className="social-links__heading">{site.founderSocial.heading}</p>
    <div className="social-links__items">
      {site.founderSocial.links.map(link => {
        const Icon = channelIcons[link.channel as keyof typeof channelIcons];
        return <a key={link.channel} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} for Antonio Cuevas, opens in a new tab`}>
          <Icon size={16} aria-hidden="true" /><span>{link.label}</span>
        </a>;
      })}
    </div>
  </nav>;
}