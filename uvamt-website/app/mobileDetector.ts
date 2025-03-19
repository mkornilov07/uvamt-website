// taken from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
export function isMobile(window : Window) {
    return window.innerWidth < 600;
  }