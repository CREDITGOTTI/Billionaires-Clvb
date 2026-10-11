import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "./Button";
import story01 from "../../assets/testimonials/community-story-01.jpeg.asset.json";
import story02 from "../../assets/testimonials/community-story-02.jpeg.asset.json";
import story03 from "../../assets/testimonials/community-story-03.jpeg.asset.json";
import story04 from "../../assets/testimonials/community-story-04.jpeg.asset.json";
import story05 from "../../assets/testimonials/community-story-05.jpeg.asset.json";
import story06 from "../../assets/testimonials/community-story-06.jpeg.asset.json";
import story07 from "../../assets/testimonials/community-story-07.jpeg.asset.json";

const stories = [
  { image: story01.url, name: "BluKonaCapri", label: "University member story" },
  { image: story02.url, name: "V.I.P ~ Onlyz", label: "University member story" },
  { image: story03.url, name: "Demond A Harp", label: "Community story" },
  { image: story04.url, name: "powermang", label: "Community story" },
  { image: story05.url, name: "Community member", label: "Client story" },
  { image: story06.url, name: "Ruben Atba", label: "Community story" },
  { image: story07.url, name: "YBC member", label: "University member story" },
] as const;

export function Testimonials() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const section = useRef<HTMLElement>(null);
  const touchX = useRef<number | null>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) setPaused(true);
    const changed = () => { if (reduced.matches) setPaused(true); };
    reduced.addEventListener("change", changed);
    const tab = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", tab); tab();
    const observer = new IntersectionObserver(entries => setVisible(entries[0]?.isIntersecting ?? false), { threshold: .15 });
    if (section.current) observer.observe(section.current);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", tab); reduced.removeEventListener("change", changed); };
  }, []);
  useEffect(() => {
    if (paused || hovered || focused || !visible || !tabVisible) return;
    const timer = window.setInterval(() => setSlide(value => (value + 1) % stories.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, visible, tabVisible]);
  const currentStory = stories[slide] ?? stories[0];
  return <section ref={section} className="section section--stories" aria-roledescription="carousel" aria-label="Community stories" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}><div className="shell"><div className="section-heading section-heading--split"><div><p className="eyebrow">COMMUNITY VOICES / 06</p><h2>Real experiences from our community.</h2></div><div className="story-controls"><Button variant="icon" aria-label="Previous client story" onClick={() => setSlide((slide + stories.length - 1) % stories.length)}><ArrowLeft size={19} /></Button><span>0{slide + 1} / 0{stories.length}</span><Button variant="icon" aria-label="Next client story" onClick={() => setSlide((slide + 1) % stories.length)}><ArrowRight size={19} /></Button><Button variant="quiet" className="story-pause" onClick={() => setPaused(value => !value)} aria-label={paused ? "Play stories" : "Pause stories"}>{paused ? <Play size={16} /> : <Pause size={16} />}{paused ? "Play" : "Pause"}</Button></div></div><figure className="story-feature" aria-live="off" onTouchStart={event => { touchX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={event => { const end = event.changedTouches[0]?.clientX; if (end !== undefined && touchX.current !== null && Math.abs(end - touchX.current) > 45) setSlide(value => (value + (end < (touchX.current ?? end) ? 1 : stories.length - 1)) % stories.length); touchX.current = null; }}><div className="story-feature__image">{stories.map((story,index) => <img key={story.image} className={index === slide ? "is-current" : ""} src={story.image} alt={index === slide ? `Client testimony shared by ${story.name}` : ""} aria-hidden={index !== slide} loading="lazy" />)}</div><figcaption key={slide} className="story-caption"><span>COMMUNITY STORY / {currentStory.label.toUpperCase()}</span><h3>{currentStory.name}</h3><p>Shared by a member of the Billionaires Clvb community.</p></figcaption><span className="preview-tag">CLIENT SHARED</span></figure><div className="story-dots" aria-label="Select community story">{stories.map((story,index) => <Button key={story.image} variant="icon" aria-label={`Show story ${index + 1}`} aria-pressed={index === slide} onClick={() => setSlide(index)}><span /></Button>)}</div><p className="story-disclosure">Individual experiences vary. Results are not guaranteed.</p></div></section>;
}
