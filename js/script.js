import { SlideNav } from "./modules/slide.js";
import initMenuMobile from "./modules/menu-mobile.js";
import outsideClick from "./modules/outsideclick.js";
import initScrollLinkSuave from "./modules/scroll-link-suave.js";
initMenuMobile();
initScrollLinkSuave();
const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl();